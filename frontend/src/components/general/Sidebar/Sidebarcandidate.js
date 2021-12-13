import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

import { ThemeContext, themes } from "contexts/ThemeContext";

import tafkidipedialogo from "assets/img/tafkidipedialogo.png";
import home from "assets/img/home3.png";
import table from "assets/img/table.png";
import followers from "assets/img/followers.png";
import shortlist from "assets/img/shortlist.png";
import people from "assets/img/people.png";
import { signout } from "auth/index";
import history from "../../../history";

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

import { signin, authenticate, isAuthenticated } from "auth/index";

function Sidebarcandidate() {
  const [color, setcolor] = useState("transparent");
  const { user } = isAuthenticated();

  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);

  const toggleNavbar1 = () => setCollapsed1(!collapsed1);
  const toggleNavbar2 = () => setCollapsed2(!collapsed2);
  const toggleNavbar3 = () => setCollapsed3(!collapsed3);
  const toggleNavbar4 = () => setCollapsed4(!collapsed4);

  const clickSubmit = (event) => {
    event.preventDefault();
    signout().then((response) => {

      history.push(`/signin`);
    });
  };


  return (
    <>
      <ThemeContext.Consumer>
        {({ changeTheme, theme }) => (
          theme == "white-content" ?
            setcolor("black")
            : setcolor("white")
        )}
      </ThemeContext.Consumer>
      <div className="logo">
        <img src={tafkidipedialogo}></img>
      </div>
      <Nav style={{ textAlign: "right" }}>
        <li>
          <NavLink to={`/candidatedashboard/${user._id}`} style={{margin:'0px'}} activeClassName="sidebar_active_link">
            <Row style={{ direction: "rtl" }}>
              <Col xs={12} md={3} style={{ paddingLeft: "0px" }}>
                <img src={home} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4 style={{ color: color }}>
                  דף הבית
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
      </Nav>
      <div style={{ justifyContent: 'center', textAlign: 'center', bottom: 0, width: '100%' }}>
        <Button
          onClick={clickSubmit}
          className="btn-danger"
          style={{ width: '80%' }}
        >
          התנתק
        </Button>
      </div>
    </>
  );
}

export default Sidebarcandidate;
