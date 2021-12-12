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

const PreferenceForm = ({ match }) => {
  const [, forceUpdate] = useState();
  //react validator
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      default: 'נדרש למלא שדה זה'
    },
    element: message => <div style={{ background: '#F66C6C', textAlign: 'center', fontWeight: 'bold' }}>{message}</div>
  }))

  const [tipuldata, setTipulData] = useState({})
  const [jobs, setJobs] = useState([]);

  function init() {

  }

  function handleChange(evt) {
    const value = evt.target.value;
    setTipulData({ ...tipuldata, [evt.target.name]: value });
  }

  const clickSubmit = event => {//CheckPreferenceData->AddPreferenceToDb
    const formValid = simpleValidator.current.allValid()
    if (!formValid) {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    } else {
      AddPreferenceToDb();
    }
  }

  function AddPreferenceToDb() {
    const temptipul = tipuldata;
    axios.post(`http://localhost:8000/api/kshirot`, temptipul)
      .then(res => {
        console.log(res.data._id)// returns current added kshirot id
      })
      .catch(error => {

      })
    console.log(temptipul);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Container style={{ paddingTop: '80px', direction: 'rtl' }}>
      <Row>
        <Card>
          <CardHeader style={{ direction: 'rtl' }}>
            <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'center', fontWeight: "bold" }}>טופס העדפות מועמד</CardTitle>{/*headline*/}
          </CardHeader>

          <CardBody style={{ direction: 'rtl' }}>
            <Container>

              <div style={{ textAlign: 'right', paddingTop: '10px', fontWeight: "bold" }}>פרטי מועמד</div>
              <Row>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>מס' אישי</div>
                  <FormGroup dir="rtl" >
                    <Input type="text" name="personalnumber" value={tipuldata.personalnumber} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('personalnumber')} />
                    {simpleValidator.current.message('personalnumber', tipuldata.personalnumber, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>שם</div>
                  <FormGroup dir="rtl" >
                    <Input type="text" name="firstname" value={tipuldata.firstname} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('firstname')} />
                    {simpleValidator.current.message('firstname', tipuldata.firstname, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>שם משפחה</div>
                  <FormGroup dir="rtl" >
                    <Input type="text" name="lastname" value={tipuldata.lastname} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('lastname')} />
                    {simpleValidator.current.message('lastname', tipuldata.lastname, 'required')}
                  </FormGroup>
                </Col>
              </Row>

              <div style={{ textAlign: 'right', paddingTop: '10px', fontWeight: "bold" }}>העדפות תפקידים - ודאי (1- גבוה ביותר)</div>
              <Row>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 1</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjob1" value={tipuldata.certjob1} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('certjob1')}>
                    <option value={undefined}>{"בחר תפקיד"}</option>
                    {jobs.map((job, index) => (
                        <option value={job._id}>{job.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 2</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjob2" value={tipuldata.certjob2} onChange={handleChange}>
                    <option value={undefined}>{"בחר תפקיד"}</option>
                    {jobs.map((job, index) => (
                        <option value={job._id}>{job.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 3</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjob3" value={tipuldata.certjob3} onChange={handleChange}>
                    <option value={undefined}>{"בחר תפקיד"}</option>
                    {jobs.map((job, index) => (
                        <option value={job._id}>{job.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <div style={{ textAlign: 'center' }}>
                <button className="btn btn-primary" onClick={clickSubmit}>עדכן כשירות</button>
              </div>
            </Container>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}
export default withRouter(PreferenceForm);;