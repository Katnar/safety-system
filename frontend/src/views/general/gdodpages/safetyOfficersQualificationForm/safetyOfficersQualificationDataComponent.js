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

const SafetyOfficersQualificationDataComponent = ({ match }) => {
  //mahzor
  const [qualification, setQualification] = useState({});
  //mahzor

  function handleChange(evt) {
    const value = evt.target.value;
    setQualification({ ...qualification, [evt.target.name]: value });
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
    let tempCertificationData;
    let result = await axios.post(
      "http://localhost:8000/api/safetyOfficersQualification",
      qualification
    );
    tempCertificationData = result.data;
  }

  function init() {}

  useEffect(() => {
    init();
  }, []);

  return (
    <Card>
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h4"
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
                  value={qualification.personalNumber}
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
                  value={qualification.id}
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
                  value={qualification.fullName}
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
                  value={qualification.certificateIssuingDate}
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
                  value={qualification.numberOfSeminarDays}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <Button type="primary" onClick={() => clickSubmit()}>
                הוסף נתונים
              </Button>
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};
export default withRouter(SafetyOfficersQualificationDataComponent);
