import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";

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
import SettingModal from "../../../../components/general/modal/SettingModal";

const MahzorDataComponent = (props) => {

    function init() {

    }

    useEffect(() => {
        init();
    }, [])

    return (
        <Card>
            <CardHeader style={{ direction: 'rtl' }}>
                <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'center', fontWeight: "bold" }}>טופס מחזור</CardTitle>{/*headline*/}
            </CardHeader>
            <CardBody style={{ direction: 'rtl' }}>
                <Container>
                    <h5 style={{ textAlign: 'right', paddingTop: '10px', fontWeight: "bold" }}>פרטים כלליים</h5>
                    <Row>
                        <Col xs={12} md={4}>
                            <div style={{ textAlign: 'center', paddingTop: '10px' }}>שם</div>
                            <FormGroup dir="rtl" >
                                <Input type="text" name="name" value={props.mahzordata.name} onChange={props.handleChangeMahzorData}></Input>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <div style={{ textAlign: 'center', paddingTop: '10px' }}>תאריך התחלה</div>
                            <FormGroup dir="rtl" >
                                <Input type="date" name="startdate" value={props.mahzordata.startdate} onChange={props.handleChangeMahzorData}></Input>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <div style={{ textAlign: 'center', paddingTop: '10px' }}>תאריך סיום</div>
                            <FormGroup dir="rtl" >
                                <Input type="date" name="enddate" value={props.mahzordata.enddate} onChange={props.handleChangeMahzorData}></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
}
export default withRouter(MahzorDataComponent);;