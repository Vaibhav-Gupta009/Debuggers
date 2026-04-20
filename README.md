# Projexa – Digital Attendance System

This project is a static frontend (`index.html` + `script.js` + `style.css`) connected to a Node/Express backend with a SQLite database.

## Run (local)

1) Install backend dependencies

```bash
cd backend
npm install
```

2) Start the backend (it also serves the frontend)

```bash
cd backend
node src/server.js
```

3) Open the app

- Visit `http://localhost:5000/index.html`

## Demo accounts

- **Admin**: `admin@krmu.edu.in` / `admin@123`
- **Faculty**: `faculty@krmu.edu.in` / `faculty@123`
- **Student**: `student@krmu.edu.in` / `student@123`
- Additional seeded students (for attendance marking): `vaibhav.gupta@krmu.edu.in`, `sameer.mishra@krmu.edu.in`, etc. all with password `student@123`.

## Notes

- The frontend uses the backend at `http://localhost:5000/api`.
- 2FA is **email OTP**:
  - In **development** (no SMTP configured), OTP is logged in the backend console and also shown as a toast after password login.
  - In **production**, configure SMTP in `backend/.env` and OTP will be sent by email.

