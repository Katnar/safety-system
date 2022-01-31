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

import UnitIdTable from "components/safetySystem/adminPages/UnitId/SortingTable";

function unitId() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת תעודת זהות יחידה
          </h3>
          <UnitIdTable />
          <Link to={`/unitIdForm`}>
            <Button>הוסף יחידה</Button>
          </Link>
        </CardBody>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default withRouter(unitId);
