import React, { useEffect, useState, useMemo, useRef } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import { Link } from "react-router-dom";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Mail from "assets/img/email.png"

import {
    Row,
    Col,
  } from "reactstrap";

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

const ContactUs = (props) => {
  return (
    <>
          <Card style={{ borderRadius: "15px", backgroundColor: "#E8ECF1", boxShadow: "0 0 1rem 0", height: "210px", margin:"0"}}>
            <CardHeader color="#BCB6FF" stats icon>
                <Row>
                    <Col>
                <h1 style={{paddingTop: "20px", paddingBottom: "10px"}}>
                  ניתן לפנות אלינו!
                </h1>
                <h2>
                  מנחה בטיחות חילי
                </h2>
                <h3>
                    גיא דגן: 
                </h3>
                <h2>
                    קמ"ד בטיחות
                </h2>
                <h3>
                    שובל לוגסי:
                </h3>         
                </Col>
                <Col>
               
                <img src={Mail} style={{height: "210px", float: "left", paddingLeft: "50px"}}></img>   
                 </Col>
                </Row>
            </CardHeader>
            {/* <Mail /> */}
          </Card>
    </>
  );
};

export default ContactUs;
