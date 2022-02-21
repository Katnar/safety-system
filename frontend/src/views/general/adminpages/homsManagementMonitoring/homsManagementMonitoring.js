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

import HomsManagementMonitoringTable from "components/safetySystem/adminPages/homsManagementMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function HomsManagementMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת מעקב ניהול חומ"ס
          </h3>
          <HomsManagementMonitoringTable />
          <Link to={`/homsManagementMonitoringForm/0`}>
            <Button>הוסף מעקב חומ"ס </Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(HomsManagementMonitoring);
