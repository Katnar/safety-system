import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import LoggedinRoute from "auth/LoggedinRoute";
import UnloggedinRoute from "auth/UnloggedinRoute";
import AdminRoute from "auth/AdminRoute.js";
import GdodRoute from "auth/GdodRoute";
import CandidateRoute from "auth/CandidateRoute";
import UnitRoute from "auth/UnitRoute";

import SignIn from "views/general/authentication/SignInForm";
import SignUp from "views/general/authentication/SignUpForm";
import ManageUsers from "views/general/authentication/manageusers/ManageUsers";
import EditUser from "views/general/authentication/EditUserForm";

import AdminDashboard from "views/general/adminpages/admindashboard/AdminDashboard";
// import MahzorimPage from "views/general/adminpages/mahzorimpage/MahzorimPage";
import UnitDashboard from "views/general/unitpages/unitdashboard/UnitDashboard";
import CandidateDashboard from "views/general/candidatepages/candidatedashboard/CandidateDashboard";
// import CandidatePreferenceForm from "views/general/candidatepages/candidatepreferenceform/CandidatePreferenceForm";
// import MahzorForm from "views/general/adminpages/mahzorform/MahzorForm";
// import Usermahzorimpage from "views/general/candidatepages/usermahzorimpage/Usermahzorimpage";
// import JobsByMahzor from "views/general/JobsByMahzor";
// import JobsByMahzorAndUnit from "views/general/JobsByMahzorAndUnit";
// import DisplayMahzor from "views/general/adminpages/displaymahzor/DisplayMahzor";
// import DisplayJob from "views/general/DisplayJob";
// import Unitmahzorimpage from "views/general/unitpages/unitmahzorimpage/Unitmahzorimpage";
// import UnitPreferenceForm from "views/general/unitpages/unitpreferenceform/UnitPreferenceForm";
import Home from "views/Home/adminDashboard";
import gdodHome from "views/Home/gdodDashboard";
// import GdodHome from "views/Home/Home";

import safetyOfficersQualificationTable from "components/safetySystem/adminPages/safetyOfficersQualification/SortingTable";
import unitIdTable from "components/safetySystem/adminPages/UnitId/SortingTable";
import certificationsManagementTable from "components/safetySystem/adminPages/certificationsManagement/SortingTable";
import occupationalSupervisionTable from "components/safetySystem/adminPages/occupationalSupervision/SortingTable";

import unitIdView from "views/general/adminpages/unitId/unitId";
import certificationsManagementsView from "views/general/adminpages/certificationsManagements/certificationsManagements";
import occupationalSupervisionView from "views/general/adminpages/occupationalSupervision/occupationalSupervision";
import safetyOfficersQualificationView from "views/general/adminpages/safetyOfficersQualification/safetyOfficersQualification";
import trainingProgramView from "views/general/adminpages/trainingProgram/trainingProgram";
import equipmentAndMaterialsPeriodicInspectionsView from "views/general/adminpages/equipmentAndMaterialsPeriodicInspections/equipmentAndMaterialsPeriodicInspections";
import environmentalMonitoringView from "views/general/adminpages/environmentalMonitoring/environmentalMonitoring";
import machinesAndEquipmentPeriodicInspectionsView from "views/general/adminpages/machinesAndEquipmentPeriodicInspections/machinesAndEquipmentPeriodicInspections";
import riskManagementMonitoringView from "views/general/adminpages/riskManagementMonitoring/riskManagementMonitoring";
import monthlySafetyCommitteesMonitoringView from "views/general/adminpages/monthlySafetyCommitteesMonitoring/monthlySafetyCommitteesMonitoring";
import hazardsMonitoringView from "views/general/adminpages/hazardsMonitoring/hazardsMonitoring";
import homsManagementMonitoringView from "views/general/adminpages/homsManagementMonitoring/homsManagementMonitoring";
import personalProtectiveEquipmentMonitoringView from "views/general/adminpages/personalProtectiveEquipmentMonitoring/personalProtectiveEquipmentMonitoring";
import groundingTestsViews from "views/general/adminpages/groundingTests/groundingTests";
import reviewsDocumentationView from "views/general/adminpages/reviewsDocumentation/reviewsDocumentation";

