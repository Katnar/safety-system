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
import { isAuthenticated } from "auth";
import Select from 'components/general/Select/AnimatedSelect'

const SafetyOfficersQualificationDataComponent = ({ match }) => {
  const user = isAuthenticated();

  const [state, setState] = useState({});
  //units
  const [gdods, setGdods] = useState([]);
  const [hativas, setHativas] = useState([]);
  const [ogdas, setOgdas] = useState([]);
  const [pikods, setPikods] = useState([]);

  async function init() {
    if (match.params.id != "0") {
      loadDatas();
    }
    loadPikods();
  }

  const loadPikods = async () => {
    await axios.get("http://localhost:8000/api/pikod",)
      .then(response => {
        setPikods(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadOgdas = async (pikodid) => {
    let temppikodogdas = [];
    await axios.post("http://localhost:8000/api/ogda/ogdasbypikodid", { pikod: pikodid })
      .then(response => {
        for (let j = 0; j < response.data.length; j++)
          temppikodogdas.push(response.data[j])
      })
      .catch((error) => {
        console.log(error);
      })
    setOgdas(temppikodogdas);
  }

  const loadHativas = async (ogdaid) => {
    let tempogdahativas = [];
    await axios.post("http://localhost:8000/api/hativa/hativasbyogdaid", { ogda: ogdaid })
      .then(response => {
        for (let j = 0; j < response.data.length; j++)
          tempogdahativas.push(response.data[j])
      })
      .catch((error) => {
        console.log(error);
      })
    setHativas(tempogdahativas);
  }

  const loadGdods = async (hativaid) => {
    let temphativasgdods = [];
    await axios.post("http://localhost:8000/api/gdod/gdodsbyhativaid", { hativa: hativaid })
      .then(response => {
        for (let j = 0; j < response.data.length; j++)
          temphativasgdods.push(response.data[j])
      })
      .catch((error) => {
        console.log(error);
      })
    setGdods(temphativasgdods);
  }

  const loadDatas = () => {
    axios
      .get(
        `http://localhost:8000/api/safetyOfficersQualification/${match.params.id}`
      )
      .then((response) => {
        let tempdatas = response.data;
        tempdatas.certificateIssuingDate=tempdatas.certificateIssuingDate.slice(0, 10)
        setState(tempdatas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  function handleChange2(selectedOption, name) {
    if (!(selectedOption.value == "בחר"))
      setState({ ...state, [name]: selectedOption.value });
    else {
      let tempstate = { ...state };
      delete tempstate[name];
      setState(tempstate);
    }
  }

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
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/safetyOfficersQualification",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/safetyOfficersQualification/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }
  }

  useEffect(() => {
    setOgdas([]);
    loadOgdas(state.pikod);
  }, [state.pikod]);

  useEffect(() => {
    setHativas([]);
    loadHativas(state.ogda);
  }, [state.ogda]);

  useEffect(() => {
    setGdods([]);
    loadGdods(state.hativa);
  }, [state.hativa]);

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
          </Row>
          <Row style={{ paddingTop: '10px' }}>
            {((user.user.role == "0")) ?
              <>
                {(!(state.ogda)) ?
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>פיקוד</h6>
                    <Select data={pikods} handleChange2={handleChange2} name={'pikod'} val={state.pikod ? state.pikod : undefined} />
                  </Col> :
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>פיקוד</h6>
                    <Select data={pikods} handleChange2={handleChange2} name={'pikod'} val={state.pikod ? state.pikod : undefined} isDisabled={true} />
                  </Col>}
              </> : null}

            {((user.user.role == "0") || (user.user.role == "4")) ?
              <>
                {((state.pikod) && !(state.hativa)) ?
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>אוגדה</h6>
                    <Select data={ogdas} handleChange2={handleChange2} name={'ogda'} val={state.ogda ? state.ogda : undefined} />
                  </Col> :
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>אוגדה</h6>
                    <Select data={ogdas} handleChange2={handleChange2} name={'ogda'} val={state.ogda ? state.ogda : undefined} isDisabled={true} />
                  </Col>}
              </> : null}

            {((user.user.role == "0") || (user.user.role == "4") || (user.user.role == "3")) ?
              <>
                {((state.ogda) && !(state.gdod)) ?
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>חטיבה</h6>
                    <Select data={hativas} handleChange2={handleChange2} name={'hativa'} val={state.hativa ? state.hativa : undefined} />
                  </Col> :
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>חטיבה</h6>
                    <Select data={hativas} handleChange2={handleChange2} name={'hativa'} val={state.hativa ? state.hativa : undefined} isDisabled={true} />
                  </Col>}
              </> : null}

            {((user.user.role == "0") || (user.user.role == "4") || (user.user.role == "3") || (user.user.role == "2")) ?
              <>
                {((state.hativa)) ?
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>גדוד</h6>
                    <Select data={gdods} handleChange2={handleChange2} name={'gdod'} val={state.gdod ? state.gdod : undefined} />
                  </Col> :
                  <Col style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                    <h6>גדוד</h6>
                    <Select data={gdods} handleChange2={handleChange2} name={'gdod'} val={state.gdod ? state.gdod : undefined} isDisabled={true} />
                  </Col>}
              </> : null}
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
export default withRouter(SafetyOfficersQualificationDataComponent);
