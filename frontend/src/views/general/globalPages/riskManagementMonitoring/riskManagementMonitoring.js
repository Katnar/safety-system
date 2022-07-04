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

import RiskManagementMonitoringTable from "components/safetySystem/globalTable/riskManagementMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function RiskManagementMonitoring() {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב ניהול סיכונים
            </h3>
            <RiskManagementMonitoringTable userData={user} />
            <Link to={`/GlobalRiskManagementMonitoringForm/0`}>
              <Button>הוסף ניהול סיכונים</Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(RiskManagementMonitoring);
