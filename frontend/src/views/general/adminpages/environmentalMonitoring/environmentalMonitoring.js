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

import EnvironmentalMonitoringTable from "components/safetySystem/adminPages/environmentalMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function EnvironmentalMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת ניטורים סביבתיים
          </h3>
          <EnvironmentalMonitoringTable />
          <Link to={`/environmentalMonitoringForm/0`}>
            <Button>הוסף ניטור סביבתי</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(EnvironmentalMonitoring);
