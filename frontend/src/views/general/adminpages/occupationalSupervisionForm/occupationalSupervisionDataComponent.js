import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

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

const OccupationalSupervisionDataComponent = ({ match }) => {
  const [data, setData] = useState({});

  function handleChange(evt) {
    const value = evt.target.value;
    setData({ ...data, [evt.target.name]: value });
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

  function CheckFormData() {
    let flag = true;
    let error = "";

    // if (((mahzordata.name == undefined) || (mahzordata.name == "")) || ((mahzordata.startdate == undefined) || (mahzordata.startdate == "")) || ((mahzordata.enddate == undefined) || (mahzordata.enddate == ""))) {
    //   error += "פרטים כלליים שגויים"
    //   flag = false;
    // }
    return flag;
  }

  async function SubmitData() {
    // console.log("post")
    let tempOccupationalSupervisionData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/occupationalSupervision",
        data
      );
      tempOccupationalSupervisionData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = data;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/occupationalSupervision/${match.params.id}`,
        tempWithDeleteId
      );
      tempOccupationalSupervisionData = result.data;
    }
  }

  function init() {}

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
                צירוף מסמכים סרוקים
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="documentUpload"
                  value={data.documentUpload}
                  onChange={handleChange}
                ></Input>
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
