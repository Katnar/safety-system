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

import OccupationalSupervisionTable from "components/safetySystem/globalTable/occupationalSupervision/SortingTable";
import { isAuthenticated } from "auth";

function occupationalSupervision({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת פיקוח תעסוקתי
          </h3>
          <OccupationalSupervisionTable unittype={match.params.unittype} unitid={match.params.unitid}/>
          <Link to={`/GlobalOccupationalSupervisionForm/0`}>
            <Button>הוסף פיקוח תעסוקתי</Button>
          </Link>
        </CardBody>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default withRouter(occupationalSupervision);
