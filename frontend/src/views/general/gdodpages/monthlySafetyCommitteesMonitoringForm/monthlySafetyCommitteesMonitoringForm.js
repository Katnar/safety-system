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

const MonthlySafetyCommitteesMonitoringForm = ({ match }) => {
  const user = isAuthenticated();
  //mahzor
  const [state, setState] = useState([]);
  const [gdods, setGdods] = useState([]);
  //mahzor

  function handleChange(evt) {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  const loadDatas = () => {
    axios
      .get(
        `http://localhost:8000/api/monthlySafetyCommitteesMonitoring/${match.params.id}`
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

    if (((state.unit == undefined) || (state.unit == ""))) {
      error += "חסר שדה יחידה, "
      flag = false;
    }
    if (((state.date == undefined) || (state.date == ""))) {
      error += "חסר שדה תאריך, "
      flag = false;
    }
    if (((state.committeeExecuter == undefined) || (state.committeeExecuter == ""))) {
      error += "חסר שדה מבצע הוועדה, "
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

  const UploadFile = async (id) => {
    const formData = new FormData();
    const collec = "monthlySafetyCommitteesMonitoring";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log(singleFile);
  };


  async function SubmitData() {
    let tempData;
    let gd = {...state};
    gd.gdod = user.user.gdod;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/monthlySafetyCommitteesMonitoring",
        gd
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = gd;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/monthlySafetyCommitteesMonitoring/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

    await UploadFile(tempData._id);


    // let result = await axios.post(
    //   "http://localhost:8000/api/monthlySafetyCommitteesMonitoring",
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
          טופס מעקב וועדות בטיחות חודשיות
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
          יחידה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="unit"
                  value={state.unit}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
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
     מבצע הוועדה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="committeeExecuter"
                  value={state.committeeExecuter}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
            צירוף מסמכים סרוקים
              </div>
              {/* <FormGroup dir="rtl"> */}
                <Input
                  type="file"
                  name="documentUpload"
                  value={state.documentUpload}
                  onChange={(e) => SingleFileChange(e)}
                  ></Input>
              {/* </FormGroup> */}
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
export default withRouter(MonthlySafetyCommitteesMonitoringForm);
