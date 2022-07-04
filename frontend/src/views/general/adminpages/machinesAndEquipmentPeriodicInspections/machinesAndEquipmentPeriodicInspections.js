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

import MachinesAndEquipmentPeriodicInspectionsTable from "components/safetySystem/adminPages/machinesAndEquipmentPeriodicInspections/SortingTable";
import { isAuthenticated } from "auth";

function MachinesAndEquipmentPeriodicInspections() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
          טבלת בדיקות תקופתיות למכונות וציוד 
          </h3>
          <MachinesAndEquipmentPeriodicInspectionsTable />
          <Link to={`/GlobalMachinesAndEquipmentPeriodicInspectionsForm/0`}>
            <Button>הוסף בדיקה</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(MachinesAndEquipmentPeriodicInspections);
