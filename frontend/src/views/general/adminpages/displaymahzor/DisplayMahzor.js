import React, { useState, useEffect, useRef } from 'react';

import { Link, withRouter, Redirect } from "react-router-dom";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col,
  Collapse,
} from "reactstrap";

import axios from 'axios';

import PanelHeader from "components/general/PanelHeader/PanelHeader";

import MahzorCandidatesPreferencesSortingTable from 'components/safetySystem/MahzorCandidatesPreferencesSortingTable/SortingTable'
import MahzorUnitsPreferencesSortingTable from 'components/safetySystem/MahzorUnitsPreferencesSortingTable/SortingTable'

import DisplayMahzorEshkol from './DisplayMahzorEshkol';

function DisplayMahzor({ match }) {
  //mahzor
  const [mahzordata, setMahzorData] = useState({})
  //mahzor

  const loadmahzor = () => {
    axios.get(`http://localhost:8000/api/mahzor/${match.params.mahzorid}`)
      .then(response => {
        let tempmahzor = response.data;
        tempmahzor.startdate = tempmahzor.startdate.slice(0, 10);
        tempmahzor.enddate = tempmahzor.enddate.slice(0, 10);
        setMahzorData(tempmahzor);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function init() {
    loadmahzor()
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Container>
      <PanelHeader size="sm" content={
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h1 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>{mahzordata.name}</h1>
        </Container>} />

      <Card style={{marginTop:'30px'}}>
        <CardBody>
          <DisplayMahzorEshkol/>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 style={{ textAlign: 'right', fontWeight: 'bold' }}>טבלת העדפות מועמדים</h3>
          <MahzorCandidatesPreferencesSortingTable />
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 style={{ textAlign: 'right', fontWeight: 'bold' }}>טבלת העדפות יחידות</h3>
          <MahzorUnitsPreferencesSortingTable />
        </CardBody>
      </Card>

      <Link to={`/mahzorform/${mahzordata._id}`}><Button>ערוך מחזור</Button></Link>
    </Container>
  );
}

export default withRouter(DisplayMahzor);