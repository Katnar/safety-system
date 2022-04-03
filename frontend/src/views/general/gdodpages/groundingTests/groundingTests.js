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

import GroundingTestsTable from "components/safetySystem/gdodPages/groundingTests/SortingTable";
import { isAuthenticated } from "auth";

function GroundingTests() {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת בדיקת הארקות חשמל ומבנים
            </h3>
            <GroundingTestsTable userData={user} />
            <Link to={`/groundingTestsGdodForm/0`}>
              <Button>הוסף בדיקה</Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(GroundingTests);
