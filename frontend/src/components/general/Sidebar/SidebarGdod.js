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
import logo from "assets/img/whiteLogo.jpg";
import home from "assets/img/home3.png";
import table from "assets/img/table.png";
import followers from "assets/img/followers.png";
import shortlist from "assets/img/shortlist.png";
import people from "assets/img/people.png";
import editusers from "assets/img/editusers.png";
import links from "assets/img/links.png";
import setting from "assets/img/setting.png";
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

import { isAuthenticated } from "auth/index";

function SidebarGdod() {
  const clickSubmit = (event) => {
    event.preventDefault();
    signout().then((response) => {
      history.push(`/signin`);
    });
  };

  return (
    <>
      <div className="logo">
        <img
          src={logo}
          style={{ paddingLeft: "3vw", width: "100%", height: "100%" }}
        ></img>
      </div>
      <Nav style={{ textAlign: "right" }}>
        <li>
          <NavLink
            to="/dashboard"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={home} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  דף הבית
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/UnitIdGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  תעודת זהות יחידה
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/safetyOfficersQualificationGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  כשירות ממונים על הבטחיות
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificationManagementGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  ניהול הסמכות
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/occupationalSupervisionGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  פיקוח תעסוקתי
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trainingProgramGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  תכנית הדרכות
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/equipmentAndMaterialsPeriodicInspectionsGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  בדיקות תקופתיות לציוד וחומרים
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/environmentalMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  ניטורים סביבתיים
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/machinesAndEquipmentPeriodicInspectionsGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  בדיקות תקופתיות למכונות וציוד
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riskManagementMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  מעקב ניהול סיכונים
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/monthlySafetyCommitteesMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  מעקב וועדות בטיחות חודשיות
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hazardsMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  מעקב סקר מפגעים
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/homsManagementMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  מעקב ניהול חומ"ס
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personalProtectiveEquipmentMonitoringGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  מעקב ציוד מגן אישי
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/groundingTestsGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  בדיקת הארכות חשמל ומבנים
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviewsDocumentationGdod"
            style={{ margin: "0px" }}
            activeClassName="sidebar_active_link"
          >
            <Row style={{ direction: "rtl" }}>
              <Col
                xs={12}
                md={3}
                style={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <img src={table} style={{ height: "20px" }}></img>
              </Col>
              <Col xs={12} md={9} style={{ paddingRight: "0px" }}>
                <h4
                  style={{
                    margin: "0px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  תיעוד ביקורות
                </h4>
              </Col>
            </Row>
          </NavLink>
        </li>
      </Nav>
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          bottom: 0,
          width: "100%",
        }}
      >
        <Button
          onClick={clickSubmit}
          className="btn-danger"
          style={{ width: "80%" }}
        >
          התנתק
        </Button>
      </div>
    </>
  );
}

export default SidebarGdod;
