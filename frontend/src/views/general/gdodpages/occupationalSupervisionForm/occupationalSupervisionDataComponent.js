import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
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

const OccupationalSupervisionDataComponent = ({ match }) => {
  const user = isAuthenticated();

  const [data, setData] = useState([]);
  const [document, setDocument] = useState([]);
  const [gdods, setGdods] = useState([]);

  function handleChange(evt) {
    const value = evt.target.value;
    if(evt.target.name != "personalNumber") {
      setData({ ...data, [evt.target.name]: value });
    }
    else {
      pullDetails(evt.target.value)
    }
  }

  async function pullDetails(pn) {
    if (pn != '') {
      let response = await axios.get(`http://localhost:8000/api/occupationalSupervision/byPn/${pn}`)
      if (response.data.length > 0) {
        setData(response.data[0])
      }
      else {
        setData({...data, personalNumber: pn})
      }
    } else {
      setData({...data, personalNumber: pn}) }
  }

  const clickSubmit = (event) => {
    if (CheckFormData()) {
      SubmitData();
      toast.success("הטופס עודכן בהצלחה");
      history.goBack();
    } else {
      toast.error("שגיאה בטופס");
    }
  };

  const loadDatas = () => {
    axios
      .get(
        `http://localhost:8000/api/occupationalSupervision/${match.params.id}`
      )
      .then((response) => {
        let tempdatas = response.data;
        setData(tempdatas);
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

  function CheckFormData() {
    let flag = true;
    let error = "";

    // if (((mahzordata.name == undefined) || (mahzordata.name == "")) || ((mahzordata.startdate == undefined) || (mahzordata.startdate == "")) || ((mahzordata.enddate == undefined) || (mahzordata.enddate == ""))) {
    //   error += "פרטים כלליים שגויים"
    //   flag = false;
    // }
    return flag;
  }

  const UploadFile = async (id) => {
    const formData = new FormData();
    const collec = "occupationalSupervision";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log(singleFile);
  };

  async function SubmitData() {
    // console.log("post")
    let tempOccupationalSupervisionData;
    let gd = {...data};
    gd.gdod = user.user.gdod;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/occupationalSupervision",
        gd
      );
      tempOccupationalSupervisionData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = gd;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/occupationalSupervision/${match.params.id}`,
        tempWithDeleteId
      );
      tempOccupationalSupervisionData = result.data;
    }
    if(singleFile!=="")
    await UploadFile(tempOccupationalSupervisionData._id);
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

  const [singleFile, setSingleFile] = useState("");
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  return (
    <Card>
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h3"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
          טופס פיקוח תעסוקתי
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
                  value={data.personalNumber}
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
                  value={data.id}
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
                  value={data.fullName}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                דרגה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="rank"
                  value={data.rank}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תפקיד/מקצוע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="profession"
                  value={data.profession}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                גורם מזיק
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="harmfulCause"
                  value={data.harmfulCause}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                חקיקה ופקודות הצבא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="legislationAndMilitaryOrders"
                  value={data.legislationAndMilitaryOrders}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תדירות הבדיקות
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="frequencyOfTests"
                  value={data.frequencyOfTests}
                  onChange={handleChange}
                >
                  <option value="">בחר תדירות</option>
                  <option value="יומיות">יומיות</option>
                  <option value="שבועיות">שבועיות</option>
                  <option value="חודשיות">חודשיות</option>
                  <option value="שנתיות">שנתיות</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תאריך ביצוע אחרון
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="lastExecutionDate"
                  value={data.lastExecutionDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תאריך בדיקה הבאה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="nextTestDate"
                  value={data.nextTestDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                כשיר/לא כשיר
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="fit"
                  value={data.fit}
                  onChange={handleChange}
                >
                  <option value="">בחר סטטוס</option>
                  <option value="כשיר">כשיר</option>
                  <option value="לא כשיר">לא כשיר</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                צירוף מסמך
              </div>
              <Input
                type="file"
                name="documentUpload"
                value={document.documentUpload}
                onChange={(e) => SingleFileChange(e)}
              ></Input>
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
export default withRouter(OccupationalSupervisionDataComponent);
