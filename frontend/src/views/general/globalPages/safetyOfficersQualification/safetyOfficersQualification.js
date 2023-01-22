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


import SafetyOfficersQualificationTable from "components/safetySystem/globalTable/safetyOfficersQualification/SortingTable";
import { isAuthenticated } from "auth";

function safetyOfficersQualification({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת כשירות ממונים על הבטיחות
          </h3>
          <SafetyOfficersQualificationTable unittype={match.params.unittype} unitid={match.params.unitid}/>
          <Link to={`/GlobalSafetyOfficersQualificationForm/0`}>
            <Button>הוסף ממונה בטיחות</Button>
          </Link>
        </CardBody>
      </Card> 
      : null}
      {/* </Container> */}
    </>
  );
}

export default withRouter(safetyOfficersQualification);
