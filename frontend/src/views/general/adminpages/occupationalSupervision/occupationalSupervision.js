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

import OccupationalSupervisionTable from "components/safetySystem/adminPages/occupationalSupervision/SortingTable";

function occupationalSupervision() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת פיקוח תעסוקתי
          </h3>
          <OccupationalSupervisionTable />
          <Link to={`/occupationalSupervisionForm/0`}>
            <Button>הוסף פיקוח תעסוקתי</Button>
          </Link>
        </CardBody>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default withRouter(occupationalSupervision);
