import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

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
import UnitDashboard from "views/general/unitpages/UnitDashboard";
import CandidateDashboard from "views/general/candidatepages/CandidateDashboard";
import CandidatePreferenceForm from "views/general/candidatepages/CandidatePreferenceForm";
import MahzorForm from "views/general/adminpages/mahzorform/MahzorForm";
import Usermahzorimpage from "views/general/candidatepages/usermahzorimpage/Usermahzorimpage";
import JobsByMahzor from "views/general/JobsByMahzor";

const routesgeneral =
    (
        <>
            {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}
            <UnloggedinRoute path="/signin" exact component={SignIn} />
            <UnloggedinRoute path="/signup" exact component={SignUp} />
            {/*///////////////////////////////////////////UnLoggedIn Routes/////////////////////////////////////////////////*/}

            {/*///////////////////////////////////////////Form Routes/////////////////////////////////////////////////*/}
            <LoggedinRoute path="/mahzorform/:mahzorid" exact component={MahzorForm} />
            <LoggedinRoute path="/jobsbymahzor/:mahzorid" exact component={JobsByMahzor} />
            {/*///////////////////////////////////////////Form Routes/////////////////////////////////////////////////*/}

            {/*///////////////////////////////////////////Admin Routes/////////////////////////////////////////////////*/}
            <AdminRoute path="/manageusers" exact component={ManageUsers} />
            <AdminRoute path="/edituser/:userid" exact component={EditUser} />

            <AdminRoute path="/dashboard" exact component={AdminDashboard} />
            <AdminRoute path="/mahzorimpage" exact component={MahzorimPage} />
            {/*///////////////////////////////////////////Admin Routes/////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}
            <UnitRoute path="/unitdashboard/:unitid" exact component={UnitDashboard} />
            {/*////////////////////////////////////////Unit User//////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}
            <CandidateRoute path="/candidatedashboard/:candidateid" exact component={CandidateDashboard} />
            <CandidateRoute path="/usermahzorimpage/:userid" exact component={Usermahzorimpage} />
            <CandidateRoute path="/candidatepreferenceform/:mahzorid/:candidateid" exact component={CandidatePreferenceForm} />
            {/*////////////////////////////////////////Candidate User//////////////////////////////////////////////////*/}
        </>
    )

export default routesgeneral;