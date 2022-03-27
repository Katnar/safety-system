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

import Logoeged from "assets/img/logotene2.png";
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

import SidebarAdmin from "components/general/Sidebar/SidebarAdmin";
import SidebarGdod from "components/general/Sidebar/SidebarGdod";
import SidebarHativa from "components/general/Sidebar/SidebarHativa";
import SidebarOgda from "components/general/Sidebar/SidebarOgda";
import SidebarPikod from "components/general/Sidebar/SidebarPikod";
import SidebarCandidate from "../Sidebar/Sidebarcandidate";

function Sidebar() {
  const [color, setcolor] = useState("transparent");
  const { user } = isAuthenticated();

  return (
    <>
      <ThemeContext.Consumer>
        {({ changeTheme, theme }) =>
          theme == "white-content"
            ? setcolor("white")
            : setcolor("rgb(32 33 51)")
        }
      </ThemeContext.Consumer>

      <div
        className="sidebar"
        style={{
          background: color,
          marginTop: "60px",
          boxShadow: "none",
          borderRadius: "0px",
          borderLeft: "1px solid lightgray",
        }}
      >
        <div className="sidebar-wrapper" style={{ overflow: "hidden" }}>
          {user.role === "0" ? (
            <SidebarAdmin />
          ) : user.role === "1" ? (
            <SidebarGdod />
          ) : user.role === "2" ? (
            <SidebarHativa />
          ) : user.role === "3" ? (
            <SidebarOgda /> 
          ) : user.role === "4" ? (
            <SidebarPikod />
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
