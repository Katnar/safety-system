import React, { useState, useEffect, useRef } from 'react';

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
import safetyLogoShort from "assets/img/logobhd20.png";

function TeneComp({ match, theme }) {

  return (
    <div style={{ height: '500px' }}>
      <Row>
        <Col xs={12} md={4}>

        </Col>
        <Col xs={12} md={4} style={{ textAlign: 'center' }}>
          <img src={safetyLogoShort} height='200px' style={{ marginBottom: '10px' }}></img>
          {/* <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>מערכת טנ"ה 9</h1> */}
        </Col>
        <Col xs={12} md={4}>

        </Col>
      </Row>

      <Container>
        <div style={{ textAlign: 'center' }}>
       <h3>מערכת טנ"ה 9 היא מערכת שמסייעת בניהול של נושא הבטיחות בעבודה בצה"ל. המערכת מאפשרת קבלת החלטות ביצועיות שוטפות, ובכך משפרת את הפעילות והיעילות בצה"ל.
       </h3>
        </div>
      </Container>
    </div>
  );
}

export default withRouter(TeneComp);