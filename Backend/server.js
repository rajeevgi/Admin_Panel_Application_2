const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
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

const swaggerDefinition = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Admin Panel Application",
      version: "1.0.0",
      description: "API Documentation Using Swagger-UI",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: 'Development Server'
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// const options = {
//   swaggerDefinition,
//   apis: ["routes/*.js"], // Path to route files
// };

const swaggerSpec = swaggerJSDoc(swaggerDefinition);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const userRoutes = require("./routes/UserRoutes");
app.use("/api/auth", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
   console.log("Swagger UI available at http://localhost:5000/api-docs");

});
