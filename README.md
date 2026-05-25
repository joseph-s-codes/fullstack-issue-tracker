# Full-Stack Issue Tracker

Full-stack issue tracking system inspired by Azure DevOps for managing tasks, bugs, and project workflows with role-based access control and real-time updates.

---

## Features  

### In Progress
- Frontend application structure with routing (login page and protected dashboard layout)
- Authentication UI implemented (login form in place; backend validation not yet connected)
- Dashboard layout scaffolded with navbar, sidebar, and main content regions
- Backend API integration and authentication security layer still in development
  
### Planned 
- Create, update, read, and delete issues
- Assign tasks to users
- Track issue status (To Do, In Progress, Done)
- Role-based access control (Admin/User)
- Authentication with JWT
- Real-time Updates



---

## Tech Stack
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Java Spring Boot
- Database: PostgreSQL
- Authentication: JWT

---

## Getting Started

## Project Structure

frontend/ React + TypeScript + Tailwind CSS <br>
backend/ Java Spring Boot REST API backend

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```



## Purpose

This project was inspired by my experience working in QA automation during my internship, where I gained exposure to large-scale issue tracking and workflow systems. I wanted to deepen my understanding of full-stack development by building a simplified version of a similar system, focusing on backend API design, authentication, and role-based workflows.

