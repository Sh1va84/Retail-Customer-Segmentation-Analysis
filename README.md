<div align="center">
<img src="https://www.google.com/search?q=https://placehold.co/1200x400/0d1117/7928CA%3Ftext%3DSEGFAULT%26font%3Dinter" alt="SEGFAULT Banner"/>
<h1>SEGFAULT: The Ultimate Coding Practice Platform</h1>
<p>
<strong>A full-stack MERN application for developers to practice DSA, get AI-powered feedback, and watch expert video solutions.</strong>
</p>

<p>
<a href="https://segfault-frontend-1.netlify.app" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Live_Demo-00C7B7%3Fstyle%3Dfor-the-badge%26logo%3Dnetlify%26logoColor%3Dwhite" alt="Live Demo"/>
</a>
<a href="https://www.google.com/search?q=https://github.com/shiva-91/segfault-repo/issues" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/github/issues/shiva-91/segfault-repo%3Fstyle%3Dfor-the-badge%26color%3Dea6962" alt="GitHub issues"/>
</a>
<a href="https://www.google.com/search?q=https://github.com/shiva-91/segfault-repo/stargazers" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/github/stars/shiva-91/segfault-repo%3Fstyle%3Dfor-the-badge%26color%3Df9e2af" alt="GitHub stars"/>
</a>
</p>

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB" alt="React"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Node.js-339933%3Fstyle%3Dfor-the-badge%26logo%3Dnodedotjs%26logoColor%3Dwhite" alt="Node.js"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/MongoDB-4EA94B%3Fstyle%3Dfor-the-badge%26logo%3Dmongodb%26logoColor%3Dwhite" alt="MongoDB"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Redux-593D88%3Fstyle%3Dfor-the-badge%26logo%3Dredux%26logoColor%3Dwhite" alt="Redux"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite" alt="Tailwind CSS"/>
</p>
</div>

📖 Table of Contents
Live Demo

About The Project

Core Features

Technology Stack

Architecture Deep Dive

Authentication Flow

Code Submission & Judging

AI Tutor Integration

Video Content Management

Getting Started

API Endpoints

Contributing

License

🚀 Live Demo & Showcase
Check out the live application here!

Replace this image with a GIF of your application in action!

🌟 About The Project
SEGFAULT is a comprehensive platform built to bridge the gap between learning and practicing Data Structures and Algorithms. Traditional platforms often lack interactive help or detailed explanations. SEGFAULT addresses this by integrating an AI-powered tutor and video editorials directly into the problem-solving workflow. It's designed to be a one-stop solution for coders preparing for technical interviews or simply looking to sharpen their skills. The platform provides a seamless and engaging user experience for learners, while offering powerful and intuitive content management tools for administrators.

✨ Core Features
<table width="100%">
<tr>
<td width="50%" valign="top">
<h3>🧑‍💻 For The Coder</h3>
<ul>
<li><b>Interactive Monaco Editor:</b> Code in C++, Java, or JavaScript with a familiar, feature-rich editor.</li>
<li><b>Instant Code Execution:</b> Run code against visible test cases for rapid debugging and iteration.</li>
<li><b>Robust Submission Judging:</b> Submit final solutions for evaluation against a comprehensive suite of hidden test cases.</li>
<li><b>AI-Powered Tutor:</b> Get contextual hints, code reviews, and detailed explanations from a Google Gemini-powered AI assistant.</li>
<li><b>Detailed Submission History:</b> Track your progress, review the status of past submissions, and view your code.</li>
<li><b>Filterable Problemset:</b> Easily discover problems by difficulty, tags (e.g., Array, DP), or solved status.</li>
<li><b>Video Editorials:</b> Watch high-quality video explanations for problems, created by administrators.</li>
</ul>
</td>
<td width="50%" valign="top">
<h3>👨‍💼 For The Administrator</h3>
<ul>
<li><b>Full Problem Management:</b> Complete CRUD (Create, Read, Update, Delete) functionality for managing problems.</li>
<li><b>Secure Admin Dashboard:</b> A dedicated and protected panel for all administrative tasks.</li>
<li><b>Seamless Video Uploads:</b> Upload and manage video solutions with progress indicators, powered by Cloudinary.</li>
<li><b>Role-Based Access Control:</b> Secure endpoints ensure that only authorized admins can create or modify content.</li>
<li><b>Centralized Content Control:</b> A single, intuitive interface to manage the entire platform's educational content.</li>
</ul>
</td>
</tr>
</table>

🛠️ Technology Stack
Category

Technology / Service

Frontend

React.js, Redux Toolkit, React Router, Vite, Tailwind CSS, DaisyUI, Monaco Editor, Axios

Backend

Node.js, Express.js

Database

MongoDB, Mongoose (ODM)

Caching

Redis (For session/token blocklisting on logout)

Auth

JSON Web Tokens (JWT), bcrypt, cookie-parser

Services

Judge0 (Online Code Execution), Google Gemini (AI Chat), Cloudinary (Video Upload & Storage)

🏗️ Architecture Deep Dive
Authentication Flow
Registration/Login: The user provides credentials which are validated by the backend. Upon success, a secure password hash is stored, and a JSON Web Token (JWT) is generated.

