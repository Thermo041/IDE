# Full-Stack Multi-Code IDE

A full-stack online code editor that lets you create projects, write code in
multiple languages, and run it in the browser. Built with the MERN stack and the
[Piston](https://github.com/engineer-man/piston) execution API.

## Features

- Sign up / login with JWT authentication
- Create, rename, and delete projects (per-user, access-controlled)
- Monaco-based code editor with language-aware syntax highlighting
- Run code in Python, JavaScript, C, C++, Java, and Bash via the Piston API
- Save code with `Ctrl + S`
- Protected routes on both frontend and backend

## Tech Stack

- **Frontend:** React (Vite), React Router, Tailwind CSS, Monaco Editor, react-select, react-toastify
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Code execution:** Piston API (`https://emkc.org/api/v2/piston`)

## Project Structure

```
.
├── backend/      # Express API + Mongoose models
├── frontend/     # React + Vite client
└── render.yaml   # Render deployment blueprint
```

## Getting Started (Local)

### Prerequisites

- Node.js 18+
- A running MongoDB instance (local, or a MongoDB Atlas connection string)

### 1. Backend

```bash
cd backend
cp .env.example .env      # then edit values
npm install
npm start                 # runs on http://localhost:3000
```

Environment variables (`backend/.env`):

| Variable      | Description                              |
| ------------- | ---------------------------------------- |
| `MONGODB_URI` | MongoDB connection string                |
| `JWT_SECRET`  | Secret used to sign JWTs                  |
| `PORT`        | Port to listen on (defaults to `3000`)   |

### 2. Frontend

```bash
cd frontend
cp .env.example .env      # then edit values
npm install
npm run dev               # runs on http://localhost:5173
```

Environment variables (`frontend/.env`):

| Variable             | Description                          |
| -------------------- | ------------------------------------ |
| `VITE_API_BASE_URL`  | Base URL of the backend API          |

## Deployment (Render — single web service)

The whole app deploys as **one** Render Web Service: the build compiles the
React frontend and the Express backend serves it from the same URL, so the API
and UI share one origin (no separate frontend service, no CORS setup needed).

1. Create a free **MongoDB Atlas** cluster (allow network access from
   `0.0.0.0/0`) and copy its connection string.
2. In Render: **New → Web Service**, connect this repo.
3. Settings:
   - **Root Directory:** *(leave blank)*
   - **Runtime:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
4. Environment variables:
   - `MONGODB_URI` = your Atlas connection string
   - `JWT_SECRET` = any long random string
   - (`PORT` is provided by Render automatically)
5. Create the service. Once it's live, open the service URL — sign up and use it.

> The free Render web service spins down when idle, so the first request after a
> period of inactivity may take ~30–50s.

## License

MIT
