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

import CandidateCard from './CandidateCard'

const UserCandidatesComponent = (props) => {
    const [candidates, setCandidates] = useState([]);

    function init() {
        getUserCandidates()
    }

    async function getUserCandidates() {
        let res = await axios.get(`http://localhost:8000/api/candidate`)
        let data = res.data;
        let result = data.filter(candidate => candidate.user === props.id);
        setCandidates(result)
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <Card>
                <CardHeader style={{ direction: 'rtl' }} style={{ direction: "rtl", textAlign: 'center' }}>
                    <CardTitle tag="h3" style={{ direction: 'rtl', textAlign: 'right', fontWeight: 'bold' }}>מועמדויות שלי</CardTitle>
                </CardHeader>

                <CardBody style={{ direction: 'ltr', textAlign: 'right' }} style={{ direction: "rtl", cursor: 'pointer', textAlign: 'center' }}>
                    <Row>
                        {candidates.map((candidate, i) => (
                            candidate ?
                                <>
                                    <Col xs={12} md={4}>
                                        <CandidateCard candidate={candidate} />
                                    </Col>
                                </>
                                : null
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}
export default withRouter(UserCandidatesComponent);;

