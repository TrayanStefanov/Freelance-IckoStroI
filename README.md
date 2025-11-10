# ItskovStroy – Construction & Renovation Platform

ItskovStroy is a custom web platform I built for a construction startup to help them showcase their renovation projects and services online.  
The goal was to give the company a modern, easy-to-manage website that reflects their craftsmanship and helps potential clients explore their work.  
The platform includes an admin panel for managing content and supports both English and Bulgarian languages, making it accessible to a wider audience.

---

## Overview

This project was developed as a full-stack web solution from scratch.  
It focuses on dynamic content management — the team can easily add or edit projects through an admin panel without touching the codebase.  
The UI was designed to be clean, fast, and responsive, ensuring a seamless experience across devices.

### What I Learned

This project helped me strengthen my understanding of full-stack development — especially in building secure admin interfaces and integrating cloud-based media management.  
It also gave me hands-on experience with multilingual site architecture and delivering a product tailored to a real client’s needs.

### Features

- Dynamic, API-driven portfolio and project gallery  
- Secure admin panel for managing site content  
- Responsive layout built with TailwindCSS and DaisyUI  
- Multi-language support (English and Bulgarian)  
- Cloud-based image storage and optimization using Cloudinary  

### Future Improvements

- Expand the admin panel to manage projects, client testimonials, and articles  
- Add analytics tracking and improve SEO visibility  
- Continue refining accessibility and overall performance  
---

## Tech Stack

**Frontend:** React.js, HTML5, TailwindCSS, DaisyUI, Axios  
**Backend:** Node.js, Express.js, RESTful API, bcrypt  
**Database & Storage:** MongoDB, Upstash, Cloudinary  

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/itskovstroy.git
cd itskovstroy
```
### 2. Install backend dependancies
```bash
cd backend
npm install
```
### 2. Install backend dependancies
```bash
cd ../frontend
npm install
```

### 4. Configure environment variables

Create a .env file in the backend folder:

```ini
PORT=5000
MONGO_URL=your_mongodb_connection_string
UPSTASH_REDIS_URL=your_upstash_redis_url
ACCESS_TOKEN_SECRET=your_jwt_access_secret
REFRESH_TOKEN_SECRET=your_jwt_refresh_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_CLOUD_KEY=your_cloudinary_key
CLOUDINARY_CLOUD_SECRET=your_cloudinary_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```
### 5. Run the application
```bash
cd backend
npm run dev
```
```bash
cd frontend
npm run dev
```
The frontend should now be running at http://localhost:5173
 and communicating with the backend API at http://localhost:5000.
---

## Live Website

**Website:** [https://itskovstroy.com/](https://itskovstroy.com/)  