import UnitIdForm from "views/general/adminpages/unitIdForm/unitIdDataComponent";
import safetyOfficersQualificationForm from "views/general/adminpages/safetyOfficersQualificationForm/safetyOfficersQualificationDataComponent";
import certificationManagementForm from "views/general/adminpages/certificationskmanagementsForm/certificationManagementDataComponent";
import occupationalSupervisionForm from "views/general/adminpages/occupationalSupervisionForm/occupationalSupervisionDataComponent";
import trainingProgramForm from "views/general/adminpages/trainingProgramForm/trainingProgramForm";
import equipmentAndMaterialsPeriodicInspectionsForm from "views/general/adminpages/equipmentAndMaterialsPeriodicInspectionsForm/equipmentAndMaterialsPeriodicInspectionsForm";
import environmentalMonitoringForm from "views/general/adminpages/environmentalMonitoringForm/environmentalMonitoringForm";
import machinesAndEquipmentPeriodicInspectionsForm from "views/general/adminpages/machinesAndEquipmentPeriodicInspectionsForm/machinesAndEquipmentPeriodicInspectionsForm";
import riskManagementMonitoringForm from "views/general/adminpages/riskManagementMonitoringForm/riskManagementMonitoringForm";
import monthlySafetyCommitteesMonitoringForm from "views/general/adminpages/monthlySafetyCommitteesMonitoringForm/monthlySafetyCommitteesMonitoringForm";
import hazardsMonitoringForm from "views/general/adminpages/hazardsMonitoringForm/hazardsMonitoringForm";
import homsManagementMonitoringForm from "views/general/adminpages/homsManagementMonitoringForm/homsManagementMonitoringForm";
import personalProtectiveEquipmentMonitoringForm from "views/general/adminpages/personalProtectiveEquipmentMonitoringForm/personalProtectiveEquipmentMonitoringForm";
import groundingTestsForm from "views/general/adminpages/groundingTestsForm/groundingTestsForm";
import reviewsDocumentationForm from "views/general/adminpages/reviewsDocumentationForm/reviewsDocumentationForm";

import unitIdGdod from "views/general/gdodpages/unitId/unitId";
import safetyOfficersQualificationGdod from "views/general/gdodpages/safetyOfficersQualification/safetyOfficersQualification";
import certificationManagementGdod from "views/general/gdodpages/certificationsManagements/certificationsManagements";
import occupationalSupervisionGdod from "views/general/gdodpages/occupationalSupervision/occupationalSupervision";
import trainingProgramGdod from "views/general/gdodpages/trainingProgram/trainingProgram";
import equipmentAndMaterialsPeriodicInspectionsGdod from "views/general/gdodpages/equipmentAndMaterialsPeriodicInspections/equipmentAndMaterialsPeriodicInspections";
import environmentalMonitoringGdod from "views/general/gdodpages/environmentalMonitoring/environmentalMonitoring";
import machinesAndEquipmentPeriodicInspectionsGdod from "views/general/gdodpages/machinesAndEquipmentPeriodicInspections/machinesAndEquipmentPeriodicInspections";
import riskManagementMonitoringGdod from "views/general/gdodpages/riskManagementMonitoring/riskManagementMonitoring";
import monthlySafetyCommitteesMonitoringGdod from "views/general/gdodpages/monthlySafetyCommitteesMonitoring/monthlySafetyCommitteesMonitoring";
import hazardsMonitoringGdod from "views/general/gdodpages/hazardsMonitoring/hazardsMonitoring";
import homsManagementMonitoringGdod from "views/general/gdodpages/homsManagementMonitoring/homsManagementMonitoring";
import personalProtectiveEquipmentMonitoringGdod from "views/general/gdodpages/personalProtectiveEquipmentMonitoring/personalProtectiveEquipmentMonitoring";
import groundingTestsGdod from "views/general/gdodpages/groundingTests/groundingTests";
import reviewsDocumentationGdod from "views/general/gdodpages/reviewsDocumentation/reviewsDocumentation";

