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

import Home from "components/Home/HomeGlobal"

import plus from "assets/img/add.png";

function UnitDashboard({ match }) {

  useEffect(() => {
    // init();
  }, [])

  return (
    <>
        <Home/>
    </>
  );
}

export default withRouter(UnitDashboard);