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

import CertificationsManagementTable from "components/safetySystem/globalTable/certificationsManagement/SortingTable";
import { isAuthenticated } from "auth";

function certificationsManagements({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ?
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת ניהול הסמכות
          </h3>
          <CertificationsManagementTable unittype={match.params.unittype} unitid={match.params.unitid}/>
          <Link to={`/GlobalCertificationsManagementsForm/0`}>
            <Button>הוסף הסמכה </Button>
          </Link>
        </CardBody>
      </Card>
      : null}
      {/* </Container> */}
    </>
  );
}

export default withRouter(certificationsManagements);
