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

const CandidatePreferenceForm = ({ match }) => {
  const [, forceUpdate] = useState();
  //react validator
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      default: 'נדרש למלא שדה זה'
    },
    element: message => <div style={{ background: '#F66C6C', textAlign: 'center', fontWeight: 'bold' }}>{message}</div>
  }))

  const [candidatepreference, setCandidatePreference] = useState({})
  const [certmahzorjobs, setCertMahzorJobs] = useState([]);
  const [noncertmahzorjobs, setNonCertMahzorJobs] = useState([]);

  function handleChange(evt) {
    const value = evt.target.value;
    setCandidatePreference({ ...candidatepreference, [evt.target.name]: value });
  }

  const loadcandidatepreference = async () => {
    let tempcandidatepreferencedata; //look for existing preference
    let result = await axios.get(`http://localhost:8000/api/candidatepreference/candidatepreferencebycandidateid/${match.params.candidateid}`);
    tempcandidatepreferencedata = result.data[0];
    if(tempcandidatepreferencedata) //has existing pref
    {
    tempcandidatepreferencedata.certjobpreference1 = tempcandidatepreferencedata.certjobpreference1._id
    tempcandidatepreferencedata.certjobpreference2 = tempcandidatepreferencedata.certjobpreference2._id
    tempcandidatepreferencedata.certjobpreference3 = tempcandidatepreferencedata.certjobpreference3._id
    tempcandidatepreferencedata.noncertjobpreference1 = tempcandidatepreferencedata.noncertjobpreference1._id
    tempcandidatepreferencedata.noncertjobpreference2 = tempcandidatepreferencedata.noncertjobpreference2._id
    tempcandidatepreferencedata.noncertjobpreference3 = tempcandidatepreferencedata.noncertjobpreference3._id
    delete tempcandidatepreferencedata.mahzor;
    delete tempcandidatepreferencedata.candidate;
    setCandidatePreference(tempcandidatepreferencedata)
    }
    else{ //dont have existing pref

    }
    // console.log(tempcandidatepreferencedata)
  }

  const loadmahzorjobs = async () => {
    let tempcertjobs = [];
    let tempnoncertjobs = [];

    let result = await axios.get(`http://localhost:8000/api/jobsbymahzorid/${match.params.mahzorid}`)
    let jobs = result.data;

    for (let i = 0; i < jobs.length; i++) {
      if(jobs[i].certain==true) // תפקיד ודאי
      {
        let tempjob = jobs[i];
        tempcertjobs.push(tempjob)
      }
      else{// תפקיד לא ודאי
        let tempjob = jobs[i];
        tempnoncertjobs.push(tempjob)
      }

    }
    setCertMahzorJobs(tempcertjobs);
    setNonCertMahzorJobs(tempnoncertjobs);
  }

  const clickSubmit = event => {//CheckPreferenceData->AddPreferenceToDb
    const formValid = simpleValidator.current.allValid()
    if (!formValid) {
      simpleValidator.current.showMessages()
      forceUpdate(1)
      toast.error("שגיאה בטופס")
    } else {
      AddPreferenceToDb();
    }
  }

  function AddPreferenceToDb() { //if candidatepref has id- means it exists and needs to be updated else its new..
    let tempcandidatepreference = candidatepreference;
    tempcandidatepreference.mahzor = match.params.mahzorid;
    tempcandidatepreference.candidate = match.params.candidateid;

    if (!tempcandidatepreference._id) { //create new
      axios.post(`http://localhost:8000/api/candidatepreference`, tempcandidatepreference)
        .then(res => {
          // console.log(res.data._id)
          toast.success("העדפה נקלטה בהצלחה")
          history.goBack();
        })
        .catch(error => {

        })
    }
    else {//update
      axios.put(`http://localhost:8000/api/candidatepreference/${tempcandidatepreference._id}`, tempcandidatepreference)
      .then(res => {
        // console.log(res.data._id)
        toast.success("העדפה עודכנה בהצלחה")
        history.goBack();
      })
      .catch(error => {

      })
    }
  }

  function init() {
    loadcandidatepreference()
    loadmahzorjobs()
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

              <h5 style={{ textAlign: 'right', paddingTop: '10px', fontWeight: "bold" }}>העדפות תפקידים - ודאי (1- גבוה ביותר)</h5>
              <Row>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 1</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjobpreference1" value={candidatepreference.certjobpreference1} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('certjobpreference1')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {certmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('certjobpreference1', candidatepreference.certjobpreference1, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 2</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjobpreference2" value={candidatepreference.certjobpreference2} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('certjobpreference2')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {certmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('certjobpreference2', candidatepreference.certjobpreference2, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 3</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="certjobpreference3" value={candidatepreference.certjobpreference3} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('certjobpreference3')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {certmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('certjobpreference3', candidatepreference.certjobpreference3, 'required')}
                  </FormGroup>
                </Col>
              </Row>

              <h5 style={{ textAlign: 'right', paddingTop: '10px', fontWeight: "bold" }}>העדפות תפקידים - לא ודאי (1- גבוה ביותר)</h5>
              <Row>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 1</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="noncertjobpreference1" value={candidatepreference.noncertjobpreference1} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('noncertjobpreference1')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {noncertmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('noncertjobpreference1', candidatepreference.noncertjobpreference1, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 2</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="noncertjobpreference2" value={candidatepreference.noncertjobpreference2} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('noncertjobpreference2')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {noncertmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('noncertjobpreference2', candidatepreference.noncertjobpreference2, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תפקיד 3</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" name="noncertjobpreference3" value={candidatepreference.noncertjobpreference3} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('noncertjobpreference3')}>
                      <option value={undefined}>{"בחר תפקיד"}</option>
                      {noncertmahzorjobs.map((job, index) => (
                        <option value={job._id}>{job.jobtype.jobname + "/" + job.unit.name}</option>
                      ))}
                    </Input>
                    {simpleValidator.current.message('noncertjobpreference3', candidatepreference.noncertjobpreference3, 'required')}
                  </FormGroup>
                </Col>
              </Row>

              <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                <button className="btn btn-primary" onClick={clickSubmit}>עדכן העדפות</button>
              </div>
            </Container>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}
export default withRouter(CandidatePreferenceForm);;