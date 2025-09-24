
🌟 Medium Project - A Blogging Platform

Welcome to the Medium Project repository — a full-stack web application where users can create, manage, and share articles. This project is a modern web development example of the power of **React, Vite, Express, and Prisma**. It provides a smooth, interactive blogging experience with user authentication and Markdown support.

Live Demo: Check out the live site of the Medium Project here: [https://medium-project-beta.vercel.app/]

💡 Why Medium Project?
Building this project helped in honing full-stack development skills and understanding the interplay between the frontend and backend. In the journey to build a medium-like blog platform, I explored:

- **Frontend:** Crafting interactive UIs with React and styled with Tailwind CSS.
- **Backend:** API development and secure user authentication using Express and JWT.
- **Database:** Structuring data storage in PostgreSQL with Prisma as the ORM.

By reflecting Medium’s core features, the app incorporates modern elements like stateless JWT authentication, real-time updates, and Markdown rendering.


🔍 Overview
The Medium Project is designed to replicate the blogging platform’s simplicity, where users can:

- **Read Articles:** View detailed articles posted by authors.
- **Create and Edit Articles:** Authenticated users can write their own articles and format them with Markdown.
- **Markdown Rendering:** The text body supports Markdown to enhance the layout.
- **User Authentication:** Registered users can securely log in and have personalized article feeds.

This app implements a full-stack solution with React on the frontend and Express + Prisma on the backend. Data is stored in PostgreSQL, and the backend APIs support CRUD operations for articles. The frontend delivers a responsive and dynamic UI for the user.

🚀 Features
- Secure Authentication using JWT
- Markdown Editor for article content
- User Profiles with personalized dashboards
- Full CRUD operations for articles
- Mobile Responsive UI

🛠️ Tech Stack
**Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios, Vercel
**Backend:** Express.js, Prisma, PostgreSQL, JWT
**Other Libraries:** Markdown-it, dotenv

🎥 Live Demo
Check out the live site: [https://medium-project-beta.vercel.app/]

🏗️ How It Works
**Frontend (React + Vite):** UI built with React, styled using Tailwind CSS. Routing handled by React Router for pages like articles, profile, login/signup. Axios communicates with backend APIs.
**Backend (Express + Prisma):** Express server handles routing and APIs for authentication and article CRUD. Prisma ORM interacts with PostgreSQL for storing articles and users. JWT is used for stateless authentication, issuing tokens upon login.

⚙️ How to Run It Locally
1. Clone the repository:
```bash
git clone https://github.com/Harshvardhanp4/Medium-Project.git
cd Medium-Project
```
2. Install backend dependencies:
```bash
cd backend
npm install
```
3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```
4. Set environment variables:
**Frontend .env:**
```
VITE_BACKEND_URL=http://localhost:3000
```
**Backend .env:**
```
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```
5. Start the backend server:
```bash
cd ../backend
npm run dev
```
6. Start the frontend development server:
```bash
cd ../frontend
npm run dev
```
Your app will now be running at http://localhost:5173 (Vite default port).

🤝 Contributing
We welcome contributions! Fork the repo, clone your fork, create a feature branch, commit your changes, push to your branch, and open a Pull Request.

🌐 Connect
GitHub: Harshvardhanp4
Twitter: [@harshspeaks04](https://x.com/harshspeaks04)

📝 License
This project is licensed under the MIT License.
