# WikiNITT

WikiNITT is a Wikipedia-style knowledge platform built for **NIT Trichy**, allowing users to explore information related to departments, hostels, student life, and campus activities through categorized articles.

The project is developed as part of an academic assignment with focus on **clean routing, dynamic article pages, and full-stack capability using Next.js**.

---

## Tech Stack

- **Next.js (App Router)** – Frontend + Backend framework  
- **Tailwind CSS** – Styling and UI layout  
- **MongoDB** – Database for storing articles  
- **Mongoose** – ODM for MongoDB  
- **Node.js** – Runtime environment  

---

## Features

- Homepage with project description and navigation bar
- Category pages:
  - Departments
  - Hostels
  - Student Life
  - Admin
- Dynamic article pages using Next.js routing
- Article content rendered based on URL parameters
- MongoDB integration for backend data handling
- Clean and modular project structure

---

## Project Structure

src/
├── app/
│ ├── page.js # Homepage
│ ├── layout.js # Root layout with Navbar
│ ├── articles/[slug]/ # Dynamic article pages
│ ├── departments/ # Departments page
│ ├── hostels/ # Hostels page
│ ├── student-life/ # Student life page
│ └── admin/ # Admin page
│
├── components/
│ └── Navbar.js # Navigation bar component
│
├── lib/
│ └── db.js # MongoDB connection logic
│
├── models/
│ └── Articles.js # Mongoose article schema
│
└── data/
└── articles.js # Sample/local article data


---

## Database Setup

The project uses **MongoDB** for storing article data.

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

## Running the Project Locally
npm install
npm run dev

## Author:

Developed by VISWESH ARUNAGIRI
For task submission and learning purposes.