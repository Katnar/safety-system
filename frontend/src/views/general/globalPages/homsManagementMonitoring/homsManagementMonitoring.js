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

import HomsManagementMonitoringTable from "components/safetySystem/globalTable/homsManagementMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function HomsManagementMonitoring() {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב ניהול חומ"ס
            </h3>
            <HomsManagementMonitoringTable userData={user} />
            <Link to={`/GlobalHomsManagementMonitoringForm/0`}>
              <Button>הוסף מעקב חומ"ס </Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(HomsManagementMonitoring);
