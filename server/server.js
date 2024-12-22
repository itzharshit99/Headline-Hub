require("dotenv").config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
//middlewares
app.use(cors());
app.use(express.urlencoded({extended:true}));

const API_KEY = process.env.API_KEY;

function fetchNews(url,res){
  axios.get(url).then(response =>{
    if(response.data.totalResults >0){
      res.json({
        status:200,
        success:true,
        message:"successfully fetched the data",
        data:response.data
      })
    }
    else{
      res.json({
        status:200,
        success:true,
        message:"No more results to show"
      })
    }
  }).catch(error=>{
    res.json({
      status:500,
      success:false,
      message:"failed to fetch data from the api",
      error:error.message
    })
  })
}
//routes
app.get("/all-news",(req,res)=>{
  let pageSize = parseInt(req.query.pageSize) || 40;
  let page = parseInt(req.query.page) || 1;
  let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url,res);

})
//top-headlines
app.options("/top-headlines",cors());
app.get("/top-headlines",(req,res)=>{
  let pageSize = parseInt(req.query.pageSize) || 80;
  let page = parseInt(req.query.page) || 1;
  let category = req.query.category || "technology";
  let url = `https://newsapi.org/v2/top-headlines?category=${category}&langauge=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url,res);

})
//country
app.options('/country:iso',cors());
app.get('/country/:iso',(req,res)=>{
  let pageSize = parseInt(req.query.pageSize) || 80;
  let page = parseInt(req.query.page) || 1;
  const country = req.params.iso;
  let url =`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
  fetchNews(url,res);

})



//port 
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`server is listening on port ${PORT}`)
})