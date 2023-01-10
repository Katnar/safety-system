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
import SidebarGlobal from "components/general/Sidebar/SidebarGlobal";
import teamLogo from "assets/img/team100.png"

function Sidebar() {
  const [color, setcolor] = useState("transparent");
  const { user } = isAuthenticated();

  const clickSubmit = (event) => {
    event.preventDefault();
    if(user.role === "0"){
        signout().then((response) => {
            history.push(`/adminsignin`);
        });
    }
    else{
      history.push(`/signupotherusers`);
    }
  };

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
        <div className="sidebar-wrapper" style={{ overflowY:'auto',overflowX:'hidden' }}>
          {user.role === "0" ? (
            <SidebarAdmin />
          ) : user.role === "1" ? (
            <SidebarGlobal />
          ) : user.role === "2" ? (
            <SidebarGlobal />
          ) : user.role === "3" ? (
            <SidebarGlobal />
          ) : user.role === "4" ? (
            <SidebarGlobal />
          ) : null}
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              // position: "absolute",
              bottom: 0,
              width: "100%",
              marginBottom: "15px"
            }}
          >
            <img src={teamLogo} style={{ width: "50%" }}></img>
            {user.role === "0" ?
              <button
                onClick={clickSubmit}
                className="btn-new-blue"
                style={{ width: '80%', marginTop: '15px' }}
              >
                התנתק
              </button>
              :
              <button
                onClick={clickSubmit}
                className="btn-new-blue"
                style={{ width: '80%', marginTop: '15px' }}
              >
                רשום משתמש נוסף
              </button>
            }
            <a href="http://216.1.1.11:8008/presentation">
              <button
                className="btn-new-delete"
                style={{ width: '80%', marginTop: '15px' }}
              >
                חזרה לשולחן הטנ"א שלי
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
