import React, { useState, useEffect, useRef } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

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
import axios from 'axios';

import UserCard from "components/general/DashboardCards/UserCard/UserCard";

import plus from "assets/img/add.png";

function UnitDashboard({ match }) {

  const [gdod, setGdod] = useState([])

  function init() {
    getGdod();
  }

  const getGdod = async () => {
    var tempgdodid = match.params.gdodid;
    try {
      await axios.post(`http://localhost:8000/api/gdod/gdodbyid`, [tempgdodid])
        .then(response => {
          setGdod(response.data[0])
        })
        .catch((error) => {
          console.log(error);
        })
    }
    catch {

    }
  }

  useEffect(() => {
    init();
  }, [])


  return (
    <>
      <Container>
        <UserCard />
      </Container>

      <Container style={{ paddingTop: '2rem' }}>
        <Card style={{ borderRadius: '40px' }}>
          <CardHeader>
            <CardTitle tag="h2" style={{ float: "right", fontWeight: 'bold' }}>
              קישורים חיצוניים
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <Card style={{ textAlign: 'center', background: 'linear-gradient(0deg, rgb(84 162 245) 0%, rgb(78 95 225) 100%)', borderRadius: '80px', height: '250px' }}>
                  <CardBody style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img src={plus} style={{ height: "80px" }}></img>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card style={{ textAlign: 'center', background: 'linear-gradient(0deg, rgb(84 162 245) 0%, rgb(78 95 225) 100%)', borderRadius: '80px', height: '250px' }}>
                  <CardBody style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img src={plus} style={{ height: "80px" }}></img>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card style={{ textAlign: 'center', background: 'linear-gradient(0deg, rgb(84 162 245) 0%, rgb(78 95 225) 100%)', borderRadius: '80px', height: '250px' }}>
                  <CardBody style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img src={plus} style={{ height: "80px" }}></img>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default withRouter(UnitDashboard);