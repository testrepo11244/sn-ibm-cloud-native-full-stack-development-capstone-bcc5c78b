# xrwvm-fullstack_developer_capstone

## Project Name
**fullstack_developer_capstone**

### Overview
This repository contains the final capstone project for the IBM Skills Network **Full Stack Application Development** course. The application is a full‑stack car dealership platform built with:

- **Backend:** Django REST Framework
- **Frontend:** React (Create React App) served via Django static files
- **Database:** SQLite (for development) / PostgreSQL (for production)
- **CI/CD:** GitHub Actions workflow that runs linting, tests, and deploys to Render

The project demonstrates user authentication, dealer lookup, review posting, sentiment analysis, and a responsive UI styled with Bootstrap.

### Repository Structure
```
xrwvm-fullstack_developer_capstone/
│
├─ server/
│   ├─ backend/                # Django project
│   └─ frontend/
│       ├─ static/             # HTML pages (About, Contact, etc.)
│       └─ src/
│           └─ components/
│               └─ Register/
│                   └─ Register.jsx
│
├─ .github/
│   └─ workflows/
│       └─ ci.yml
├─ README.md
└─ requirements.txt
```

### Getting Started
1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/xrwvm-fullstack_developer_capstone.git
   cd xrwvm-fullstack_developer_capstone
   ```
2. Follow the setup instructions in the `README` of the `server/backend` and `server/frontend` directories.

---  
*All files in this repository are publicly accessible for evaluation.*