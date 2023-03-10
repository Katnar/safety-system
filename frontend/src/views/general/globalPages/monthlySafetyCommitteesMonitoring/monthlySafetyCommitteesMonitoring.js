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

import MonthlySafetyCommitteesMonitoringTable from "components/safetySystem/globalTable/monthlySafetyCommitteesMonitoring/SortingTable";
import { isAuthenticated } from "auth";

function MonthlySafetyCommitteesMonitoring({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת מעקב וועדות בטיחות חודשיות
            </h3>
            <MonthlySafetyCommitteesMonitoringTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalMonthlySafetyCommitteesMonitoringForm/0`}>
              <Button>הוסף ועדת בטיחות </Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(MonthlySafetyCommitteesMonitoring);