import UnitIdGdodForm from "views/general/gdodpages/unitIdForm/unitIdDataComponent";
import safetyOfficersQualificationGdodForm from "views/general/gdodpages/safetyOfficersQualificationForm/safetyOfficersQualificationDataComponent";
import certificationsManagementsGdodForm from "views/general/gdodpages/certificationManagementsForm/certificationManagementDataComponent";
import occupationalSupervisionGdodForm from "views/general/gdodpages/occupationalSupervisionForm/occupationalSupervisionDataComponent";
import trainingProgramGdodForm from "views/general/gdodpages/trainingProgramForm/trainingProgramForm";
import equipmentAndMaterialsPeriodicInspectionsGdodForm from "views/general/gdodpages/equipmentAndMaterialsPeriodicInspectionsForm/equipmentAndMaterialsPeriodicInspectionsForm";
import environmentalMonitoringGdodForm from "views/general/gdodpages/environmentalMonitoringForm/environmentalMonitoringForm";
import machinesAndEquipmentPeriodicInspectionsGdodForm from "views/general/gdodpages/machinesAndEquipmentPeriodicInspectionsForm/machinesAndEquipmentPeriodicInspectionsForm";
import riskManagementMonitoringGdodForm from "views/general/gdodpages/riskManagementMonitoringForm/riskManagementMonitoringForm";
import monthlySafetyCommitteesMonitoringGdodForm from "views/general/gdodpages/monthlySafetyCommitteesMonitoringForm/monthlySafetyCommitteesMonitoringForm";
import hazardsMonitoringGdodForm from "views/general/gdodpages/hazardsMonitoringForm/hazardsMonitoringForm";
import homsManagementMonitoringGdodForm from "views/general/gdodpages/homsManagementMonitoringForm/homsManagementMonitoringForm";
import personalProtectiveEquipmentMonitoringGdodForm from "views/general/gdodpages/personalProtectiveEquipmentMonitoringForm/personalProtectiveEquipmentMonitoringForm";
import groundingTestsGdodForm from "views/general/gdodpages/groundingTestsForm/groundingTestsForm";
import reviewsDocumentationGdodForm from "views/general/gdodpages/reviewsDocumentationForm/reviewsDocumentationForm";
import tableView from "views/general/modular/tables/tableView";
import FormView from "views/general/modular/forms/formView";

