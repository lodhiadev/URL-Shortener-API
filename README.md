# 🚀 URL Shortener API (Node.js + TypeScript + MongoDB)

A production-ready **URL Shortener Backend** built using **Node.js, TypeScript, Express, and MongoDB**.  
Supports authentication, secure URL shortening, redirection, and analytics tracking.

Perfect for backend learning, internships, resumes, and real-world deployment.

---

## 📌 Features

### 🔐 Authentication
- User Signup  
- User Login  
- Password encryption using bcrypt  
- JWT authentication  

### 🔗 URL Shortening
- Generate unique short codes  
- Store long + short URLs in MongoDB  
- Prevent duplicate codes  
- Authenticated URL creation  

### 📊 Analytics
Logs for each redirect:
- IP address  
- User Agent (browser/device)  
- Referrer  
- Timestamp  

### 🌍 URL Redirection
`GET /:shortCode`  
→ Redirects to the long/original URL.

---

## 🛠️ Tech Stack

- Node.js  
- TypeScript  
- Express.js  
- MongoDB & Mongoose  
- JWT Authentication  
- Rate Limiting  
- Helmet Security  
- Morgan Logger  

---

## 📁 Folder Structure

