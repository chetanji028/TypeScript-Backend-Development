# Installation and Setup Instructions

## Prerequisites
Before running the project, make sure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Steps to Setup the Project

1. **Clone the repository**:
   Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/chetanji028/TypeScript-Backend-Development.git 

   2. Install dependencies: Navigate to the project directory and install the required dependencies using npm: 
   cd log-service
npm install 

3. Run the project: To start the server, run: 
npm run start 
//The server will be running at http://localhost:3000/. 

4. Test the endpoints: Use any HTTP client (Postman, Insomnia, or a browser) to make GET requests:

GET /logs?level=ERROR
GET /logs?search=Database
GET /logs?from=2025-02-25T12:30:00&to=2025-02-25T12:32:00 

5. Stopping the server: To stop the server, press Ctrl + C in your terminal. 
 