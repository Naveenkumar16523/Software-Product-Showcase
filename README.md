# B & Y Technology Corporate Website

A production-ready SaaS-level corporate website for B & Y Technology, featuring a Next.js (App Router) frontend and a Spring Boot (Java 17) backend with a custom CMS dashboard.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, TypeScript
- **Backend**: Spring Boot 3.2, Java 17, Spring Data JPA, JWT Authentication (HttpOnly Cookies)
- **Database**: H2 (In-memory for dev), PostgreSQL (for production)

## Running Locally

### Backend
The backend uses Maven and runs on port 8080 by default. It uses H2 in-memory DB in the `dev` profile.
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend
The frontend uses Node.js and runs on port 3000 by default.
```bash
cd frontend
npm install
npm run dev
```

## Deployment Assumptions & Architecture

### Backend Deployment
The backend is completely dockerized. A multi-stage Dockerfile is provided in the `backend/` directory which builds the jar via Maven and packages it into a lightweight JRE image.

**Assumptions**:
1. **Environment Variables**: The production environment MUST supply the following environment variables:
   - `SPRING_PROFILES_ACTIVE=prod` (switches from H2 to PostgreSQL)
   - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS` (database credentials)
   - `JWT_SECRET` (must be a strong, randomly generated string)
   - `ALLOWED_ORIGINS` (comma-separated list of allowed frontend URLs, e.g., `https://bnytechnologies.com`)
2. **Stateless**: The Spring Boot app stores session data in JWTs via HttpOnly cookies, meaning it is entirely stateless and can be horizontally scaled behind a load balancer.

### Frontend Deployment
The frontend is a Next.js application optimized for modern hosts like Vercel, Netlify, or standard Node.js environments.

**Assumptions**:
1. **Environment Variables**: 
   - `NEXT_PUBLIC_API_URL` (points to the public URL of the backend API).
   - `NEXT_PUBLIC_GA_ID` (optional, for Google Analytics).
2. **Proxying**: If deploying in a custom Node container rather than Vercel, ensure the host allows for proper Next.js caching directories and image optimization libraries.

## SEO and Performance
- The site is fully optimized with JSON-LD structured data.
- Assets are gzipped and images are loaded via `next/image` pointing to Unsplash for case studies.
- A Github Actions CI workflow (`.github/workflows/verify.yml`) automatically builds both the frontend and backend on every pull request.
