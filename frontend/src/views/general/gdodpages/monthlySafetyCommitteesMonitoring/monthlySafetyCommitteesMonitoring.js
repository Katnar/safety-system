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

import MonthlySafetyCommitteesMonitoringTable from "components/safetySystem/gdodPages/monthlySafetyCommitteesMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function MonthlySafetyCommitteesMonitoring() {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב וועדות בטיחות חודשיות
            </h3>
            <MonthlySafetyCommitteesMonitoringTable userData={user} />
            <Link to={`/monthlySafetyCommitteesMonitoringForm/0`}>
              <Button>הוסף ועדת בטיחות </Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(MonthlySafetyCommitteesMonitoring);
