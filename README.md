# Admin Panel System

A full-stack web application for managing users with secure login, registration, and role-based access control. The system supports three types of users: **User**, **Admin**, and **Superadmin**.

## 🔧 Tech Stack

- **Frontend**: Angular 18, TypeScript, HTML, Bootstrap
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
git clone https://github.com/rajeevgi/Admin_Panel_Application_2.git
cd admin-panel
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
DB_NAME=admin_panel
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
> ![image](https://github.com/user-attachments/assets/88878f58-0027-40a0-ba4a-be934a7ae9c0) - Login Page
> ![image](https://github.com/user-attachments/assets/0b9185ed-8339-48bb-8e94-a2bf5fd63bc4) - Register Page

> ![image](https://github.com/user-attachments/assets/bad48a59-d27d-4f9d-b27a-78791043c82f) - SuperAdmin Dashboard (Tota-Users)
> ![image](https://github.com/user-attachments/assets/7a8c9a34-ad70-4350-a7f2-0b34b55b3140) - SuperAdmin Dashboard (Total-Admins)
> ![image](https://github.com/user-attachments/assets/9d5b58b3-e174-4083-958c-066e5c9214a7) - SuperAdmin Dashboard (User-profile)
> ![image](https://github.com/user-attachments/assets/0b2fa028-9039-45de-aaf3-aafde2bf0fcd) - SuperAdmin Dashboard (Admin-profile)
> ![image](https://github.com/user-attachments/assets/5bd5a1a6-7ce7-4008-afd8-0fa7b2aa07cf) - SuperAdmin Dashboard (User[Admin,User]-registration)
> ![image](https://github.com/user-attachments/assets/d8fa986e-b3e4-40a3-817c-10a1b04e07bf) - SuperAdmin Dashboard (Update User[Admin,User])
>![image](https://github.com/user-attachments/assets/94222860-48e4-432b-a789-9006fde6ca10) - Admin Dashboard
> ![image](https://github.com/user-attachments/assets/9b19a1f3-d819-487a-ad3b-a9c9f933ec1b) - User Dashbaord

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

