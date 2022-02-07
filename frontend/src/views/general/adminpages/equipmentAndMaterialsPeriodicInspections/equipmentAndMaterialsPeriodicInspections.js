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

import EquipmentAndMaterialsPeriodicInspectionsTable from "components/safetySystem/adminPages/equipmentAndMaterialsPeriodicInspections/SortingTable";
import { isAuthenticated } from "auth";

function trainigProgram() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת בדיקות תקופתיות לציוד וחומרים
          </h3>
          <EquipmentAndMaterialsPeriodicInspectionsTable />
          <Link to={`/unitIdForm`}>
            <Button>הוסף בדיקה</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(trainigProgram);
