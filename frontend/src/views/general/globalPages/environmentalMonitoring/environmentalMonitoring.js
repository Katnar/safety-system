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

import EnvironmentalMonitoringTable from "components/safetySystem/globalTable/environmentalMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function EnvironmentalMonitoring({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת ניטורים סביבתיים
            </h3>
            <EnvironmentalMonitoringTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalEnvironmentalMonitoringForm/0`}>
              <Button>הוסף ניטור סביבתי</Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(EnvironmentalMonitoring);
