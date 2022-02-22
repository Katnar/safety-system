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

import HazardsMonitoringTable from "components/safetySystem/adminPages/hazardsMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function HazardsMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת מעקב סקר מפגעים
          </h3>
          <HazardsMonitoringTable />
          <Link to={`/hazardsMonitoringForm/0`}>
            <Button>הוסף מעקב מפגע </Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(HazardsMonitoring);
