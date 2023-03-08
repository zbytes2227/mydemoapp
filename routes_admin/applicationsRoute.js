const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const Application = require("../models/Applications.model");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 25 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 5 requests per windowMs
});

router.get("/", limiter, async (req, res) => {
  let applications = await Application.find({});
  res.json(applications);
});

module.exports = router;
