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

import ReviewsDocumentationTable from "components/safetySystem/globalTable/reviewsDocumentation/SortingTable";
import { isAuthenticated } from "auth";

function ReviewsDocumentation({match}) {
  const user = isAuthenticated();
  return (
    <>
      {/* <Container> */}
      {user ? (
        <Card>
          <CardBody>
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              טבלת תיעוד ביקורות
            </h3>
            <ReviewsDocumentationTable unittype={match.params.unittype} unitid={match.params.unitid} />
            <Link to={`/GlobalReviewsDocumentationForm/0`}>
              <Button>הוסף ביקורת</Button>
            </Link>
          </CardBody>
        </Card>
      ) : null}

      {/* </Container> */}
    </>
  );
}

export default withRouter(ReviewsDocumentation);
