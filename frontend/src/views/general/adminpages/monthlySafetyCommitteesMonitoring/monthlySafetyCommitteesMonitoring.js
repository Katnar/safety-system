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

import MonthlySafetyCommitteesMonitoringTable from "components/safetySystem/adminPages/monthlySafetyCommitteesMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function MonthlySafetyCommitteesMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת מעקב וועדות בטיחות חודשיות
          </h3>
          <MonthlySafetyCommitteesMonitoringTable />
          <Link to={`/unitIdForm`}>
            <Button>הוסף ועדת בטיחות </Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(MonthlySafetyCommitteesMonitoring);
