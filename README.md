# Headline Hub

## Project Overview
The Headline Hub is a web application that fetches and displays news from [newsapi.org](https://newsapi.org). Users can explore top headlines, country-specific news, and more. The application is designed to provide a seamless and responsive user experience.

## Features
- Fetch top headlines from various categories.
- Browse country-specific news.
- Interactive and user-friendly interface.
- Fully responsive design for desktop and mobile devices.

## Screenshots
![Screenshot 2024-12-22 160718](https://github.com/user-attachments/assets/77da6f94-e58d-4668-8949-c0759fa07bc5)


![Screenshot 2024-12-22 160751](https://github.com/user-attachments/assets/d861b877-5bf2-48d3-8d62-247cbf60b183)


![Screenshot 2024-12-22 160804](https://github.com/user-attachments/assets/f4cfb33f-c315-42f3-80e0-8717fa099c31)



## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js
- **API**: NewsAPI (https://newsapi.org)
- **HTTP Client**: Axios

## Installation and Setup

### Prerequisites
- Node.js installed on your machine.
- A valid API key from [newsapi.org](https://newsapi.org/register).

### Steps to Run the Project
1. **Clone the repository**:
   ```bash
   git clone https://github.com/itzharshit99/Headline-Hub.git
   cd headline-hub
   ```

2. **Install dependencies**:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the `server` directory and add the following:
     ```env
     API_KEY=your_api_key_here
     PORT=3000
     ```

4. **Start the development servers**:
   ```bash
   # Start the backend server
   cd server
   nodemon server.js

   # Start the frontend server
   cd ../client
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.
6. ## API Integration
The project integrates with [NewsAPI](https://newsapi.org) for fetching news data. Axios is used for making HTTP requests.


## Future Enhancements
- Add search functionality to find news by keyword.
- Add user preferences for personalized news feeds.

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](#).

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [newsapi.org](https://newsapi.org) for providing the news data.
- Open-source libraries and tools used in this project.

---

Feel free to reach out with any questions or feedback about this project!
