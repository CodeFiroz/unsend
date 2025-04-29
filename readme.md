# 📨 Unsend — Anonymous Message Sharing App

A lightweight, no-nonsense, fully anonymous platform to drop messages, confessions, rants, opinions, or just straight-up bakchodi — without revealing who you are. Inspired by the chaos of real life and the therapy of typing it all out.

**Live Site**: [https://unsend.vercel.app](https://unsend.vercel.app)

> ⚠️ _"Maa kasam kisi ki koi info save nahi hoti. Message chhodo, chill karo. But bhai/sis, personal info mat daalna."_ – Admin

---

## 💡 Features

- 🧑‍🎤 **Fully anonymous messaging**  
- 🕶️ Dark Mode toggle (theme switch)
- ✍️ Write & submit a message
- 🔗 Shareable link for every message
- 🔥 Hosted frontend + backend
- 🚫 No name, no trace, no problem

---

## 🛠️ Tech Stack

| Tech         | Use                                  |
|--------------|---------------------------------------|
| ReactJS      | Frontend UI                          |
| Vite         | Lightning-fast dev server            |
| ExpressJS    | Backend API                          |
| MongoDB      | Data storage                         |
| Axios        | HTTP requests                        |
| Zustand      | State management (theme store)       |
| Vercel       | Hosting frontend                     |
| Railway      | Hosting backend                      |

---

## 📁 Folder Structure (Frontend)

📦 src ├── 
        📁 Components 
        │ └── Header/ 
        ├── 📁 Pages 
        │ ├── Home.jsx 
        │ ├── Messages.jsx 
        │ └── Write.jsx 
        ├── 📁 store 
        │ └── useThemeStore.js 
        ├── App.jsx 
        └── main.jsx

---

## 🚀 Getting Started

### 1. Clone this Repo

```bash
git clone https://github.com/your-username/unsend.git
cd unsend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add .env in frontend

```bash
VITE_API_ENDPOINT= http://localhost:3000/api/msg/

```

### 4. Run frontend (Vite)

```bash
npm run dev

```

### 5. Backend Setup (Optional if you're not modifying API)

```bash
cd backend
npm install
npm run dev
```

## 🔐 Important Notes

- Messages are public but anonymous.
- No tracking or logging of IPs/names for public view.
- Be nice. Don’t post harmful or personal details
