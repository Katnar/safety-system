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

import TrainingProgramTable from "components/safetySystem/adminPages/trainingProgram/SortingTable";
import { isAuthenticated } from "auth";

function trainigProgram() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת תכנית הדרכות
          </h3>
          <TrainingProgramTable />
          <Link to={`/trainingProgramForm/0`}>
            <Button>הוסף תכנית הדרכה</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(trainigProgram);
