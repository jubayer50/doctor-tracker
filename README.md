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
