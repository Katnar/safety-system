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

const TrainingProgramForm = ({ match }) => {
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
      .get(`http://localhost:8000/api/trainingProgram/${match.params.id}`)
      .then((response) => {
        let tempdatas = response.data;
        tempdatas.trainingDate=tempdatas.trainingDate.slice(0, 10)
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

    if (((state.trainingDate == undefined) || (state.trainingDate == ""))) {
      error += "חסר שדה תאריך ההדרכה, "
      flag = false;
    }
    if (((state.trainingSubject == undefined) || (state.trainingSubject == ""))) {
      error += "חסר שדה נושא ההדרכה, "
      flag = false;
    }
    if (((state.requireTest == undefined) || (state.requireTest == ""))) {
      error += "חסר שדה דורש מבחן, "
      flag = false;
    }
    if (((state.requiredWorkersList == undefined) || (state.requiredWorkersList == ""))) {
      error += "חסר שדה רשימת עובדים, "
      flag = false;
    }
    if (((state.trainingStatus == undefined) || (state.trainingStatus == ""))) {
      error += "חסר שדה סטטוס הדרכה, "
      flag = false;
    }
    if (((state.requiredWorkersStatus == undefined) || (state.requiredWorkersStatus == ""))) {
      error += "חסר שדה סטטוס הגעת עובד, "
      flag = false;
    }
    if (user.user.role == "1"){
      state.gdod = user.user.gdod
    }
    else if (((state.gdod == undefined) || (state.gdod == ""))) {
      error += "חסר שדה גדוד , "
      flag = false;
    }

    if (singleFile==""){
      error += "נא להוסיף קובץ"
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
    const collec = "trainingProgram";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log(singleFile);
  };

  async function SubmitData() {
    let tempData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/trainingProgram",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/trainingProgram/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }

    await UploadFile(tempData._id);

    // let result = await axios.post(
    //   "http://localhost:8000/api/trainingProgram",
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
          טופס תכנית הדרכות
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תאריך ההדרכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="trainingDate"
                  value={state.trainingDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                נושא ההדרכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="trainingSubject"
                  value={state.trainingSubject}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                צירוף מצגת רלוונטית
              </div>
              {/* <FormGroup dir="rtl"> */}
              <Input
                type="file"
                name="presentationUpload"
                value={state.presentationUpload}
                onChange={(e) => SingleFileChange(e)}
              ></Input>
              {/* </FormGroup> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                דורש מבחן
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="requireTest"
                  value={state.requireTest}
                  onChange={handleChange}
                >
                  <option value="">בחר סטטוס</option>
                  <option value="כן">כן</option>
                  <option value="לא">לא</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                רשימת עובדים נדרשים בהדרכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="requiredWorkersList"
                  value={state.requiredWorkersList}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סטטוס הדרכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="trainingStatus"
                  value={state.trainingStatus}
                  onChange={handleChange}
                >
                  <option value="">בחר סטטוס</option>
                  <option value="מתוכנן">מתוכנן</option>
                  <option value="בוצע">בוצע</option>
                  <option value="בוטל">בוטל</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סטטוס הגעת עובד
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="select"
                  name="requiredWorkersStatus"
                  value={state.requiredWorkersStatus}
                  onChange={handleChange}
                >
                  <option value="">בחר סטטוס</option>
                  <option value="נוכח">נוכח</option>
                  <option value="לא נוכח">לא נוכח</option>
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
export default withRouter(TrainingProgramForm);
