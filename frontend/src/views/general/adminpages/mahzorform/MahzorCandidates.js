import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
// reactstrap components
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
    Col
} from "reactstrap";
import axios from 'axios';
import history from 'history.js'
import { produce } from 'immer'
import { generate } from 'shortid'
import { toast } from "react-toastify";

import editpic from "assets/img/edit.png";
import deletepic from "assets/img/delete.png";
import SettingModal from "../SettingModal";
import MahzorDataComponent from './MahzorDataComponent';

const MahzorCandidates = (props) => {

    function init() {

    }

    useEffect(() => {
        init();
    }, [])

    return (
        <Card>
            <CardHeader style={{ direction: 'rtl' }}>
                <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'center', fontWeight: "bold" }}>מועמדים</CardTitle>{/*headline*/}
            </CardHeader>
            <CardBody style={{ direction: 'rtl' }}>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div style={{ textAlign: 'center', paddingTop: '10px' }}>הוסף מועמד</div>
                            <FormGroup dir="rtl" >
                                <Input type="select" onChange={props.handleChangeUsersToCandidate}>
                                    <option value={"בחר מועמד"}>בחר מועמד</option>
                                    {props.users.map((user, index) => (
                                        <option key={index} value={index}>{user.name}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={{ direction: "rtl" }} >
                        {props.userstocandidate? props.userstocandidate.map((user, index) => (
                            <Col xs={12} md={6} key={index}>
                                <Row style={{ direction: "rtl" }} >
                                    <Col xs={12} md={6} >
                                        <h3 style={{ textAlign: "right", margin: '0px' }}>{user.name}</h3>
                                    </Col>
                                    <Col xs={12} md={6} >
                                        <Button onClick={(e) => props.DeleteUserFromUsersToCandidate(user, e)}>מחק</Button>
                                    </Col>
                                </Row>
                            </Col>
                        )):null}
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
}
export default withRouter(MahzorCandidates);;