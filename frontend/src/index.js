import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'components/Table.css'
import "assets/css/black-dashboard-react.css";
import 'components/Table.css'
import 'components/ExcelButton.css'
import 'components/EmptyButton.css'
import 'components/NewButton.css'
import 'components/NewButtonBlue.css'
import 'components/NewButtonDelete.css'
import ThemeContextWrapper from "./components/general/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/general/BackgroundColorWrapper/BackgroundColorWrapper";

import history from './history'
//
import LoggedinRoute from "auth/LoggedinRoute";
import UnloggedinRoute from "auth/UnloggedinRoute";
import AdminRoute from "auth/AdminRoute.js";
import AboutPage from "views/general/aboutPage/AboutPage";
//
import AdminSignIn from "views/general/authentication/AdminSignInForm";
import SignIn from "views/general/authentication/SignInForm";
import SignUp from "views/general/authentication/SignUpForm";
import ManageUsers from "views/general/authentication/manageusers/ManageUsers";
import EditUser from "views/general/authentication/EditUserForm";
import SignUpOtherUsers from "views/general/authentication/SignUpOtherUsers";
//
import globalHome from "views/general/Home/globalDashboard";
import GlobalUnitIdView from "views/general/globalPages/unitId/unitId";
import GlobalSafetyOfficersQualificationView from "views/general/globalPages/safetyOfficersQualification/safetyOfficersQualification";
import GlobalCertificationsManagementsView from "views/general/globalPages/certificationsManagements/certificationsManagements";
import GlobalOccupationalSupervisionView from "views/general/globalPages/occupationalSupervision/occupationalSupervision";
import GlobalTrainingProgramView from "views/general/globalPages/trainingProgram/trainingProgram";
import GlobalEquipmentAndMaterialsPeriodicInspectionsView from "views/general/globalPages/equipmentAndMaterialsPeriodicInspections/equipmentAndMaterialsPeriodicInspections";
import GlobalEnvironmentalMonitoringView from "views/general/globalPages/environmentalMonitoring/environmentalMonitoring";
import GlobalMachinesAndEquipmentPeriodicInspectionsView from "views/general/globalPages/machinesAndEquipmentPeriodicInspections/machinesAndEquipmentPeriodicInspections";
import GlobalRiskManagementMonitoringView from "views/general/globalPages/riskManagementMonitoring/riskManagementMonitoring";
import GlobalMonthlySafetyCommitteesMonitoringView from "views/general/globalPages/monthlySafetyCommitteesMonitoring/monthlySafetyCommitteesMonitoring";
import GlobalHazardsMonitoringView from "views/general/globalPages/hazardsMonitoring/hazardsMonitoring";
import GlobalHomsManagementMonitoringView from "views/general/globalPages/homsManagementMonitoring/homsManagementMonitoring";
import GlobalPersonalProtectiveEquipmentMonitoringView from "views/general/globalPages/personalProtectiveEquipmentMonitoring/personalProtectiveEquipmentMonitoring";
import GlobalGroundingTestsView from "views/general/globalPages/groundingTests/groundingTests";
import GlobalReviewsDocumentationView from "views/general/globalPages/reviewsDocumentation/reviewsDocumentation";
//
import GlobalCertificationsManagementsForm from "views/general/globalForms/certificationskmanagementsForm/certificationManagementDataComponent";
import GlobalEnvironmentalMonitoringForm from "views/general/globalForms/environmentalMonitoringForm/environmentalMonitoringForm";
import GlobalEquipmentAndMaterialsForm from "views/general/globalForms/equipmentAndMaterialsPeriodicInspectionsForm/equipmentAndMaterialsPeriodicInspectionsForm";
import GlobalUnitIdForm from "views/general/globalForms/unitIdForm/unitIdDataComponent";
import GlobalGorundingTestsForm from "views/general/globalForms/groundingTestsForm/groundingTestsForm";
import GlobalHazardsMonitoringForm from "views/general/globalForms/hazardsMonitoringForm/hazardsMonitoringForm";
import GlobalHomsManagementMonitoringForm from "views/general/globalForms/homsManagementMonitoringForm/homsManagementMonitoringForm";
import GlobalMachinesAndEquipmentPeriodicInspectionsForm from "views/general/globalForms/machinesAndEquipmentPeriodicInspectionsForm/machinesAndEquipmentPeriodicInspectionsForm";
import GlobalMonthlySafetyCommitteesMonitoringForm from "views/general/globalForms/monthlySafetyCommitteesMonitoringForm/monthlySafetyCommitteesMonitoringForm";
import GlobalOccupationalSupervisionForm from "views/general/globalForms/occupationalSupervisionForm/occupationalSupervisionDataComponent";
import GlobalPersonalProtectiveEquipmentMonitoringForm from "views/general/globalForms/personalProtectiveEquipmentMonitoringForm/personalProtectiveEquipmentMonitoringForm";
import GlobalReviewsDocumentationForm from "views/general/globalForms/reviewsDocumentationForm/reviewsDocumentationForm";
import GlobalRiskManagementMonitoringForm from "views/general/globalForms/riskManagementMonitoringForm/riskManagementMonitoringForm";
import GlobalSafetyOfficersQualificationForm from "views/general/globalForms/safetyOfficersQualificationForm/safetyOfficersQualificationDataComponent";
import GlobalTrainingProgramForm from "views/general/globalForms/trainingProgramForm/trainingProgramForm";
//
import UnitTreePage from "views/general/unittreepage/UnitTreePage";

