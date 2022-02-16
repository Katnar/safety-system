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

import SafetyOfficersQualificationTable from "components/safetySystem/adminPages/safetyOfficersQualification/SortingTable";

function safetyOfficersQualification() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת כשירות ממונים על הבטיחות
          </h3>
          <SafetyOfficersQualificationTable />
          <Link to={`/safetyOfficersQualificationForm/0`}>
            <Button>הוסף ממונה בטיחות</Button>
          </Link>
        </CardBody>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default withRouter(safetyOfficersQualification);
