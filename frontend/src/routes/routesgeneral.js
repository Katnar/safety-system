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
import CandidateRoute from "auth/CandidateRoute";
import UnitRoute from "auth/UnitRoute";

import SignIn from "views/general/authentication/SignInForm";
import SignUp from "views/general/authentication/SignUpForm";
import ManageUsers from "views/general/authentication/manageusers/ManageUsers";
import EditUser from "views/general/authentication/EditUserForm";

import AdminDashboard from "views/general/adminpages/admindashboard/AdminDashboard";
import MahzorimPage from "views/general/adminpages/mahzorimpage/MahzorimPage";
import UnitDashboard from "views/general/unitpages/unitdashboard/UnitDashboard";
import CandidateDashboard from "views/general/candidatepages/candidatedashboard/CandidateDashboard";
import CandidatePreferenceForm from "views/general/candidatepages/candidatepreferenceform/CandidatePreferenceForm";
import MahzorForm from "views/general/adminpages/mahzorform/MahzorForm";
import Usermahzorimpage from "views/general/candidatepages/usermahzorimpage/Usermahzorimpage";
import JobsByMahzor from "views/general/JobsByMahzor";
import JobsByMahzorAndUnit from "views/general/JobsByMahzorAndUnit";
import DisplayMahzor from "views/general/adminpages/displaymahzor/DisplayMahzor";
import DisplayJob from "views/general/DisplayJob";
import Unitmahzorimpage from "views/general/unitpages/unitmahzorimpage/Unitmahzorimpage";
import UnitPreferenceForm from "views/general/unitpages/unitpreferenceform/UnitPreferenceForm";

import safetyOfficersQualificationTable from "components/safetySystem/safetyOfficersQualification/SortingTable";
import unitIdTable from "components/safetySystem/UnitId/SortingTable";
import certificationsManagementTable from "components/safetySystem/certificationsManagement/SortingTable";
import occupationalSupervisionTable from "components/safetySystem/occupationalSupervision/SortingTable";
import unitIdView from "views/general/adminpages/unitId/unitId";
import certificationsManagementsView from "views/general/adminpages/certificationsManagements/certificationsManagements";
import occupationalSupervisionView from "views/general/adminpages/occupationalSupervision/occupationalSupervision";
import safetyOfficersQualificationView from "views/general/adminpages/safetyOfficersQualification/safetyOfficersQualification";

import certificationManagementForm from "views/general/adminpages/certificationskmanagementsForm/certificationManagementDataComponent";
import safetyOfficersQualificationForm from "views/general/adminpages/safetyOfficersQualificationForm/safetyOfficersQualificationDataComponent";
import occupationalSupervisionForm from "views/general/adminpages/occupationalSupervisionForm/occupationalSupervisionDataComponent";
import UnitIdForm from "views/general/adminpages/unitIdForm/unitIdDataComponent";

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

    <AdminRoute path="/dashboard" exact component={AdminDashboard} />
    {/* <AdminRoute path="/mahzorimpage" exact component={MahzorimPage} />
    <AdminRoute
      path="/displaymahzor/:mahzorid"
      exact
      component={DisplayMahzor}
    /> */}

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

    <AdminRoute
      path="/certificationManagementForm"
      exact
      component={certificationManagementForm}
    />
    <AdminRoute
      path="/safetyOfficersQualificationForm"
      exact
      component={safetyOfficersQualificationForm}
    />
    <AdminRoute
      path="/occupationalSupervisionForm"
      exact
      component={occupationalSupervisionForm}
    />
    <AdminRoute path="/UnitIdForm" exact component={UnitIdForm} />

    {/*///////////////////////////////////////////Admin Routes/////////////////////////////////////////////////*/}

    {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}
    <UnitRoute path="/unitdashboard/:unitid" exact component={UnitDashboard} />
    <UnitRoute
      path="/unitmahzorimpage/:unitid"
      exact
      component={Unitmahzorimpage}
    />
    <UnitRoute
      path="/unitpreferenceform/:mahzorid/:unitid/:jobid"
      exact
      component={UnitPreferenceForm}
    />
    {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}

    {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}
    <CandidateRoute
      path="/candidatedashboard/:candidateid"
      exact
      component={CandidateDashboard}
    />
    <CandidateRoute
      path="/usermahzorimpage/:userid"
      exact
      component={Usermahzorimpage}
    />
    <CandidateRoute
      path="/candidatepreferenceform/:mahzorid/:candidateid"
      exact
      component={CandidatePreferenceForm}
    />
    {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}
  </>
);

export default routesgeneral;
