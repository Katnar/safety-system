
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line, Bar } from "react-chartjs-2";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Row,
  Collapse,
  Button,
} from "reactstrap";

import { chartExample2 } from "variables/charts.js";
import history from '../../../history';

const AdminCardAdam = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const percentage = 20;
  const clickSubmit = (event) => {
    event.preventDefault()
    history.push(`/kshirottree`);

  }
  return (
    <Card style={{ textAlign: 'center', background: 'linear-gradient(0deg, rgb(245 204 84) 0%, rgb(225 140 78) 100%)', borderRadius: '40px', height: '100%', boxShadow: "0 5px 15px 0 rgb(0 0 0 / 10%), 0 5px 15px 0 rgb(0 0 0 / 15%)" }}>
      <CardBody style={{ textAlign: 'center', padding: '2px' }}>

        <CardTitle tag="h1" style={{ textAlign: "center", fontWeight: "bold", color: 'white' }}>
          {props.title}
        </CardTitle>

        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
            root: {},
            path: {
              stroke: `rgb(0 221 3)`,
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
              stroke: '#ffffff',
              strokeLinecap: 'round',
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            text: {
              fill: 'white',
              fontSize: '16px',
            },
            background: {
              fill: '#3e98c7',
            },
          }} />
        </div>

        <CardText style={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }}>קצונה: 83%</CardText>
        <CardText style={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }}>נגדים: 91%</CardText>
        <CardText style={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }}>אע"צים: 76%</CardText>

      </CardBody>
    </Card>
  );
};

export default AdminCardAdam;