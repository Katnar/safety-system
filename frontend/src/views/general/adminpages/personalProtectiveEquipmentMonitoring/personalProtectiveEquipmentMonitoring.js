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

import PersonalProtectiveEquipmentMonitoringTable from "components/safetySystem/adminPages/personalProtectiveEquipmentMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function PersonalProtectiveEquipmentMonitoring() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת מעקב ציוד מגן אישי
          </h3>
          <PersonalProtectiveEquipmentMonitoringTable />
          <Link to={`/unitIdForm`}>
            <Button>הוסף ציוד מגן אישי </Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(PersonalProtectiveEquipmentMonitoring);
