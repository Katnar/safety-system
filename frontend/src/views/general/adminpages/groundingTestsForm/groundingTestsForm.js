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

const GroundingTestsForm = ({ match }) => {
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
        `http://localhost:8000/api/groundingTests/${match.params.id}`
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
        "http://localhost:8000/api/groundingTests",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/groundingTests/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

    // let result = await axios.post(
    //   "http://localhost:8000/api/groundingTests",
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
          tag="h4"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
           טופס בדיקת הארקות חשמל ומבנים
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
              שם מבנה נבדק
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="buildingName"
                  value={state.buildingName}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
           תאריך בדיקה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="testDate"
                  value={state.testDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
            תאריך בדיקה הבא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="nextTestDate"
                  value={state.nextTestDate}
                  onChange={handleChange}
                >
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
             צירוף מסמכים
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="fit"
                  value={state.fit}
                  onChange={handleChange}
                >
                    <option value="כשיר">כשיר</option>
                  <option value="לא כשיר">לא כשיר</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
               מיקום הציוד
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="documentUpload"
                  value={state.documentUpload}
                  onChange={handleChange}
                >
                </Input>
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
export default withRouter(GroundingTestsForm);
