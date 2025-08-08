# DocTalk

## Description
A React-based web application designed to help users schedule and manage doctor appointments efficiently. The app features interactive UI, multi-page routing, data persistence with localStorage, animated counters, and data visualization with charts — all following a pixel-perfect Figma design.

**Live Demo:** [https://splendorous-bublanina-6eb877.netlify.app]

---

---

## Technologies Used
- ReactJS (v18+)
- React Router DOM
- Tailwind CSS
- React-Toastify (for toast notifications)
- Recharts (for data visualization)
- react-countup (for counting animations)
- localStorage (for data persistence)

---

## Core Features
- Responsive Navbar and Footer across all pages (except footer on error pages)
- Homepage with banner, doctor cards grid, and animated success stats
- Doctor Details page with profile info, availability, and booking functionality
- Bookings page listing all user appointments with cancel option
- Data persistence with localStorage to save bookings on page reload
- Animated counting stats using `react-countup`
- Appointment fees visualization with Recharts
- Toast notifications for booking success/error using React-Toastify
- Dynamic page titles based on routes using `useLocation()`
- Error page for invalid routes with navigation back to homepage
- Loading animations on route changes and data fetching

---

## Dependencies
- react
- react-dom
- react-router-dom
- react-toastify
- recharts
- react-countup
- tailwindcss (or your preferred CSS framework)

---

## Getting Started (Local Setup)

1. **Clone the repository**

```bash
git clone YOUR_REPO_LINK_HERE
cd your-project-folder
