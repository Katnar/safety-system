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
import SettingModal from "./SettingModal";

const MahzorForm = ({ match }) => {
  const [, forceUpdate] = useState();
  const [tipuldata, setTipulData] = useState({})
  const [tempjobtoadd, setTempJobToAdd] = useState({});
  const [mahzorid, setMahzorid] = useState([]);

  const [userstocandidate, setUsersToCandidate] = useState([]); // temp value of select input
  const [users, setUsers] = useState([]);

  const [units, setUnits] = useState([]);
  const [jobtypes, setJobtypes] = useState([]);
  const [jobstoadd, setJobsToAdd] = useState([]);

  //handle add state
  const [isjobmodalopen, setIsJobModalOpen] = useState(false);
  //handle edit state
  const [iseditjobmodalopen, setIsEditJobModalOpen] = useState(false);
  //
  const [modalData, setModalData] = useState("");
  const [editData, setEditData] = useState("");

  function TempJobToAddhandleChange(evt) {
    const value = evt.target.value;
    setTempJobToAdd({ ...tempjobtoadd, [evt.target.name]: value });
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setTipulData({ ...tipuldata, [evt.target.name]: value });
  }

  const isDuplicate = (data, obj) =>
    data.some((el) =>
      Object.entries(obj).every(([key, value]) => value === el[key])
    );

  const handleChangeUsersToCandidate = event => {
    if (event.target.value != "בחר מועמד") {
      let tempid = users[event.target.value];
      if (!isDuplicate(userstocandidate, tempid)) {
        setUsersToCandidate(userstocandidate => [...userstocandidate, tempid]);
      }
    }
  }

  function DeleteUserFromUsersToCandidate(user) {
    let tempuserstocandidate = userstocandidate;
    tempuserstocandidate = tempuserstocandidate.filter(function (item) {
      return item !== user
    })
    setUsersToCandidate(tempuserstocandidate);
  }

  function AddJobToJobsToAdd() {
    setJobsToAdd(jobstoadd => [...jobstoadd, tempjobtoadd]);
    setTempJobToAdd({});
    setIsJobModalOpen(false);
  }

  function DeleteJobFromJobsToAdd(job) {
    let tempjobstoadd = jobstoadd;
    tempjobstoadd = tempjobstoadd.filter(function (item) {
      return item !== job
    })
    setJobsToAdd(tempjobstoadd);
  }

  function PrepEditModal(job) {
    DeleteJobFromJobsToAdd(job)
    setTempJobToAdd(job)
    setIsJobModalOpen(true);
  }

  //react validator
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      default: 'נדרש למלא שדה זה'
    },
    element: message => <div style={{ background: '#F66C6C', textAlign: 'center', fontWeight: 'bold' }}>{message}</div>
  }))

  const loadusers = () => {
    axios.get(`http://localhost:8000/api/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadunits = () => {
    axios.get(`http://localhost:8000/api/unit`)
      .then(response => {
        setUnits(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadjobtypes = () => {
    axios.get(`http://localhost:8000/api/jobtype`)
      .then(response => {
        setJobtypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function init() {
    setMahzorid(match.params.mahzorid);
    loadusers();
    loadunits();
    loadjobtypes();
  }

  const clickSubmit = event => {//CheckPreferenceData->AddPreferenceToDb
    const formValid = simpleValidator.current.allValid()
    if (!formValid) {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    } else {
      // AddPreferenceToDb();
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Container style={{ direction: 'rtl' }}>
      <Row>
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
                    <Input type="text" name="name" value={tipuldata.name} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('name')}></Input>
                    {simpleValidator.current.message('name', tipuldata.name, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תאריך התחלה</div>
                  <FormGroup dir="rtl" >
                    <Input type="date" name="startdate" value={tipuldata.startdate} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('startdate')}></Input>
                    {simpleValidator.current.message('startdate', tipuldata.startdate, 'required')}
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תאריך סיום</div>
                  <FormGroup dir="rtl" >
                    <Input type="date" name="enddate" value={tipuldata.enddate} onChange={handleChange} onBlur={() => simpleValidator.current.showMessageFor('enddate')}></Input>
                    {simpleValidator.current.message('enddate', tipuldata.enddate, 'required')}
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>

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
                    <Input type="select" onChange={handleChangeUsersToCandidate}>
                      <option value={"בחר מועמד"}>בחר מועמד</option>
                      {users.map((user, index) => (
                        <option key={index} value={index}>{user.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ direction: "rtl" }} >
                {userstocandidate.map((user, index) => (
                  <Col xs={12} md={6} key={index}>
                    <Row style={{ direction: "rtl" }} >
                      <Col xs={12} md={6} >
                        <h3 style={{ textAlign: "right", margin: '0px' }}>{user.name}</h3>
                      </Col>
                      <Col xs={12} md={6} >
                        <Button onClick={(e) => DeleteUserFromUsersToCandidate(user, e)}>מחק</Button>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Container>
          </CardBody>
        </Card>

        <Card>
          <CardHeader style={{ direction: 'rtl' }}>
            <CardTitle tag="h4" style={{ direction: 'rtl', textAlign: 'center', fontWeight: "bold" }}>תפקידים</CardTitle>{/*headline*/}
          </CardHeader>
          <CardBody style={{ direction: 'rtl' }}>
            <Container>
              <Button type="primary" onClick={() => setIsJobModalOpen(true)}>
                הוסף תפקיד
              </Button>
              <SettingModal
                title="הוסף תפקיד"
                isOpen={isjobmodalopen}>
                <div style={{ direction: 'rtl' }}>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>בחר סוג תפקיד</div>
                  <Input
                    type="select"
                    name="jobtype" value={tempjobtoadd.jobtype} onChange={TempJobToAddhandleChange}
                  >
                    <option value={"בחר סוג תפקיד"}>בחר סוג תפקיד</option>
                    {jobtypes.map((jobtype, index) => (
                      <option key={index} value={index}>{jobtype.name}</option>
                    ))}
                  </Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>בחר יחידה</div>
                  <Input
                    type="select"
                    name="unit" value={tempjobtoadd.unit} onChange={TempJobToAddhandleChange}
                  >
                    <option value={"בחר יחידה"}>בחר יחידה</option>
                    {units.map((unit, index) => (
                      <option key={index} value={index}>{unit.name}</option>
                    ))}
                  </Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>מחלקה</div>
                  <Input type="text" name="mahlaka" value={tempjobtoadd.mahlaka} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תחום</div>
                  <Input type="text" name="thom" value={tempjobtoadd.thom} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>תיאור</div>
                  <Input type="text" name="description" value={tempjobtoadd.description} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>מיקום</div>
                  <Input type="text" name="location" value={tempjobtoadd.location} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>פעילות</div>
                  <Input type="text" name="peilut" value={tempjobtoadd.peilut} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>דמ"ח</div>
                  <Input type="text" name="damah" value={tempjobtoadd.damah} onChange={TempJobToAddhandleChange}></Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>סיווג</div>
                  <Input type="select" name="sivug" value={tempjobtoadd.sivug} onChange={TempJobToAddhandleChange}>
                  <option value={"בחר סיווג"}>בחר סיווג</option>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"ללא סיווג"}>ללא סיווג</option>
                  </Input>
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>ודאי/לא ודאי</div>
                  <Input type="select" name="certain" value={tempjobtoadd.certain} onChange={TempJobToAddhandleChange}>
                  <option value={"בחר ודאי/לא ודאי"}>בחר ודאי/לא ודאי</option>
                    <option value={true}>ודאי</option>
                    <option value={false}>לא ודאי</option>
                  </Input>
                  <Button onClick={() => AddJobToJobsToAdd()}>הוסף</Button>
                  <Button onClick={() => setIsJobModalOpen(false)}>סגור</Button>
                </div>
              </SettingModal>
              <table>
                <tr>
                  <th>סוג תפקיד</th>
                  <th>יחידה</th>
                  <th>מחלקה</th>
                  <th>תחום</th>
                  <th>תיאור</th>
                  <th>מיקום</th>
                  <th>פעילות</th>
                  <th>דמ"ח</th>
                  <th>סיווג</th>
                  <th>ודאי/לא ודאי</th>
                  <th>ערוך</th>
                  <th>מחק</th>
                </tr>
                {jobstoadd.map((job, index) => (
                  <tr>
                    <td style={{ textAlign: "center" }}>{job.name}</td>
                    <td style={{ textAlign: "center" }}>{job.unit}</td>
                    <td style={{ textAlign: "center" }}>{job.mahlaka}</td>
                    <td style={{ textAlign: "center" }}>{job.thom}</td>
                    <td style={{ textAlign: "center" }}>{job.description}</td>
                    <td style={{ textAlign: "center" }}>{job.location}</td>
                    <td style={{ textAlign: "center" }}>{job.peilut}</td>
                    <td style={{ textAlign: "center" }}>{job.damah}</td>
                    <td style={{ textAlign: "center" }}>{job.sivug}</td>
                    <td style={{ textAlign: "center" }}>{job.certain}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="btn btn-success"
                        style={{ padding: "0.5rem" }}
                        onClick={() => PrepEditModal(job)}
                      >
                        <img
                          src={editpic}
                          alt="bookmark"
                          style={{ height: "2rem" }}
                        />
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <button
                          className="btn btn-danger"
                          style={{ padding: "0.5rem" }}
                          onClick={() => DeleteJobFromJobsToAdd(job)}
                        >
                          <img
                            src={deletepic}
                            alt="bookmark"
                            style={{ height: "2rem" }}
                          />
                        </button>
                    </td>
                  </tr>
                ))}
                <SettingModal
                  title="ערוך תפקיד"
                  isOpen={iseditjobmodalopen}
                >
                  <Input
                    type="text"
                    placeholder={modalData.name}
                    value={editData}
                    onChange={(e) => {
                      setEditData(e.target.value);
                    }}
                  ></Input>
                  {/* <Button onClick={() => editGdodBizoa()}>עדכן</Button> */}
                </SettingModal>
              </table>
            </Container>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}
export default withRouter(MahzorForm);;