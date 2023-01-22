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

import GroundingTestsTable from "components/safetySystem/globalTable/groundingTests/SortingTable";
import { isAuthenticated } from "auth";

function GroundingTests({match}) {
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
            <GroundingTestsTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalGroundingTestsForm/0`}>
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