const routesgeneral = (
  <>
    {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}
    <UnloggedinRoute path="/signin" exact component={SignIn} />
    <UnloggedinRoute path="/signup" exact component={SignUp} />
    {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}

    {/*///////////////////////////////////////////LoggedIn Routes/////////////////////////////////////////////////*/}
    {/* <LoggedinRoute
      path="/jobsbymahzor/:mahzorid"
      exact
      component={JobsByMahzor}
    />
    <LoggedinRoute
      path="/jobsbymahzorandunit/:mahzorid/:unitid"
      exact
      component={JobsByMahzorAndUnit}
    />
    <LoggedinRoute path="/displayjob/:jobid" exact component={DisplayJob} /> */}
    {/*///////////////////////////////////////////LoggedIn Routes/////////////////////////////////////////////////*/}

    {/*///////////////////////////////////////////Form Routes/////////////////////////////////////////////////*/}
    {/* <LoggedinRoute path="/mahzorform/:mahzorid" exact component={MahzorForm} /> */}
    {/*///////////////////////////////////////////Form Routes/////////////////////////////////////////////////*/}

    {/*///////////////////////////////////////////Admin Routes/////////////////////////////////////////////////*/}
    <AdminRoute path="/manageusers" exact component={ManageUsers} />
    <AdminRoute path="/edituser/:userid" exact component={EditUser} />
    <AdminRoute path="/tableView/:collection?" exact component={tableView} />
    <AdminRoute path="/formView/:id?" exact component={FormView} />
    

    <AdminRoute path="/adminDashboard" exact component={Home} />
    <GdodRoute path="/gdodDashboard/:gdod" exact component={gdodHome} />
    {/* <AdminRoute path="/mahzorimpage" exact component={MahzorimPage} />
    <AdminRoute
      path="/displaymahzor/:mahzorid"
      exact
      component={DisplayMahzor}
    /> */}

    {/*///////////////////////////////////////////Admin Views/////////////////////////////////////////////////*/}

    <AdminRoute
      path="/safetyOfficersQualificationTable"
      exact
      component={safetyOfficersQualificationTable}
    />
    <AdminRoute
      path="/occupationalSupervisionTable"
      exact
      component={occupationalSupervisionTable}
    />
    <AdminRoute path="/unitIdTable" exact component={unitIdTable} />
    <AdminRoute
      path="/certificationsManagementTable"
      exact
      component={certificationsManagementTable}
    />
    <AdminRoute path="/unitId" exact component={unitIdView} />
    <AdminRoute
      path="/certificationsManagements"
      exact
      component={certificationsManagementsView}
    />
    <AdminRoute
      path="/occupationalSupervision"
      exact
      component={occupationalSupervisionView}
    />
    <AdminRoute
      path="/safetyOfficersQualification"
      exact
      component={safetyOfficersQualificationView}
    />
    <AdminRoute path="/trainingProgram" exact component={trainingProgramView} />
    <AdminRoute
      path="/equipmentAndMaterialsPeriodicInspections"
      exact
      component={equipmentAndMaterialsPeriodicInspectionsView}
    />
    <AdminRoute
      path="/environmentalMonitoring"
      exact
      component={environmentalMonitoringView}
    />
    <AdminRoute
      path="/machinesAndEquipmentPeriodicInspections"
      exact
      component={machinesAndEquipmentPeriodicInspectionsView}
    />
    <AdminRoute
      path="/riskManagementMonitoring"
      exact
      component={riskManagementMonitoringView}
    />
    <AdminRoute
      path="/monthlySafetyCommitteesMonitoring"
      exact
      component={monthlySafetyCommitteesMonitoringView}
    />
    <AdminRoute
      path="/hazardsMonitoring"
      exact
      component={hazardsMonitoringView}
    />
    <AdminRoute
      path="/homsManagementMonitoring"
      exact
      component={homsManagementMonitoringView}
    />
    <AdminRoute
      path="/personalProtectiveEquipmentMonitoring"
      exact
      component={personalProtectiveEquipmentMonitoringView}
    />
    <AdminRoute path="/groundingTests" exact component={groundingTestsViews} />
    <AdminRoute
      path="/reviewsDocumentation"
      exact
      component={reviewsDocumentationView}
    />

    {/*///////////////////////////////////////////Admin Forms/////////////////////////////////////////////////*/}

    <AdminRoute
      path="/certificationManagementForm/:id"
      exact
      component={certificationManagementForm}
    />
    <AdminRoute
      path="/safetyOfficersQualificationForm/:id"
      exact
      component={safetyOfficersQualificationForm}
    />
    <AdminRoute
      path="/occupationalSupervisionForm/:id"
      exact
      component={occupationalSupervisionForm}
    />
    <AdminRoute path="/UnitIdForm/:id" exact component={UnitIdForm} />
    <AdminRoute
      path="/trainingProgramForm/:id"
      exact
      component={trainingProgramForm}
    />
    <AdminRoute
      path="/equipmentAndMaterialsPeriodicInspectionsForm/:id"
      exact
      component={equipmentAndMaterialsPeriodicInspectionsForm}
    />
    <AdminRoute
      path="/environmentalMonitoringForm/:id"
      exact
      component={environmentalMonitoringForm}
    />
    <AdminRoute
      path="/machinesAndEquipmentPeriodicInspectionsForm/:id"
      exact
      component={machinesAndEquipmentPeriodicInspectionsForm}
    />
    <AdminRoute
      path="/riskManagementMonitoringForm/:id"
      exact
      component={riskManagementMonitoringForm}
    />
    <AdminRoute
      path="/monthlySafetyCommitteesMonitoringForm/:id"
      exact
      component={monthlySafetyCommitteesMonitoringForm}
    />
    <AdminRoute
      path="/hazardsMonitoringForm/:id"
      exact
      component={hazardsMonitoringForm}
    />
    <AdminRoute
      path="/homsManagementMonitoringForm/:id"
      exact
      component={homsManagementMonitoringForm}
    />
    <AdminRoute
      path="/personalProtectiveEquipmentMonitoringForm/:id"
      exact
      component={personalProtectiveEquipmentMonitoringForm}
    />
    <AdminRoute
      path="/groundingTestsForm/:id"
      exact
      component={groundingTestsForm}
    />
    <AdminRoute
      path="/reviewsDocumentationForm/:id"
      exact
      component={reviewsDocumentationForm}
    />

    {/*///////////////////////////////////////////Gdod Routes/////////////////////////////////////////////////*/}

    <GdodRoute path="/UnitIdGdod" exact component={unitIdGdod} />
    <GdodRoute
      path="/safetyOfficersQualificationGdod"
      exact
      component={safetyOfficersQualificationGdod}
    />
    <GdodRoute
      path="/certificationManagementGdod"
      exact
      component={certificationManagementGdod}
    />
    <GdodRoute
      path="/occupationalSupervisionGdod"
      exact
      component={occupationalSupervisionGdod}
    />
    <GdodRoute
      path="/trainingProgramGdod"
      exact
      component={trainingProgramGdod}
    />
    <GdodRoute
      path="/equipmentAndMaterialsPeriodicInspectionsGdod"
      exact
      component={equipmentAndMaterialsPeriodicInspectionsGdod}
    />
    <GdodRoute
      path="/environmentalMonitoringGdod"
      exact
      component={environmentalMonitoringGdod}
    />
    <GdodRoute
      path="/machinesAndEquipmentPeriodicInspectionsGdod"
      exact
      component={machinesAndEquipmentPeriodicInspectionsGdod}
    />
    <GdodRoute
      path="/riskManagementMonitoringGdod"
      exact
      component={riskManagementMonitoringGdod}
    />
    <GdodRoute
      path="/monthlySafetyCommitteesMonitoringGdod"
      exact
      component={monthlySafetyCommitteesMonitoringGdod}
    />
    <GdodRoute
      path="/hazardsMonitoringGdod"
      exact
      component={hazardsMonitoringGdod}
    />
    <GdodRoute
      path="/homsManagementMonitoringGdod"
      exact
      component={homsManagementMonitoringGdod}
    />
    <GdodRoute
      path="/personalProtectiveEquipmentMonitoringGdod"
      exact
      component={personalProtectiveEquipmentMonitoringGdod}
    />
    <GdodRoute
      path="/groundingTestsGdod"
      exact
      component={groundingTestsGdod}
    />
    <GdodRoute
      path="/reviewsDocumentationGdod"
      exact
      component={reviewsDocumentationGdod}
    />

    {/*///////////////////////////////////////////Gdod Forms/////////////////////////////////////////////////*/}

    <GdodRoute path="/UnitIdGdodForm/:id" exact component={UnitIdGdodForm} />
    <GdodRoute
      path="/safetyOfficersQualificationGdodForm/:id"
      exact
      component={safetyOfficersQualificationGdodForm}
    />
    <GdodRoute
      path="/certificationManagementGdodForm/:id"
      exact
      component={certificationsManagementsGdodForm}
    />
    <GdodRoute
      path="/occupationalSupervisionGdodForm/:id"
      exact
      component={occupationalSupervisionGdodForm}
    />
    <Route
      path="/trainingProgramGdodForm/:id"
      exact
      component={trainingProgramGdodForm}
    />
    <GdodRoute
      path="/equipmentAndMaterialsPeriodicInspectionsGdodForm/:id"
      exact
      component={equipmentAndMaterialsPeriodicInspectionsGdodForm}
    />
    <GdodRoute
      path="/environmentalMonitoringGdodForm/:id"
      exact
      component={environmentalMonitoringGdodForm}
    />
    <GdodRoute
      path="/machinesAndEquipmentPeriodicInspectionsGdodForm/:id"
      exact
      component={machinesAndEquipmentPeriodicInspectionsGdodForm}
    />
    <GdodRoute
      path="/riskManagementMonitoringGdodForm/:id"
      exact
      component={riskManagementMonitoringGdodForm}
    />
    <GdodRoute
      path="/monthlySafetyCommitteesMonitoringGdodForm/:id"
      exact
      component={monthlySafetyCommitteesMonitoringGdodForm}
    />
    <GdodRoute
      path="/hazardsMonitoringGdodForm/:id"
      exact
      component={hazardsMonitoringGdodForm}
    />
    <GdodRoute
      path="/homsManagementMonitoringGdodForm/:id"
      exact
      component={homsManagementMonitoringGdodForm}
    />
    <GdodRoute
      path="/personalProtectiveEquipmentMonitoringGdodForm/:id"
      exact
      component={personalProtectiveEquipmentMonitoringGdodForm}
    />
    <GdodRoute
      path="/groundingTestsGdodForm/:id"
      exact
      component={groundingTestsGdodForm}
    />
    <GdodRoute
      path="/reviewsDocumentationGdodForm/:id"
      exact
      component={reviewsDocumentationGdodForm}
    />

    {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}
    <UnitRoute path="/unitdashboard/:unitid" exact component={UnitDashboard} />
    {/* <UnitRoute
      path="/unitmahzorimpage/:unitid"
      exact
      component={Unitmahzorimpage}
    />
    <UnitRoute
      path="/unitpreferenceform/:mahzorid/:unitid/:jobid"
      exact
      component={UnitPreferenceForm}
    /> */}
    {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}

    {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}
    <CandidateRoute
      path="/candidatedashboard/:candidateid"
      exact
      component={CandidateDashboard}
    />
    {/* <CandidateRoute
      path="/usermahzorimpage/:userid"
      exact
      component={Usermahzorimpage}
    />
    <CandidateRoute
      path="/candidatepreferenceform/:mahzorid/:candidateid"
      exact
      component={CandidatePreferenceForm}
    /> */}
    {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}


    
    <AdminRoute path="/tableView/:collection?" exact component={tableView} />
    <AdminRoute path="/formView/:id?" exact component={FormView} />
  </>
);

export default routesgeneral;
