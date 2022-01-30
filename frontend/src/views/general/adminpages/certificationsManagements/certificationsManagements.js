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

import CertificationsManagementTable from "components/safetySystem/certificationsManagement/SortingTable";

function certificationsManagements() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת ניהול הסמכות
          </h3>
          <CertificationsManagementTable />
          <Link to={`/certificationManagementForm`}>
            <Button>הוסף הסמכה </Button>
          </Link>
        </CardBody>
      </Card>
      {/* </Container> */}
    </>
  );
}

export default withRouter(certificationsManagements);
