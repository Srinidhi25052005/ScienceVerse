# ScienceVerse Backend API

## Base URL
http://localhost:5000

## All API Routes

### Auth
POST /api/auth/register - Create account
POST /api/auth/login - Login and get token

### Stories  
GET /api/stories - Get all stories
GET /api/stories/:id - Get one story

### Quiz
GET /api/quiz/:storyId - Get quiz questions
POST /api/quiz/submit - Submit answer

### Progress
POST /api/progress/complete - Complete a story
GET /api/progress/:userId - Get user progress

### Rewards
POST /api/rewards/add - Add points
GET /api/rewards/:userId - Get user rewards
GET /api/rewards/leaderboard/top - Top 10 users

## How to Run
1. npm install
2. Create .env with MONGO_URI and JWT_SECRET
3. nodemon server.js
4. node seed.js (to add stories to database)