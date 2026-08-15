# Doctor Tracker - Frontend

A modern, secure administrative web application for managing doctors and patients with real-time data visualization and analytics.

## 📖 Overview

Doctor Tracker is a secure administrative web application that allows authenticated users to manage doctors and their corresponding patients. Built with Next.js, the application focuses on performance optimization, clean UX, and data visualization with real-time analytics.

**Key Highlights:**

- 🔐 Secure authentication with Better Auth
- 📊 Interactive dashboard with analytics
- 👨‍⚕️ Complete doctor and patient management
- 📱 Fully responsive design
- ⚡ Optimized performance with server components

## ✨ Features

### 🔐 Authentication

- Secure login/logout functionality
- Protected routes with middleware
- Session management with Better Auth

### 👨‍⚕️ Doctor Management

- Create doctors with name, specialization, hospital, phone, email
- View all doctors with pagination
- Search and filter doctors
- View patients under each doctor
- Add/delete patients from doctor's list

### 🏥 Patient Management

- List all patients with pagination
- Edit patient information
- Delete patients
- Search and filter patients by date, condition

### 📊 Dashboard & Analytics

- Total doctors, total patients statistics
- Patients per doctor visualization
- Date-based statistics
- Interactive charts and graphs

## 🛠️ Tech Stack

### Frontend Technologies

| Technology      | Version | Purpose                  |
| --------------- | ------- | ------------------------ |
| Next.js         | 16.3.0  | React framework with SSR |
| React           | 19.2.8  | UI library               |
| HeroUI          | 3.2.4   | UI component library     |
| React Icons     | 5.7.0   | Icon library             |
| React CountUp   | 6.5.3   | Animated number counters |
| React Hook Form | 7.85.0  | Form validation          |
| Tailwind CSS    | 4.0.0   | Utility-first CSS        |

### Libraries & Tools

- **Better Auth** - Authentication solution
- **MongoDB Driver** - Database connectivity
- **ESLint** - Code quality

## 🚀 ENV variable example

- BETTER_AUTH_SECRET=.......................................
- BETTER_AUTH_URL=............................

- MONGODB_URI=............................

- GOOGLE_CLIENT_ID=.......................
- GOOGLE_CLIENT_SECRET=.....................

- NEXT_PUBLIC_IMAGEBB_API=.....................

- NEXT_PUBLIC_BASE_URL=..................

### Prerequisites

- Node.js 18+ and npm
- Backend server running (see backend README)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jubayer50/doctor-tracker.git
   cd doctor-tracker-frontend
   ```

## Why Chose Redux over Context API

### Context API is like passing a notebook around a classroom. If one student writes something, the notebook must go to every student one by one. Everyone gets the whole notebook again, even if they only need one page. This becomes slow and messy when the class is large.

### Redux is like a digital notice board on the wall. When someone posts an update, everyone sees it at once. Students only look at the part they care about. Nobody gets extra information they don't need. Everything stays neat, and we can always check who posted what and when.

### We chose Redux because our app has many features that need to share data smoothly. Context API would create confusion and slow things down. Redux keeps everything fast, clean, and easy to manage as we add new features. For small apps, Context API works fine. For bigger apps with lots of data, Redux is the smarter choice.

---

## Desktop view

<img width="1920" height="2342" alt="screencapture-localhost-3000-2026-08-15-11_06_55" src="https://github.com/user-attachments/assets/4f9f83df-3c68-4019-b25a-bf2f2c699347" />

---

<img width="1920" height="911" alt="screencapture-localhost-3000-all-doctors-6a7ea90e09640608c0a080ce-2026-08-15-11_07_15" src="https://github.com/user-attachments/assets/a4686d0c-4ea8-419a-a2a7-154d51ce5fb4" />

---

<img width="1920" height="1092" alt="screencapture-localhost-3000-dashboard-doctors-management-2026-08-15-11_06_23" src="https://github.com/user-attachments/assets/5b619531-165a-43df-a1e6-f02c9becf7e5" />

---

<img width="1920" height="2465" alt="screencapture-localhost-3000-all-doctors-2026-08-15-11_07_05" src="https://github.com/user-attachments/assets/2df776de-f89c-409c-9ce1-850eabeaf14b" />


---

## Mobile view

<img width="2800" height="2000" alt="doctor-tracker-mobile-view" src="https://github.com/user-attachments/assets/6dd1c036-22c3-4d26-b684-ec96c7c05b60" />



## Live Links:
---
### Frontend GitHub Repository: https://github.com/jubayer50/doctor-tracker
### Backend GitHub Repository: https://github.com/jubayer50/doctor-tracker-server
### Live Frontend: https://doctor-tracker-neon.vercel.app/





