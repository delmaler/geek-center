# Role & Context
You are an expert Fullstack Engineer specializing in React, Node.js, and modern UI/UX design. Your task is to generate a fully functional, highly polished, responsive landing page application for a board game café and gaming hub called **"Geek Center"**.

---

# Application Specifications

## 1. Tech Stack
* **Frontend:** React (Vite-backed), Tailwind CSS for styling, Lucide React for icons.
* **State Management:** React Context API (for Auth and Reservations simulation).
* **Routing:** React Router DOM (`react-router-dom`).

## 2. Core Pages & Features

### A. Navigation Bar (Global)
* Logo/Name: **Geek Center**
* Links: Home, About, Reserve a Table
* Auth Buttons: Dynamic "Login / Register" or "Logout / [Username]" based on auth state.

### B. Home Page (`/`)
* **Hero Section:** High-energy headline celebrating board games, tabletop RPGs, and community. Clear Call-to-Action (CTA) button: "Reserve a Table".
* **Features/Amenities Grid:** Highlight what makes Geek Center special (e.g., 500+ Game Library, Premium Snacks & Coffee, Hosted Tournaments, Private RPG Rooms).
* **Testimonials/Community Buzz:** A clean section showing reviews from local gamers.

### C. About Page (`/about`)
* **Our Story:** A welcoming narrative about creating the ultimate haven for geeks, gamers, and friends to connect face-to-face.
* **Café Offerings:** Brief mention of the food, craft beers, and specialty drinks available to fuel long gaming sessions.
* **Opening Hours & Location:** Clear, structured schedule and contact info.

### D. Authentication (`/login` & `/register`)
* Clean, centered card layouts using Tailwind.
* **Login Form:** Email and password fields with basic validation.
* **Register Form:** Name, email, password, and confirm password fields.
* *Note: Implement as controlled forms that update a global mock Auth Context.*

### E. Table Reservation System (`/reserve`)
* **Protected Route:** If the user is not logged in, redirect them to `/login` with a friendly notification.
* **Reservation Form:**
    * Date Picker
    * Time Slot Selection (e.g., Afternoon 12:00-16:00, Evening 16:00-20:00, Night 20:00-24:00)
    * Table Type Selection (Standard Table, Large Group/RPG Table, Premium Private Room)
    * Number of Guests
* **Success State:** Upon submission, show a clean modal or success screen confirming their booking details.

---

# Architectural Guidelines

* **Component Structure:** Separate the application into reusable components:
    * `Layout` (Navbar/Footer wrapper)
    * `Hero`, `Features` (Home components)
    * `AuthContext` (To handle mock login state across the app)
    * `ReservationForm`
* **Styling:** Use a modern, slightly futuristic or cozy "dark mode friendly" geek aesthetic (e.g., deep slates/purples paired with vibrant neon accents or warm wood tones). Ensure it is fully responsive on mobile and desktop.
* **Code Quality:** Provide clean, modular, and well-commented code. Do not use placeholder code or truncate files.

---

# Output Requirements

Generate the complete project structure and the following key files:
1. `package.json` (with required dependencies)
2. `src/context/AuthContext.jsx`
3. `src/components/Navbar.jsx`
4. `src/pages/Home.jsx`
5. `src/pages/About.jsx`
6. `src/pages/Login.jsx`
7. `src/pages/Register.jsx`
8. `src/pages/Reserve.jsx`
9. `src/App.jsx` (Routing and layout configuration)