ReactDOM.render(
  <ThemeContextWrapper>
    <ToastContainer autoClose={2000} />
    <BackgroundColorWrapper>
      <Router history={history}>
        <Switch>
          {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}

          <UnloggedinRoute path="/adminsignin" exact component={AdminSignIn} />
          <UnloggedinRoute path="/signin" exact component={SignIn} />
          <UnloggedinRoute path="/signup" exact component={SignUp} />

          {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}

          {/*///////////////////////////////////////////LoggedIn Routes/////////////////////////////////////////////////*/}

          <LoggedinRoute path="/about" exact component={AboutPage} />
          <LoggedinRoute path="/signupotherusers" exact component={SignUpOtherUsers} />
          <LoggedinRoute path="/unittreepage" exact component={UnitTreePage} />

          {/*///////////////////////////////////////////LoggedIn Routes/////////////////////////////////////////////////*/}

          {/*///////////////////////////////////////////Admin Routes/////////////////////////////////////////////////*/}

          <AdminRoute path="/manageusers" exact component={ManageUsers} />
          <AdminRoute path="/edituser/:userid" exact component={EditUser} />

          {/*///////////////////////////////////////////Global Views/////////////////////////////////////////////////*/}

          <LoggedinRoute path="/globalDashboard/:unittype/:unitid" exact component={globalHome} />
          <LoggedinRoute path="/GlobalUnitIdView/:unittype/:unitid" exact component={GlobalUnitIdView} />
          <LoggedinRoute path="/GlobalSafetyOfficersQualificationView/:unittype/:unitid" exact component={GlobalSafetyOfficersQualificationView} />
          <LoggedinRoute path="/GlobalCertificationsManagementsView/:unittype/:unitid" exact component={GlobalCertificationsManagementsView} />
          <LoggedinRoute path="/GlobalOccupationalSupervisionView/:unittype/:unitid" exact component={GlobalOccupationalSupervisionView} />
          <LoggedinRoute path="/GlobalTrainingProgramView/:unittype/:unitid" exact component={GlobalTrainingProgramView} />
          <LoggedinRoute path="/GlobalEquipmentAndMaterialsPeriodicInspectionsView/:unittype/:unitid" exact component={GlobalEquipmentAndMaterialsPeriodicInspectionsView} />
          <LoggedinRoute path="/GlobalEnvironmentalMonitoringView/:unittype/:unitid" exact component={GlobalEnvironmentalMonitoringView} />
          <LoggedinRoute path="/GlobalMachinesAndEquipmentPeriodicInspectionsView/:unittype/:unitid" exact component={GlobalMachinesAndEquipmentPeriodicInspectionsView} />
          <LoggedinRoute path="/GlobalRiskManagementMonitoringView/:unittype/:unitid" exact component={GlobalRiskManagementMonitoringView} />
          <LoggedinRoute path="/GlobalMonthlySafetyCommitteesMonitoringView/:unittype/:unitid" exact component={GlobalMonthlySafetyCommitteesMonitoringView} />
          <LoggedinRoute path="/GlobalHazardsMonitoringView/:unittype/:unitid" exact component={GlobalHazardsMonitoringView} />
          <LoggedinRoute path="/GlobalHomsManagementMonitoringView/:unittype/:unitid" exact component={GlobalHomsManagementMonitoringView} />
          <LoggedinRoute path="/GlobalPersonalProtectiveEquipmentMonitoringView/:unittype/:unitid" exact component={GlobalPersonalProtectiveEquipmentMonitoringView} />
          <LoggedinRoute path="/GlobalGroundingTestsView/:unittype/:unitid" exact component={GlobalGroundingTestsView} />
          <LoggedinRoute path="/GlobalReviewsDocumentationView/:unittype/:unitid" exact component={GlobalReviewsDocumentationView} />

          {/*///////////////////////////////////////////Global Forms/////////////////////////////////////////////////*/}

          <LoggedinRoute path="/GlobalCertificationsManagementsForm/:id" exact component={GlobalCertificationsManagementsForm} />
          <LoggedinRoute path="/GlobalEnvironmentalMonitoringForm/:id" exact component={GlobalEnvironmentalMonitoringForm} />
          <LoggedinRoute path="/GlobalEquipmentAndMaterialsForm/:id" exact component={GlobalEquipmentAndMaterialsForm} />
          <LoggedinRoute path="/GlobalUnitIdForm/:id" exact component={GlobalUnitIdForm} />
          <LoggedinRoute path="/GlobalGroundingTestsForm/:id" exact component={GlobalGorundingTestsForm} />
          <LoggedinRoute path="/GlobalHazardsMonitoringForm/:id" exact component={GlobalHazardsMonitoringForm} />
          <LoggedinRoute path="/GlobalHomsManagementMonitoringForm/:id" exact component={GlobalHomsManagementMonitoringForm} />
          <LoggedinRoute path="/GlobalMachinesAndEquipmentPeriodicInspectionsForm/:id" exact component={GlobalMachinesAndEquipmentPeriodicInspectionsForm} />
          <LoggedinRoute path="/GlobalMonthlySafetyCommitteesMonitoringForm/:id" exact component={GlobalMonthlySafetyCommitteesMonitoringForm} />
          <LoggedinRoute path="/GlobalOccupationalSupervisionForm/:id" exact component={GlobalOccupationalSupervisionForm} />
          <LoggedinRoute path="/GlobalPersonalProtectiveEquipmentMonitoringForm/:id" exact component={GlobalPersonalProtectiveEquipmentMonitoringForm} />
          <LoggedinRoute path="/GlobalReviewsDocumentationForm/:id" exact component={GlobalReviewsDocumentationForm} />
          <LoggedinRoute path="/GlobalRiskManagementMonitoringForm/:id" exact component={GlobalRiskManagementMonitoringForm} />
          <LoggedinRoute path="/GlobalSafetyOfficersQualificationForm/:id" exact component={GlobalSafetyOfficersQualificationForm} />
          <LoggedinRoute path="/GlobalTrainingProgramForm/:id" exact component={GlobalTrainingProgramForm} />
          <Redirect from="/" to="/signin" />
        </Switch>
      </Router>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
