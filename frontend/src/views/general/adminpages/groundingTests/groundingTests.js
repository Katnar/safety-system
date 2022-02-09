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

import GroundingTestsTable from "components/safetySystem/adminPages/groundingTests/SortingTable";
import { isAuthenticated } from "auth";

function GroundingTests() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת בדיקת הארכות חשמל ומבנים
          </h3>
          <GroundingTestsTable />
          <Link to={`/unitIdForm`}>
            <Button>הוסף בדיקה</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(GroundingTests);
