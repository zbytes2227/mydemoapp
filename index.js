// Require necessary packages and modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users.model");
const Notice = require("./models/Notices.model");
const Application = require("./models/Applications.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const auth = require("./functions/auth");
// const helmet = require("helmet");
const admin_auth = require("./functions/admin_auth");
const PORT = process.env.PORT || 3030;

// Use necessary middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
// app.use(helmet());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       ...helmet.contentSecurityPolicy.getDefaultDirectives(),
//       "img-src": ["'self'", "https://images.pexels.com","http://www.w3.org/2000/svg"],
//       "script-src": ["'self'", "https://cdn.jsdelivr.net/"]
//     }
//   })
// );


// Connect to MongoDB database
mongoose.connect(process.env.DB_KEY).then(() => {
  console.log("MongoDB connected successfully");
});

// Import and use necessary routers
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const { patch } = require("./routes/register");

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);

const adminAuthRouter = require("./routes_admin/adminAuthRoute");
const adminUpdateRouter = require("./routes_admin/adminUpdateRoute");
const applicationsRouter = require("./routes_admin/applicationsRoute");
const usersRouter = require("./routes_admin//usersRoute");

app.use("/api/admin/auth", adminAuthRouter);
app.use("/api/admin/notice", adminUpdateRouter);
app.use("/api/admin/applications", applicationsRouter);
app.use("/api/admin/contacts", usersRouter);


//  All Notices
app.get("/api/updates", async (req, res) => {
  let data = await Notice.find({});
  res.json(data);
});


// serve the frontend
const path = require("path");

app.use(express.static(path.join(__dirname, "./app-demo/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./app-demo/build/index.html"));
});


//  From CONTACT us PAge
app.post("/api/new/application", async (req, res) => {
  try {
    if (req.body.message.length > 2500) {
      return res.status(400).json({
        success: false,
        msg: "Message should not be more than 2500 words",
      });
    }

    const newApplication = new Application({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await newApplication.save();
    res.json({ success: true, msg: "Application Submitted !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

//  Temporary user dashboard ROUTES

// Handle requests to the dashboard rou
app.post("/api/dashboard", async (req, res) => {
  const isAuthenticated = await auth(req, res);
  res.json({ user_valid: isAuthenticated.verified });
});

// Handle requests to the user route
app.post("/api/user", async (req, res) => {
  const isAuthenticated = await auth(req, res);
  if (isAuthenticated.verified) {
    let user = await User.findOne({ _id: isAuthenticated.decoded._id });
    if (user) {
      res.json({ name: user.name });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log("Server status : Running👍🏻", PORT);
});
