import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { singleFileUpload } from "../../../../data/api";
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
  Col,
} from "reactstrap";
import axios from "axios";
import history from "history.js";
import { produce } from "immer";
import { generate } from "shortid";
import { toast } from "react-toastify";

import editpic from "assets/img/edit.png";
import deletepic from "assets/img/delete.png";
import SettingModal from "../../../../components/general/modal/SettingModal";
import { isAuthenticated } from "auth";

const HazardsMonitoringForm = ({ match }) => {
  const user = isAuthenticated();
  //mahzor
  const [state, setState] = useState([]);
  const [gdods, setGdods] = useState([]);
  //mahzor

  function handleChange(evt) {
    const value = evt.target.value;
    if(evt.target.name != "personalNumber") {
      setState({ ...state, [evt.target.name]: value });
    }
    else {
      pullDetails(evt.target.value)
    }
  }

  async function pullDetails(pn) {
    if (pn != '') {
      let response = await axios.get(`http://localhost:8000/api/occupationalSupervision/byPn/${pn}`)
      if (response.data.length > 0) {
        setState(response.data[0])
      }
      else {
        setState({...state, personalNumber: pn})
      }
    } else {
      setState({...state, personalNumber: pn}) }
  }

  const loadDatas = () => {
    axios
      .get(`http://localhost:8000/api/hazardsMonitoring/${match.params.id}`)
      .then((response) => {
        let tempdatas = response.data;
        setState(tempdatas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadGdods = () => {
    axios
      .get("http://localhost:8000/api/gdod")
      .then((response) => {
        setGdods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickSubmit = async (event) => {
    CheckFormData();
  };

  const CheckFormData = () => {
    let flag = true;
    let error = "";

    if (((state.personalNumber == undefined) || (state.personalNumber == ""))) {
      error += "חסר שדה מספר אישי, "
      flag = false;
    }
    if (((state.rank == undefined) || (state.rank == ""))) {
      error += "חסר שדה דרגה, "
      flag = false;
    }
    if (((state.fullName == undefined) || (state.fullName == ""))) {
      error += "חסר שדה שם מלא, "
      flag = false;
    }
    if (((state.date == undefined) || (state.date == ""))) {
      error += "חסר שדה תאריך, "
      flag = false;
    }
    if (((state.surveyDetails == undefined) || (state.surveyDetails == ""))) {
      error += "חסר שדה נתוני הסקר, "
      flag = false;
    }
    if (((state.digitalSignature == undefined) || (state.digitalSignature == ""))) {
      error += "חסר שדה חתימה דיגיטלית, "
      flag = false;
    }
    if (((state.msd == undefined) || (state.msd == ""))) {
      error += "חסר שדה מס''ד, "
      flag = false;
    }
    if (((state.location == undefined) || (state.location == ""))) {
      error += "חסר שדה מיקום, "
      flag = false;
    }
    if (((state.hazardType == undefined) || (state.hazardType == ""))) {
      error += "חסר שדה סוג המפגע, "
      flag = false;
    }
    if (((state.hazardDescription == undefined) || (state.hazardDescription == ""))) {
      error += "חסר שדה תיאור הממצא, "
      flag = false;
    }
    if (((state.repairActions == undefined) || (state.repairActions == ""))) {
      error += "חסר שדה פעולות תיקון ומניעה , "
      flag = false;
    }
    if (((state.repair == undefined) || (state.repair == ""))) {
      error += "חסר שדה תיקון וסילוק, "
      flag = false;
    }
    if (((state.executionSchedule == undefined) || (state.executionSchedule == ""))) {
      error += "חסר שדה לו''ז לביצוע, "
      flag = false;
    }
    if (((state.repairControl == undefined) || (state.repairControl == ""))) {
      error += "חסר שדה בקרת תיקון הממצא, "
      flag = false;
    }
    if (((state.status == undefined) || (state.status == ""))) {
      error += "חסר שדה סטטוס, "
      flag = false;
    }
    if (((state.gdod == undefined) || (state.gdod == ""))) {
      error += "חסר שדה גדוד, "
      flag = false;
    }
  
    if (flag == true) {
      SubmitData();
      toast.success("הטופס עודכן בהצלחה");
      history.goBack()
    }
    else {
      toast.error(error)
    }
  }


  async function SubmitData() {
    let tempData;
    let gd = {...state};
    gd.gdod = user.user.gdod;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/hazardsMonitoring",
        gd
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = gd;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/hazardsMonitoring/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }


    // let result = await axios.post(
    //   "http://localhost:8000/api/hazardsMonitoring",
    //   state
    // );
    // tempData = result.data;
  }

  function init() {
    if (match.params.id != "0") {
      loadDatas();
    }
    loadGdods();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Card>
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h3"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
          טופס מעקב סקר מפגעים
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מספר אישי
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="personalNumber"
                  value={state.personalNumber}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                דרגה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="rank"
                  value={state.rank}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                שם מלא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="fullName"
                  value={state.fullName}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תאריך
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="date"
                  value={state.date}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                נתוני הסקר
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="surveyDetails"
                  value={state.surveyDetails}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                חתימה דיגיטלית
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="digitalSignature"
                  value={state.digitalSignature}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{ borderTop: "1px solid darkGray" }} />

          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מס"ד
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="msd"
                  value={state.msd}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מיקום
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="location"
                  value={state.location}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סוג המפגע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="hazardType"
                  value={state.hazardType}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תיאור הממצא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="hazardDescription"
                  value={state.hazardDescription}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                פעולות תיקון / מניעה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repairActions"
                  value={state.repairActions}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סילוק / תיקון
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repair"
                  value={state.repair}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                לו"ז לביצוע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="executionSchedule"
                  value={state.executionSchedule}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                בקרת ביצוע הסרה / תיקון הממצא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repairControl"
                  value={state.repairControl}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סטטוס
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="status"
                  value={state.status}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  גדוד
                </div>
                <FormGroup className="mb-3" dir="rtl">
                <Input
                  placeholder="גדוד"
                  name="gdod"
                  type="select"
                  value={user.user.gdod}
                  onChange={handleChange}
                  disabled="disabled"
                >
                  <option value={""}>גדוד</option>
                  {gdods.map((gdod, index) => (
                    <option value={gdod._id}>{gdod.name}</option>
                  ))}
                </Input>
              </FormGroup>
              </Col>
            
          </Row>
          <hr style={{ borderTop: "1px solid darkGray" }} />
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <Button
                type="primary"
                className="btn btn-info"
                style={{ width: "100%" }}
                onClick={() => clickSubmit()}
              >
                הוסף נתונים
              </Button>
            </Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};
export default withRouter(HazardsMonitoringForm);
