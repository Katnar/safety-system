import React, { useState } from "react";
// nodejs library that concatenates classes
// react plugin used to create charts

import { Link, withRouter, Redirect } from "react-router-dom";
import Page from 'react-page-loading';

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

import UnitIdTable from "components/safetySystem/adminPages/UnitId/SortingTable";
import { isAuthenticated } from "auth";

function unitId() {
  const user = isAuthenticated();
  return (
    <>
    
      {/* <Container> */}
      {user ? (
                <Page loader={"resize-spin"} color={"#A9A9A9"} size={4}>
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת תעודת זהות יחידה
            </h3>
            <UnitIdTable userData={user} />
            <Link to={`/GlobalUnitIdForm/0`}>
              <Button>הוסף יחידה</Button>
            </Link>
          </CardBody>
        </Card>
        </Page>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(unitId);
