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

import PersonalProtectiveEquipmentMonitoringTable from "components/safetySystem/globalTable/personalProtectiveEquipmentMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function PersonalProtectiveEquipmentMonitoring({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב ציוד מגן אישי
            </h3>
            <PersonalProtectiveEquipmentMonitoringTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalPersonalProtectiveEquipmentMonitoringForm/0`}>
              <Button>הוסף ציוד מגן אישי </Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(PersonalProtectiveEquipmentMonitoring);
