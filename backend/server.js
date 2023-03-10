const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const exphbs = require("express-handlebars");
// const nodemailer = require("nodemailer");
const path = require("path");
const fileRoutes = require('./routes/file-upload-routes');

require("dotenv").config();

//app config
const app = express();

//View engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

//Static folder
// app.use("/public", express.static(path.join(__dirname, "public")));

//middlware
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

// Configure Mongo
const db = "mongodb://127.0.0.1/SafetySystem";

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
// const signUpRouts = require('/routes/genral/unit');
const authRoutes = require("./routes/authentication/auth");
const userRoutes = require("./routes/authentication/user");

// app.use('/api', signUpRouts);
app.use("/api", authRoutes);
app.use("/api", userRoutes);

const mail = require("./routes/mail");
app.use("/api", mail);
//general routes
const gdodRoutes = require("./routes/general/gdod");
const hativaRoutes = require("./routes/general/hativa");
const ogdaRoutes = require("./routes/general/ogda");
const pikodRoutes = require("./routes/general/pikod");

app.use("/api", gdodRoutes);
app.use("/api", hativaRoutes);
app.use("/api", ogdaRoutes);
app.use("/api", pikodRoutes);

const safetyOfficersQualificationRoutes = require("./routes/general/safetyOfficersQualification");
const safetyOfficersQualificationDeleteRoutes = require("./routes/generalDelete/safetyOfficersQualification");
const unitIdRoutes = require("./routes/general/unitId");
const unitIdDeleteRoutes = require("./routes/generalDelete/unitId");
const certificationsManagementRoutes = require("./routes/general/certificationsManagement");
const certificationsManagementDeleteRoutes = require("./routes/generalDelete/certificationsManagement");
const occupationalSupervisionRoutes = require("./routes/general/occupationalSupervision");
const occupationalSupervisionDeleteRoutes = require("./routes/generalDelete/occupationalSupervision");
const trainingProgramRoutes = require("./routes/general/trainingProgram");
const trainingProgramDeleteRoutes = require("./routes/generalDelete/trainingProgram");
const equipmentAndMaterialsPeriodicInspectionsRoutes = require("./routes/general/equipmentAndMaterialsPeriodicInspections");
const equipmentAndMaterialsPeriodicInspectionsDeleteRoutes = require("./routes/generalDelete/equipmentAndMaterialsPeriodicInspections");
const environmentalMonitoringRoutes = require("./routes/general/environmentalMonitoring");
const environmentalMonitoringDeleteRoutes = require("./routes/general/environmentalMonitoring");
const machinesAndEquipmentPeriodicInspectionsRoutes = require("./routes/general/machinesAndEquipmentPeriodicInspections");
const riskManagementMonitoringRoutes = require("./routes/general/riskManagementMonitoring");
const riskManagementMonitoringDeleteRoutes = require("./routes/generalDelete/riskManagementMonitoring");
const monthlySafetyCommitteesMonitoringRoutes = require("./routes/general/monthlySafetyCommitteesMonitoring");
const monthlySafetyCommitteesMonitoringDeleteRoutes = require("./routes/generalDelete/monthlySafetyCommitteesMonitoring");
const hazardsMonitoringRoutes = require("./routes/general/hazardsMonitoring");
const hazardsMonitoringDeleteRoutes = require("./routes/generalDelete/hazardsMonitoring");
const homsManagementMonitoringRoutes = require("./routes/general/homsManagementMonitoring");
const homsManagementMonitoringDeleteRoutes = require("./routes/generalDelete/homsManagementMonitoring");
const personalProtectiveEquipmentMonitoringRoutes = require("./routes/general/personalProtectiveEquipmentMonitoring");
const personalProtectiveEquipmentMonitoringDeleteRoutes = require("./routes/generalDelete/personalProtectiveEquipmentMonitoring");
const groundingTestsRoutes = require("./routes/general/groundingTests");
const groundingTestsDeleteRoutes = require("./routes/generalDelete/groundingTests");
const reviewsDocumentationRoutes = require("./routes/general/reviewsDocumentation");
const reviewsDocumentationDeleteRoutes = require("./routes/generalDelete/reviewsDocumentation");
const questionRoutes = require("./routes/forum/question");
const answerRoutes = require("./routes/forum/answer");

app.use("/api", safetyOfficersQualificationRoutes);
app.use("/api", safetyOfficersQualificationDeleteRoutes);
app.use("/api", unitIdRoutes);
app.use("/api", unitIdDeleteRoutes);
app.use("/api", certificationsManagementRoutes);
app.use("/api", certificationsManagementDeleteRoutes);
app.use("/api", occupationalSupervisionRoutes);
app.use("/api", occupationalSupervisionDeleteRoutes);
app.use("/api", trainingProgramRoutes);
app.use("/api", trainingProgramDeleteRoutes);
app.use("/api", equipmentAndMaterialsPeriodicInspectionsRoutes);
app.use("/api", equipmentAndMaterialsPeriodicInspectionsDeleteRoutes);
app.use("/api", environmentalMonitoringRoutes);
app.use("/api", environmentalMonitoringDeleteRoutes);
app.use("/api", machinesAndEquipmentPeriodicInspectionsRoutes);
app.use("/api", machinesAndEquipmentPeriodicInspectionsRoutes);
app.use("/api", riskManagementMonitoringRoutes);
app.use("/api", riskManagementMonitoringDeleteRoutes);
app.use("/api", monthlySafetyCommitteesMonitoringRoutes);
app.use("/api", monthlySafetyCommitteesMonitoringDeleteRoutes);
app.use("/api", hazardsMonitoringRoutes);
app.use("/api", hazardsMonitoringDeleteRoutes);
app.use("/api", homsManagementMonitoringRoutes);
app.use("/api", homsManagementMonitoringDeleteRoutes);
app.use("/api", personalProtectiveEquipmentMonitoringRoutes);
app.use("/api", personalProtectiveEquipmentMonitoringDeleteRoutes);
app.use("/api", groundingTestsRoutes);
app.use("/api", groundingTestsDeleteRoutes);
app.use("/api", reviewsDocumentationRoutes);
app.use("/api", reviewsDocumentationDeleteRoutes);
app.use("/api", questionRoutes);
app.use("/api", answerRoutes);

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
