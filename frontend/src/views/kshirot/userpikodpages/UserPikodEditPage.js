import React, { useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
// reactstrap components
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table,
    Button,
    Label,
    FormGroup,
    Input,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/kshirot/PanelHeader/PanelHeader.js";

import axios from 'axios';
import DisplayOgdaCard from 'components/kshirot/DisplayOgdaCard/DisplayOgdaCard';

const UserPikodEditPage = ({ match }) => {
    const [pikod, setPikod] = useState([])
    const [pikodogdas, setPikodogdas] = useState([]);// ogdas of pikod

    function init() {
        loadpikod();
    }

    const loadpikod = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/pikod/pikodbyid`, [match.params.pikodid])
            setPikod(response.data[0]);
            findpikodogdas(response.data[0]._id);
        }
        catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const findpikodogdas = async (pikodid1) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/ogda/ogdasbypikodid`,{ pikod: pikodid1 })
            setPikodogdas(response.data);//[0]??
        }
        catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const pikodNameHeader =
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>{pikod.name}</h1>
    </Container>
    
    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <PanelHeader content={pikodNameHeader}/>
            <div style={{ padding: '15px' }}>
                <Row>
                    {pikodogdas.map((ogda, i) => (
                        ogda ?
                            <>
                                <Col xs={12} md={4}>
                                <DisplayOgdaCard id={ogda._id} />
                                </Col>
                            </>
                            : null
                    ))}
                </Row>
            </div>
        </>
    );
}
export default withRouter(UserPikodEditPage);;