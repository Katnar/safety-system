import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col,
  Collapse,
} from "reactstrap";

import UserCard from "components/general/DashboardCards/UserCard/UserCard";
import certificationsManagementTable from "components/safetySystem/adminPages/certificationsManagement/SortingTable";

function AdminDashboard() {
  return (
    <>
      <Container>
        {/* <UserCard /> */}
        <certificationsManagementTable />
      </Container>

      <Container style={{ paddingTop: "2rem" }}></Container>
    </>
  );
}

export default withRouter(AdminDashboard);
