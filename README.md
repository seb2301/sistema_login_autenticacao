# sistema_login_autenticacao
Sistema de Login com autenticação JWT

backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── utils/
│   └── sendEmail.js
├── .env
├── server.js
└── package.json

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── RegisterForm.js
│   │   ├── ForgotPasswordForm.js
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ForgotPasswordPage.js
│   │   └── DashboardPage.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── animations.css
├── package.json