Token Issuance: The JWT, containing the user ID and role, is signed with a secret key and sent to the client as an httpOnly cookie for security.

Authenticated Requests: For subsequent requests, the browser automatically sends the JWT cookie. The userMiddleware (or adminMiddleware) on the backend intercepts the request, verifies the token's signature, and checks it's not on the Redis blocklist.

Logout: When a user logs out, the JWT is added to a Redis blocklist with an expiration time matching the token's. This effectively invalidates the token, preventing its reuse even before it expires.

Code Submission & Judging
User Action: The user writes code in the Monaco editor and clicks "Run" or "Submit".

API Call: The frontend sends the source code, selected language, and problem ID to the backend.

Backend Controller: The userSubmission controller prepares a batch of submissions for the Judge0 API. For a "Run" action, it uses the visible test cases. For a "Submit" action, it uses the hidden test cases from the database.

Judge0 Interaction: The source code and test cases are Base64 encoded and sent to Judge0. The backend receives submission tokens in response.

Polling for Results: The backend polls the Judge0 API with the submission tokens until all test cases are processed.

Result Processing: The results are decoded, and the backend calculates the final status (Accepted, Wrong Answer, etc.), runtime, and memory usage.

Database Update: A new entry is created in the submissions collection with the detailed results. If the submission was accepted, the user's problemSolved array is updated.

Response to Client: The final, processed result is sent back to the frontend to be displayed to the user.

AI Tutor Integration
User Query: The user types a question into the ChatAi component.

Contextual Payload: The frontend sends the user's message history along with the full context of the current problem (title, description, test cases, starter code) to the /ai/chat endpoint.

Backend Prompting: The solveDoubt controller receives this payload and constructs a detailed system prompt for the Google Gemini API. This prompt instructs the AI to act as a DSA tutor, strictly within the context of the provided problem.

Gemini API Call: The backend sends the structured request to the Gemini API.

Streaming Response: The AI generates a response, which is sent back to the client and displayed in the chat interface, continuing the conversation.

Video Content Management
Admin Action: An admin selects a video file to upload for a specific problem in the AdminUpload component.

Signature Request: Before uploading, the frontend requests a secure upload signature from the backend (/video/create/:problemId).

Signature Generation: The backend uses the Cloudinary SDK and its secret key to generate a unique, short-lived signature and a public_id for the video.

Direct Upload to Cloudinary: The frontend uses this signature to upload the video file directly to Cloudinary. This is highly efficient as the large video file never passes through the project's backend server. A progress bar tracks the upload status.

Metadata Persistence: Once the upload is complete, Cloudinary returns the video's metadata (e.g., secure_url, duration). The frontend sends this information to the backend's /video/save endpoint.

Database Update: The backend saves the video metadata in the solutionvideos collection, linking it to the problem and user.

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Node.js (v18.x or higher)

A running MongoDB instance (local or cloud)

A running Redis instance (local or cloud)

🖥️ Backend Setup
Clone the repository & navigate to the backend:

git clone [https://github.com/your-username/segfault-repo.git](https://github.com/your-username/segfault-repo.git)
cd segfault-repo/backend

Install dependencies:

npm install

Create a .env file and populate it with your credentials:

PORT=3000
DB_CONNECT_STRING=<YOUR_MONGODB_CONNECTION_STRING>
REDIS_PASS=<YOUR_REDIS_PASSWORD>
JWT_KEY=<YOUR_SUPER_SECRET_JWT_KEY>
JUDGE0_KEY=<YOUR_RAPIDAPI_JUDGE0_KEY>
GEMINI_KEY=<YOUR_GOOGLE_GEMINI_API_KEY>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>

Start the server:

npm start

🎨 Frontend Setup
Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the client:

npm run dev

⚡ API Endpoints
<details>
<summary>Click to view API Endpoints</summary>

Method

Endpoint

Description

Protected

Role

POST

/user/register

Register a new user.

No

-

POST

/user/login

Log in a user.

No

-

POST

/user/logout

Log out the current user.

Yes

User

GET

/user/check

Check authentication status.

Yes

User

POST

/problem/create

Create a new coding problem.

Yes

Admin

PUT

/problem/update/:id

Update an existing problem.

Yes

Admin

DELETE

/problem/delete/:id

Delete a problem.

Yes

Admin

GET

/problem/problemById/:id

Get a single problem by its ID.

Yes

User

GET

/problem/getAllProblem

Get a list of all problems.

Yes

User

GET

/problem/problemSolvedByUser

Get problems solved by the current user.

Yes

User

GET

/problem/submittedProblem/:pid

Get submission history for a problem.

Yes

User

POST

/submission/submit/:id

Submit a code solution for judging.

Yes

User

POST

/submission/run/:id

Run code against visible test cases.

Yes

User

POST

/ai/chat

Interact with the AI tutor.

Yes

User

GET

/video/create/:problemId

Get a signature to upload a video.

Yes

Admin

POST

/video/save

Save uploaded video metadata.

Yes

Admin

DELETE

/video/delete/:problemId

Delete a problem's video solution.

Yes

Admin

</details>

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.
