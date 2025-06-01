# User Management System

A full-stack web application for managing users with secure login, registration, and role-based access control. The system supports three types of users: **User**, **Admin**, and **Superadmin**.

## 🔧 Tech Stack

- **Frontend**: Angular 18, TypeScript, HTML, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: Session-based (or JWT, depending on implementation)

## 🌟 Features

- ✅ User registration and login
- ✅ Session-based or token-based authentication
- ✅ Role-based dashboard access (User, Admin, Superadmin)
- ✅ CRUD operations for user data (by Admin/Superadmin)
- ✅ Secure backend API with validation and error handling
- ✅ Responsive Angular UI with route guards and navigation control

## 🧩 Project Structure

```
project-root/
├── backend/        # Express.js API server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── db/
├── frontend/       # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── guards/
├── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

Make sure to create a `.env` file for DB connection:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=user_management
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Navigate to `http://localhost:4200/`

---

## 🔐 Roles & Permissions

| Role        | Access Capabilities                   |
|-------------|----------------------------------------|
| **User**        | View personal dashboard             |
| **Admin**       | Manage users (except Superadmin)    |
| **Superadmin**  | Full control over users and admins  |

---

## 📷 Screenshots

> *(Add screenshots here if you have them — login page, dashboard, user list, etc.)*

---

## 📚 Future Enhancements

- Email verification
- Password reset via email
- Profile image upload
- Audit logs

---

## 👨‍💻 Author

- [Rajeev Gupta](https://github.com/rajeevgi)
- Full-stack Developer | Angular | Node.js | MySQL

