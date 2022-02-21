import React, { useState } from "react";
// nodejs library that concatenates classes
// react plugin used to create charts

import { Link, withRouter, Redirect } from "react-router-dom";

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

import RiskManagementMonitoringTable from "components/safetySystem/adminPages/riskManagementMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function RiskManagementMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת מעקב ניהול סיכונים
          </h3>
          <RiskManagementMonitoringTable />
          <Link to={`/riskManagementMonitoringForm/0`}>
            <Button>הוסף ניהול סיכונים</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(RiskManagementMonitoring);
