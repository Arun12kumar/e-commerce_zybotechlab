# E-Commerce Zybotechlab

A modern, high-performance e-commerce platform built with Next.js 16, featuring premium animations and a state-of-the-art design system.

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

### 1. Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm, yarn, or pnpm

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Arun12kumar/e-commerce_zybotechlab.git
cd e-commerce_zybotechlab
npm install
```

### 3. Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🛠 Tech Decisions

This project is built using a modern, scalable tech stack selected for performance, developer experience, and visual excellence.

### Core Framework

- **[Next.js 16](https://nextjs.org/)**: Utilizing the App Router for efficient routing and server-side rendering (SSR) capabilities.
- **[React 19](https://react.dev/)**: Leveraging the latest React features for building interactive UIs.

### Styling & Design

- **[Tailwind CSS 4](https://tailwindcss.com/)**: Using the latest version of Tailwind for rapid, utility-first styling with enhanced performance and features.
- **[Lucide React](https://lucide.dev/)**: A beautiful and consistent icon set.

### Animations

- **[GSAP (GreenSock Animation Platform)](https://gsap.com/)**: Chosen for complex, high-performance timeline-based animations that create a premium user experience.
- **[@gsap/react](https://gsap.com/resources/React/)**: Official GSAP hook for React to handle safe animation cleanup.

### State Management & Data Fetching

- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable bearbones state-management solution for global application state.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Powerful asynchronous state management for fetching, caching, and updating server state.

### Utilities

- **[Axios](https://axios-http.com/)**: For making HTTP requests to the centralized API base.
- **[React Hook Form](https://react-hook-form.com/)**: For high-performance, flexible, and extensible forms with easy validation.
- **[Zod](https://zod.dev/)**: For TypeScript-first schema declaration and validation.

---

## 📂 Project Structure

```text
src/
├── app/          # Next.js App Router (pages and routes)
├── components/   # Reusable UI components
├── controller/   # Logic for handling API interactions
├── libs/         # Core libraries, axios instances, and auth helpers
├── store/        # Zustand state stores
├── constant/     # Global constants and configuration
└── layout/       # Shared page layouts
```

---

## 🔑 Environment Configuration

Currently, the project uses a centralized API base URL located in `src/libs/axios.js`.

> [!NOTE]
> If you need to point to a different environment, modify the `API_BASE_URL` constant in [axios.js](file:///c:/Users/Arunkumar/Documents/GitHub/e-commerce_zybotechlab/src/libs/axios.js).
