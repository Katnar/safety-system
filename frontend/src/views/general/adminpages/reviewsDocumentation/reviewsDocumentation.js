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

import ReviewsDocumentationTable from "components/safetySystem/adminPages/reviewsDocumentation/SortingTable";
import { isAuthenticated } from "auth";

function ReviewsDocumentation() {
  return (
    <>
      {/* <Container> */}
      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            טבלת תיעוד ביקורות
          </h3>
          <ReviewsDocumentationTable />
          <Link to={`/reviewsDocumentationForm/0`}>
            <Button>הוסף ביקורת</Button>
          </Link>
        </CardBody>
      </Card>

      {/* </Container> */}
    </>
  );
}

export default withRouter(ReviewsDocumentation);
