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

## Deployment (Render)

This repo includes a `render.yaml` Blueprint that provisions both services.

1. Create a free **MongoDB Atlas** cluster and copy its connection string.
2. In Render: **New → Blueprint**, and select this repository.
3. Set the backend `MONGODB_URI` to your Atlas connection string
   (`JWT_SECRET` is generated automatically).
4. Once the backend is live, set the frontend `VITE_API_BASE_URL` to the
   backend's URL and trigger a redeploy of the frontend.

> Note: the free Render web service spins down when idle, so the first request
> after a period of inactivity may be slow.

## License

MIT
