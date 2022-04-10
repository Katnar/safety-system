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

import MachinesAndEquipmentPeriodicInspectionsTable from "components/safetySystem/globalTable/machinesAndEquipmentPeriodicInspections/SortingTable";
import { isAuthenticated } from "auth";

function MachinesAndEquipmentPeriodicInspections() {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת בדיקות תקופתיות למכונות וציוד
            </h3>
            <MachinesAndEquipmentPeriodicInspectionsTable userData={user} />
            <Link to={`/machinesAndEquipmentPeriodicInspectionsGdodForm/0`}>
              <Button>הוסף בדיקה</Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(MachinesAndEquipmentPeriodicInspections);
