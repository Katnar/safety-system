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

import UnitIdTable from "components/safetySystem/globalTable/UnitId/SortingTable";
import { isAuthenticated } from "auth";

function unitId({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ?  <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת תעודת זהות יחידה
          </h3>
          <UnitIdTable unittype={match.params.unittype} unitid={match.params.unitid}/>
          <Link to={`/GlobalUnitIdForm/0`}>
            <Button>הוסף יחידה</Button>
          </Link>
        </CardBody>
      </Card>
      : null}
     
      {/* </Container> */}
    </>
  );
}

export default withRouter(unitId);
