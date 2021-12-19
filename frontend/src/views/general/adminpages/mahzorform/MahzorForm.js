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
import MahzorCandidates from './MahzorCandidates';
import MahzorJobs from './MahzorJobs';

const MahzorForm = ({ match }) => {
  const [mahzordata, setMahzorData] = useState({})
  const [tempjobtoadd, setTempJobToAdd] = useState({});

  const [userstocandidate, setUsersToCandidate] = useState([]); // temp value of select input
  const [users, setUsers] = useState([]);

  const [units, setUnits] = useState([]);
  const [jobtypes, setJobtypes] = useState([]);
  const [jobstoadd, setJobsToAdd] = useState([]);

  //handle add state
  const [isjobmodalopen, setIsJobModalOpen] = useState(false);

  function TempJobToAddhandleChange(evt) {
    const value = evt.target.value;
    setTempJobToAdd({ ...tempjobtoadd, [evt.target.name]: value });
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setMahzorData({ ...mahzordata, [evt.target.name]: value });
  }

  const isDuplicate = (data, obj) =>
    data.some((el) =>
      Object.entries(obj).every(([key, value]) => value === el[key])
    );

  const handleChangeUsersToCandidate = event => {
    if (event.target.value != "בחר מועמד") {
      let tempuser = users[event.target.value];
      if (!isDuplicate(userstocandidate, tempuser)) {
        setUsersToCandidate(userstocandidate => [...userstocandidate, tempuser]);
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

  const loadmahzor = () => {
    axios.get(`http://localhost:8000/api/mahzor/${match.params.mahzorid}`)
      .then(response => {
        let tempmahzor=response.data;
        tempmahzor.startdate= tempmahzor.startdate.slice(0, 10);
        tempmahzor.enddate= tempmahzor.enddate.slice(0, 10);
        setMahzorData(tempmahzor);
        loadcandidates(tempmahzor);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadcandidates = async(tempmahzor) => {
    let tempusersfromcandidates=[];

    let result = await axios.get(`http://localhost:8000/api/candidatesbymahzorid/${tempmahzor._id}`)
    let candidates=result.data;

    for(let i=0;i<candidates.length;i++)
        {
          tempusersfromcandidates.push(candidates[i].user)
        }
        setUsersToCandidate(tempusersfromcandidates);
  }

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
    if (match.params.mahzorid != 0) {
      loadmahzor()
    }
    loadusers();
    loadunits();
    loadjobtypes();
  }

  const clickSubmit = event => {
    if(CheckFormData())
    {
      SubmitData()
    }
  }

   function CheckFormData() {
    let flag=true;
    let error="";

    if(((mahzordata.name==undefined)||(mahzordata.name==""))||((mahzordata.startdate==undefined)||(mahzordata.startdate==""))||((mahzordata.enddate==undefined)||(mahzordata.enddate=="")))
    {
      error+="פרטים כלליים שגויים"
      flag=false;
    }
    return flag;
  }

  async function SubmitData() {
    console.log("post")
    let tempmahzordata
    if (match.params.mahzorid == 0) { //new mahzor
      let result = await axios.post("http://localhost:8000/api/mahzor",mahzordata);
      tempmahzordata=result.data;
    }
    else{ // update mahzor
      let result = await axios.put(`http://localhost:8000/api/mahzor/${match.params.mahzorid}`,mahzordata);
      tempmahzordata=result.data;
    }

    let tempuserstocandidate=userstocandidate;
    for(let i=0;i<tempuserstocandidate.length;i++)
    {
      //if not exist (need to check..):
      tempuserstocandidate[i].mahzor=tempmahzordata._id;
      tempuserstocandidate[i].user=tempuserstocandidate[i]._id;
      let result = await axios.post(`http://localhost:8000/api/candidate`,tempuserstocandidate[i]);
    }

  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Container style={{ direction: 'rtl' }}>
        <MahzorDataComponent mahzordata={mahzordata} handleChangeMahzorData={handleChange} />

        <MahzorCandidates handleChangeUsersToCandidate={handleChangeUsersToCandidate} users={users} userstocandidate={userstocandidate} DeleteUserFromUsersToCandidate={DeleteUserFromUsersToCandidate}/>

        <MahzorJobs tempjobtoadd={tempjobtoadd} TempJobToAddhandleChange={TempJobToAddhandleChange} TempJobToAddhandleChange={TempJobToAddhandleChange} DeleteJobFromJobsToAdd={DeleteJobFromJobsToAdd} PrepEditModal={PrepEditModal} setIsJobModalOpen={setIsJobModalOpen} isjobmodalopen={isjobmodalopen} AddJobToJobsToAdd={AddJobToJobsToAdd} jobstoadd={jobstoadd}/>

        <Button type="primary" onClick={() => clickSubmit()}>
          אישור
        </Button>
    </Container>
  );
}
export default withRouter(MahzorForm);;