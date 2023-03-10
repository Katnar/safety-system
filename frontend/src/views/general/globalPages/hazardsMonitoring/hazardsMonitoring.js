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

import HazardsMonitoringTable from "components/safetySystem/globalTable/hazardsMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function HazardsMonitoring({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב סקר מפגעים
            </h3>
            <HazardsMonitoringTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalHazardsMonitoringForm/0`}>
              <Button>הוסף מעקב מפגע </Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(HazardsMonitoring);
