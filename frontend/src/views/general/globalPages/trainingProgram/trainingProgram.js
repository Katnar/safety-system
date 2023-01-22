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

import TrainingProgramTable from "components/safetySystem/globalTable/trainingProgram/SortingTable";
import { isAuthenticated } from "auth";

function trainigProgram({match}) {
  const user  = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת תכנית הדרכות
          </h3>
          <TrainingProgramTable unittype={match.params.unittype} unitid={match.params.unitid}/>
          <Link to={`/GlobalTrainingProgramForm/0`}>
            <Button>הוסף תכנית הדרכה</Button>
          </Link>
        </CardBody>
      </Card> : null }

      {/* </Container> */}
    </>
  );
}

export default withRouter(trainigProgram);
