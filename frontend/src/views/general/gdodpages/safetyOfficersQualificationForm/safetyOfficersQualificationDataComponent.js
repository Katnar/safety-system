import React, { useState, useEffect, useRef } from "react";
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

const SafetyOfficersQualificationDataComponent = ({ match }) => {

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
        .get(
          `http://localhost:8000/api/safetyOfficersQualification/${match.params.id}`
        )
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
      if (((state.id == undefined) || (state.id == ""))) {
        error += "חסר שדה תעודת זהות, "
        flag = false;
      }
      if (((state.fullName == undefined) || (state.fullName == ""))) {
        error += "חסר שדה שם מלא, "
        flag = false;
      }
      if (((state.certificateIssuingDate == undefined) || (state.certificateIssuingDate == ""))) {
        error += "חסר שדה תאריך הוצאת תעודה, "
        flag = false;
      }
      if (((state.numberOfSeminarDays == undefined) || (state.numberOfSeminarDays == ""))) {
        error += "חסר שדה מספר ימי עיון שבוצעו, "
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
        "http://localhost:8000/api/safetyOfficersQualification",
        gd
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = gd;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/safetyOfficersQualification/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

      // let result = await axios.post(
      //   "http://localhost:8000/api/safetyOfficersQualification",
      //   state
      // );
      // tempData = result.data;
  }

  function init() {
    if(match.params.id != "0") {
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
          טופס כשירות ממונים על הבטיחות
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
                תעודת זהות
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="number"
                  name="id"
                  value={state.id}
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
                תאריך הוצאת תעודה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="certificateIssuingDate"
                  value={state.certificateIssuingDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מספר ימי עיון שבוצעו
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="number"
                  name="numberOfSeminarDays"
                  value={state.numberOfSeminarDays}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
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
            <hr style={{borderTop: "1px solid darkGray"}}/>
            <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <Button type="primary" className="btn btn-info" style={{width: "100%"}} onClick={() => clickSubmit()}>
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
export default withRouter(SafetyOfficersQualificationDataComponent);
