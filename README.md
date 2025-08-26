# 🔗 URL Shortener

A full-stack **URL Shortener application** with user authentication, dashboard, and API integration.  
Built using **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Features

- ✨ **Shorten long URLs** into clean, shareable links  
- 🔑 **User Authentication** (Register/Login with JWT)  
- 📊 **User Dashboard** to manage shortened URLs  
- 📌 **Track User-Specific URLs**  
- ⚡ **RESTful API** for programmatic access  
- 🎨 **Responsive Frontend** built with React  
- 🛡️ **Secure backend** with middleware & error handling  

---

## 🏗️ Project Structure

```plaintext
URL_SHORTNER/
│── BACKEND/                  # Express + MongoDB backend
│   ├── src/
│   │   ├── config/           # App & DB configuration
│   │   ├── controller/       # Controllers (auth, user, url)
│   │   ├── dao/              # Data Access Layer
│   │   ├── middleware/       # Authentication middleware
│   │   ├── models/           # Mongoose models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Helpers & error handling
│   │   ├── app.js            # Express app entry
│   ├── package.json
│   └── .env                  # Environment variables

│── FRONTEND/                 # React frontend
│   ├── src/
│   │   ├── api/              # API request handlers
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Pages (Auth, Dashboard, Home)
│   │   ├── routing/          # Route configs
│   │   ├── store/            # Redux store
│   │   ├── utils/            # Axios instance & helpers
│   │   ├── main.jsx          # React entry point
│   │   ├── RootLayout.jsx    # Layout component
│   ├── index.html
│   ├── package.json
│   └── .gitignore
```

---

## ⚙️ Tech Stack

### Frontend
- ⚛️ React.js  
- 🛠 Redux (state management)  
- 🔗 Axios (API calls)  

### Backend
- 🟢 Node.js + Express.js  
- 🍃 MongoDB + Mongoose  
- 🔐 JWT Authentication  
- 🛡 Middleware & Error Handling  

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/prateekbisht23/url_shortner.git
cd url_shortner
```

### 2. Backend Setup
```bash
cd BACKEND
npm install
```

Create a .env file inside BACKEND/ with:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../FRONTEND
npm install
npm run dev
```

---

## 📌 API Endpoints

### Authentication
	•	POST /api/auth/register → Register a new user
	•	POST /api/auth/login → Login user

### URL Shortening
	•	POST /api/shorten → Create short URL
	•	GET /api/:shortId → Redirect to original URL
	•	GET /api/user/urls → Get logged-in user’s URLs

---

## 📸 Screenshots (Optional)

<img width="1470" height="800" alt="Screenshot 2025-08-26 at 6 40 23 PM" src="https://github.com/user-attachments/assets/3e22978c-bd23-4bc0-b7f5-d00a8215a28d" />

<img width="1470" height="798" alt="Screenshot 2025-08-26 at 6 40 58 PM" src="https://github.com/user-attachments/assets/24b964cd-d09a-44e0-b841-22f67d862e41" />



---

### 🤝 Contribution
	1.	Fork the repo
	2.	Create a new branch (feature/my-feature)
	3.	Commit changes (git commit -m "Added new feature")
	4.	Push & open a Pull Request

---

### 📜 License

This project is licensed under the MIT License.
