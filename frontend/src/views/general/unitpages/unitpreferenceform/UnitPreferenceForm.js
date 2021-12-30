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
import soldier from "assets/img/soldier.png";

const UnitPreferenceForm = ({ match }) => {
  //unitpreference data
  const [unitpreference, setUnitPreference] = useState({})
  const [unitpreferencecandidates, setUnitPreferenceCandidates] = useState([]);
  //unitpreference data

  //mahzor data
  const [mahzorcandidates, setMahzorCandidates] = useState([]);
  const [job, setJob] = useState([]);
  //mahzor data

  const isDuplicate = (data, obj) =>
    data.some((el) =>
      Object.entries(obj).every(([key, value]) => value._id === el[key]._id)
    );

  const handleChangCandidatesOfPreference = event => {
    if (event.target.value != "בחר מועמד") {
      let tempcandidate = mahzorcandidates[event.target.value];
      if (!isDuplicate(unitpreferencecandidates, tempcandidate)) {
        setUnitPreferenceCandidates(unitpreferencecandidates => [...unitpreferencecandidates, tempcandidate]);
      }
    }
  }

  const loadmahzordata = async () => {
    //candidates
    let result1 = await axios.get(`http://localhost:8000/api/candidatesbymahzorid/${match.params.mahzorid}`)
    let candidates = result1.data;
    let tempmahzorcandidates = [];
    for (let i = 0; i < candidates.length; i++) {
      tempmahzorcandidates.push({ user: candidates[i].user, mahzor: candidates[i].mahzor._id, _id: candidates[i]._id })
    }
    setMahzorCandidates(tempmahzorcandidates);

    //jobs
    let result2 = await axios.get(`http://localhost:8000/api/jobbyid/${match.params.jobid}`)
    let job = result2.data[0];
    setJob(job);
  }

  const loadunitpreference = async () => {
    //users
    let result = await axios.get(`http://localhost:8000/api/users`)
    let users = result.data;
    //unitpreference
    let result1 = await axios.get(`http://localhost:8000/api/unitpreferencebyjobid/${match.params.jobid}`)
    let tempunitpreference = result1.data[0];
    setUnitPreference(tempunitpreference);

    if (tempunitpreference) //has unitprefernce to the job
    {
      let tempunitpreferencecandidates = []
      for (let i = 0; i < tempunitpreference.candidates.length; i++) {
        let tempcandidatedata = {};
        for (let j = 0; j < users.length; j++) {
          if (tempunitpreference.candidates[i].user == users[j]._id) {
            tempcandidatedata._id = tempunitpreference.candidates[i]._id;
            tempcandidatedata.user = users[j];
            tempcandidatedata.mahzor = match.params.mahzorid;//maybe problem?
          }
        }
        tempunitpreferencecandidates.push(tempcandidatedata)
      }
      setUnitPreferenceCandidates(tempunitpreferencecandidates);
    }
    else { //doesnt has unitprefernce to the job

    }
  }

  function DeleteCandidateFromUnitPreferenceCandidates(user) {
    let tempunitpreferencecandidates = unitpreferencecandidates;
    tempunitpreferencecandidates = tempunitpreferencecandidates.filter(function (item) {
      return item !== user
    })
    setUnitPreferenceCandidates(tempunitpreferencecandidates);
  }

  const clickSubmit = event => {
    if (unitpreference)
      UpdateUnitPreferenceInDb();
    else {
      AddUnitPreferenceToDb();
    }
  }

  async function AddUnitPreferenceToDb() {
    let tempunitpreferencecandidates = []
    unitpreferencecandidates.map((candidte, index) => (
      tempunitpreferencecandidates.push(candidte._id)
    ))
    let tempunitpreference = { mahzor: match.params.mahzorid, job: match.params.jobid, candidates: tempunitpreferencecandidates }
    // console.log(tempunitpreference)
    let result = await axios.post(`http://localhost:8000/api/unitpreference`, tempunitpreference)
    toast.success("העדפה נוספה בהצלחה")
    history.goBack();
  }

  async function UpdateUnitPreferenceInDb() {
    let tempunitpreferencecandidates = []
    unitpreferencecandidates.map((candidte, index) => (
      tempunitpreferencecandidates.push(candidte._id)
    ))
    let tempunitpreference = { mahzor: match.params.mahzorid, job: match.params.jobid, candidates: tempunitpreferencecandidates }
    // console.log(tempunitpreference)
    let result = await axios.put(`http://localhost:8000/api/unitpreference/${unitpreference._id}`, tempunitpreference)
    toast.success("העדפה עודכנה בהצלחה")
    history.goBack();
  }

  async function init() {
    // await loadusers()
    await loadunitpreference()
    // FindEshkolByJob();
    loadmahzordata();
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Container style={{ paddingTop: '80px', direction: 'rtl' }}>
      <Row>
        <Card>
          <CardHeader style={{ direction: 'rtl' }}>
            <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'center', fontWeight: "bold" }}>טופס העדפות יחידה: {job.jobtype ? job.jobtype.jobname : null}</CardTitle>{/*headline*/}
          </CardHeader>

          <CardBody style={{ direction: 'rtl' }}>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>הוסף מועמד</div>
                  <FormGroup dir="rtl" >
                    <Input type="select" onChange={handleChangCandidatesOfPreference}>
                      <option value={"בחר מועמד"}>בחר מועמד</option>
                      {mahzorcandidates.map((candidate, index) => (
                        <option key={index} value={index}>{candidate.user.name} {candidate.user.lastname}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row style={{ direction: "rtl", paddingTop: '10px' }} >
                {unitpreferencecandidates ?unitpreferencecandidates.map((candidate, index) => (
                  <Col xs={12} md={4} key={index}>
                    <Row style={{ direction: "rtl", boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 40%)', borderRadius: '10px' }}>
                      <Col xs={12} md={2} style={{ textAlign: 'center', alignSelf: 'center' }}>
                        <img src={soldier} alt="bookmark" style={{ height: "2rem" }} />
                      </Col>
                      <Col xs={12} md={6} style={{ alignSelf: 'center' }}>
                        <h3 style={{ textAlign: "right", margin: '0px' }}>{candidate.user.name} {candidate.user.lastname}</h3>
                      </Col>
                      <Col xs={12} md={4} style={{ alignSelf: 'center' }}>
                        <Button className="btn btn-danger" onClick={(e) => DeleteCandidateFromUnitPreferenceCandidates(candidate, e)} style={{ padding: '11px 20px 11px 20px' }}>X</Button>
                      </Col>
                    </Row>
                  </Col>
                )) : null}
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
export default withRouter(UnitPreferenceForm);;