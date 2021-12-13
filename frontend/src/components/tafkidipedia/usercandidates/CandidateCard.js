import React, { useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    Container,
    UncontrolledTooltip,
    Progress,
} from "reactstrap";
import axios from 'axios';
import { isAuthenticated } from 'auth/index';

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CandidateCard = (props) => {

    function init() {
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <Card>
                <CardHeader style={{ direction: 'rtl' }} style={{ direction: "rtl", cursor: 'pointer', textAlign: 'center' }}>
                    <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'right' }}>ggf</CardTitle>
                </CardHeader>

                <CardBody style={{ direction: 'ltr', textAlign: 'right' }} style={{ direction: "rtl", cursor: 'pointer', textAlign: 'center' }}>
                    {props.candidate}
                </CardBody>
                <CardFooter style={{ direction: "rtl", cursor: 'pointer', textAlign: 'center' }}>
                </CardFooter>
            </Card>
        </>
    );
}
export default withRouter(CandidateCard);;

