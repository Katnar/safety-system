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
import { isAuthenticated } from "auth";
import Select from 'components/general/Select/AnimatedSelect'

const OccupationalSupervisionDataComponent = ({ match }) => {
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
    else{
      Fixstate()
    }
    loadPikods();
  }

  const Fixstate = () => {
    if (user.user.role == "0") {

    }
    if (user.user.role == "1") {
      setState({gdod:user.user.gdod})
    }
    if (user.user.role == "2") {
      setState({hativa:user.user.hativa})
    }
    if (user.user.role == "3") {
      setState({ogda:user.user.ogda})
    }
    if (user.user.role == "4") {
      setState({pikod:user.user.pikod})
    }
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
        `http://localhost:8000/api/occupationalSupervision/${match.params.id}`
      )
      .then((response) => {
        let tempdatas = response.data;
        tempdatas.lastExecutionDate = tempdatas.lastExecutionDate.slice(0, 10)
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
    var error = [];

    if (((state.personalNumber == undefined) || (state.personalNumber == ""))) {
      error.push( "חסר שדה מספר אישי")
      flag = false;
    }
    else 
        if (isNaN(state.personalNumber)) {
          error.push("מס' אישי לא תקין")
          flag = false;
        }
    if (((state.id == undefined) || (state.id == ""))) {
      error.push("חסר שדה תעודת זהות")
      flag = false;
    }
    else 
    if (isNaN(state.id)) {
      error.push("ת.ז. לא תקינה")
      flag = false;
    }
    if (((state.fullName == undefined) || (state.fullName == ""))) {
      error.push("חסר שדה שם מלא")
      flag = false;
    }
    if (((state.rank == undefined) || (state.rank == ""))) {
      error.push("חסר שדה דרגה")
      flag = false;
    }
    if (((state.profession == undefined) || (state.profession == ""))) {
      error.push("חסר שדה תפקיד/מקצוע")
      flag = false;
    }
    if (((state.harmfulCause == undefined) || (state.harmfulCause == ""))) {
      error.push("חסר שדה גורם מזיק")
      flag = false;
    }
    if (((state.legislationAndMilitaryOrders == undefined) || (state.legislationAndMilitaryOrders == ""))) {
      error.push("חסר שדה חקיקה ופקודות הצבא")
      flag = false;
    }
    if (((state.frequencyOfTests == undefined) || (state.frequencyOfTests == ""))) {
      error.push("חסר שדה תדירות הבדיקות")
      flag = false;
    }
    if (((state.lastExecutionDate == undefined) || (state.lastExecutionDate == ""))) {
      error.push("חסר שדה תאריך ביצוע אחרון")
      flag = false;
    }
    if (((state.nextTestDate == undefined) || (state.nextTestDate == ""))) {
      error.push("חסר שדה תאריך בדיקה הבא")
      flag = false;
    }
    if (((state.fit == undefined) || (state.fit == ""))) {
      error.push("חסר שדה כשיר/לא כשיר")
      flag = false;
    }
    if (user.user.role == "1") {
      state.gdod = user.user.gdod
    }
    else if (((state.gdod == undefined) || (state.gdod == ""))) {
      error.push("חסר שדה גדוד ")
      flag = false;
    }
    if (singleFile == "") {
      error.push("נא להוסיף קובץ")
      flag = false;
    }

    if (flag == true) {
      SubmitData();
      toast.success("הטופס עודכן בהצלחה");
      history.goBack()
    }
    else {
      for (const e of error) {
        toast.error(e)
      }
    }
  }

  const UploadFile = async (id) => {
    const formData = new FormData();
    const collec = "occupationalSupervision";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log(singleFile);
  };

  async function SubmitData() {
    let tempData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/occupationalSupervision",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/occupationalSupervision/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

    await UploadFile(tempData._id);

    // let result = await axios.post(
    //   "http://localhost:8000/api/occupationalSupervision",
    //   state
    // );
    // tempData = result.data;
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
                תפקיד/מקצוע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="profession"
                  value={state.profession}
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
                  value={state.harmfulCause}
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
                  value={state.legislationAndMilitaryOrders}
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
                  value={state.frequencyOfTests}
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
                  value={state.lastExecutionDate}
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
                  value={state.nextTestDate}
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
                  value={state.fit}
                  onChange={handleChange}
                >
                  <option value="">בחר סטטוס</option>
                  <option value="כשיר">כשיר</option>
                  <option value="לא כשיר">לא כשיר</option>
                </Input>
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
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                צירוף מסמכים סרוקים
              </div>
              {/* <FormGroup dir="rtl"> */}
              <Input
                type="file"
                name="documentUpload"
                value={document.documentUpload}
                onChange={(e) => SingleFileChange(e)}
              ></Input>
              {/* </FormGroup> */}
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
