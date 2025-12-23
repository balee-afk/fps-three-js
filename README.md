# Laundryaya

**Laundryaya** is a modern, responsive landing page for a premium laundry service, designed to attract customers with its sleek aesthetics and user-friendly interface. It features a booking system and a newsletter subscription service.

## Features

- **Responsive Landing Page**: A beautiful, custom-designed interface using modern CSS variables and layouts.
- **Service Booking**: Users can schedule a laundry pickup by providing their details and preferred service type.
- **Newsletter Subscription**: Integrated email subscription form for users to stay updated.
- **Backend API**: Built with Node.js and Express to handle bookings and subscriptions.
- **Database**: SQLite database to store booking and subscriber data reliably.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Custom Vanilla CSS (no framework dependecies like Tailwind)
- **Backend**: Node.js, Express
- **Database**: better-sqlite3 (SQLite)
- **Language**: TypeScript (Full Stack)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

This project requires both the backend and frontend to be running.

**1. Start the Backend Server**

The backend runs on port 3000.

```bash
npx tsx server/index.ts
```

**2. Start the Frontend Development Server**

The frontend runs on Vite's default port (usually 5173).

```bash
npm run dev
```

Open your browser and navigate to the frontend URL (e.g., `http://localhost:5173`) to view the application.

## Project Structure

- `src/`: Frontend React source code.
- `server/`: Backend Express server and database logic.
- `laundry.db`: SQLite database file (created automatically if not present).
