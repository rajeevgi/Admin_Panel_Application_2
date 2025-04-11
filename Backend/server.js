const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      sameSite: "lax",
    },
  })
);

const userRoutes = require('./routes/UserRoutes');
app.use('/api/auth', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, 'localhost', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
