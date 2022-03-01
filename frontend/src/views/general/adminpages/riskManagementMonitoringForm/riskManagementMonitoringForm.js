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

const RiskManagementMonitoringForm = ({ match }) => {
  //mahzor
  const [state, setState] = useState({});
  //mahzor

  function handleChange(evt) {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  const loadDatas = () => {
    axios
      .get(
        `http://localhost:8000/api/riskManagementMonitoring/${match.params.id}`
      )
      .then((response) => {
        let tempdatas = response.data;
        setState(tempdatas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    let tempData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/riskManagementMonitoring",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/riskManagementMonitoring/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

    // let result = await axios.post(
    //   "http://localhost:8000/api/riskManagementMonitoring",
    //   state
    // );
    // tempData = result.data;
  }

  function init() {
    if (match.params.id != "0") {
      loadDatas();
    }
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
            טופס מעקב ניהול סיכונים
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                שלב התהליך
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="processStage"
                  value={state.processStage}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                גורם הסיכון
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="riskFactor"
                  value={state.riskFactor}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                גורם (מתוך M5) סיבות ותרחישים
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="factorMfive"
                  value={state.factorMfive}
                  onChange={handleChange}
                >
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                הערכת סיכונים ראשונית (מתוך ח,ס,ה)
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="initialRiskAssessment"
                  value={state.initialRiskAssessment}
                  onChange={handleChange}
                >
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                פעולות מניעה / אמצעי בקרה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="preventiveActions"
                  value={state.preventiveActions}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
              הערכת סיכונים חוזרת (מתוך ח,ס,ה)
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="secondRiskAssessment"
                  value={state.secondRiskAssessment}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
               אחריות
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="responsibility"
                  value={state.responsibility}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
               תג"ב
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="tgb"
                  value={state.tgb}
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
export default withRouter(RiskManagementMonitoringForm);
