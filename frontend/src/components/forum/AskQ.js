import React, { useEffect, useState, useMemo, useRef } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import { Link, withRouter, Redirect } from "react-router-dom";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
// import { FormGroup } from "reactstrap";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Alert,
    Spinner,
    Label,
    Col,
  } from "reactstrap";


// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

// const [data, SetData] = useState();

const AskQ = (props) => {
  return (
    
    <Card>
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h3"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
         פורום טנ"ה 9
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl"}}>
        {/* <Container> */}
          <Row>
            <Col xs={12}>
              <div style={{ textAlign: "right", paddingTop: "10px", fontWeight: "bold", fontSize: "20px" }}>
                שאל שאלה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="textarea"
                  name="question"
                //   style={{height: "20rem"}}
                //   value={data.question}
                  
                ></Input>
              </FormGroup>
            </Col>
            </Row>
            <br/>
            <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
            <Button
                type="primary"
                className="btn btn-info"
                style={{ width: "100%", height: "3rem", width: "10rem"}}
                // onClick={() => clickSubmit()}
              >
                פרסם שאלה
              </Button>
              </Col>
              
          </Row>
        {/* </Container> */}
      </CardBody>
    </Card>
    
  );
};

export default withRouter(AskQ);
