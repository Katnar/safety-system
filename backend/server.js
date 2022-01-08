const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

//app config
const app = express();

//middlware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Configure Mongo
const db = "mongodb://localhost/SafetySystem";

// Connect to Mongo with Mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

//user routes
const authRoutes = require("./routes/authentication/auth");
const userRoutes = require("./routes/authentication/user");

app.use("/api", authRoutes);
app.use("/api", userRoutes);
//general routes
const affiliationRoutes = require("./routes/general/affiliation");
const candidateRoutes = require("./routes/general/candidate");
const candidatepreferenceRoutes = require("./routes/general/candidatepreference");
const eshkolRoutes = require("./routes/general/eshkol");
const finalcandidatepreferenceRoutes = require("./routes/general/finalcandidatepreference");
const finaleshkolRoutes = require("./routes/general/finaleshkol");
const finalunitpreferenceRoutes = require("./routes/general/finalunitpreference");
const jobRoutes = require("./routes/general/job");
const jobtypeRoutes = require("./routes/general/jobtype");
const mahzorRoutes = require("./routes/general/mahzor");
const unitRoutes = require("./routes/general/unit");
const unitpreferenceRoutes = require("./routes/general/unitpreference");

app.use("/api", affiliationRoutes);
app.use("/api", candidateRoutes);
app.use("/api", candidatepreferenceRoutes);
app.use("/api", eshkolRoutes);
app.use("/api", finalcandidatepreferenceRoutes);
app.use("/api", finaleshkolRoutes);
app.use("/api", finalunitpreferenceRoutes);
app.use("/api", jobRoutes);
app.use("/api", jobtypeRoutes);
app.use("/api", mahzorRoutes);
app.use("/api", unitRoutes);
app.use("/api", unitpreferenceRoutes);

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
