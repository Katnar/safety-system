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

import { isAuthenticated } from "auth";

const HazardsMonitoringForm = ({ match }) => {
  const [state, setState] = useState({});
  const [document, setDocument] = useState({});
  const [gdods, setGdods] = useState([]);

  const user = isAuthenticated();

  async function init() {
    if (match.params.id != "0") {
      loadDatas();
    }
    let user1 = await isAuthenticated();
    console.log(user1);
    if (user1.user.role == "1") {
      getGdods();
    } else if (user1.user.role == "2") {
      getGdodsByHativa();
    } else if (user1.user.role == "3") {
      getGdodsByOgda();
    } else if (user1.user.role == "4") {
      getGdodsByPikod();
    }
  }

  const getGdods = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/hazardsMonitoring`)
        .then((response) => {
          let tempData = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].gdod == user.user.gdod) {
              tempData.push(response.data[i]);
            }
          }
          setState(tempData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {}
  };

  const getGdodsByHativa = async () => {
    let tempgdodbyhativa;
    await axios
      .post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, {
        hativa: user.user.hativa,
      })
      .then((response) => {
        tempgdodbyhativa = response.data;
        setGdods(tempgdodbyhativa, () => console.log(gdods));
        console.log(gdods);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGdodsByOgda = async () => {
    let tempgdodsbyogda = [];
    console.log(user.user.ogda);
    await axios
      .post(`http://localhost:8000/api/hativa/hativasbyogdaid`, {
        ogda: user.user.ogda,
      })
      .then(async (response1) => {
        for (let i = 0; i < response1.data.length; i++) {
          await axios
            .post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, {
              hativa: response1.data[i]._id,
            })
            .then((response2) => {
              for (let j = 0; j < response2.data.length; j++) {
                tempgdodsbyogda.push(response2.data[j]);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        console.log(tempgdodsbyogda);
        setGdods(tempgdodsbyogda);
        console.log(gdods);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGdodsByPikod = async () => {
    let tempgdodsbypikod = [];

    await axios
      .post(`http://localhost:8000/api/ogda/ogdasbypikodid`, {
        pikod: user.user.pikod,
      })
      .then(async (response1) => {
        for (let i = 0; i < response1.data.length; i++) {
          await axios
            .post(`http://localhost:8000/api/hativa/hativasbyogdaid`, {
              ogda: response1.data[i]._id,
            })
            .then(async (response2) => {
              for (let j = 0; j < response2.data.length; j++) {
                await axios
                  .post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, {
                    hativa: response2.data[j]._id,
                  })
                  .then(async (response3) => {
                    for (let k = 0; k < response3.data.length; k++) {
                      tempgdodsbypikod.push(response3.data[k]);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        setGdods(tempgdodsbypikod);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      .get(`http://localhost:8000/api/hazardsMonitoring/${match.params.id}`)
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
    return flag;
  }

  async function SubmitData() {
    let tempData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/hazardsMonitoring",
        state
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = state;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/hazardsMonitoring/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
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
          טופס מעקב סקר מפגעים
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
                נתוני הסקר
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="surveyDetails"
                  value={state.surveyDetails}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                חתימה דיגיטלית
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="digitalSignature"
                  value={state.digitalSignature}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          {/* <br /> */}
          <hr style={{ borderTop: "1px solid darkGray" }} />
          {/* <br/> */}
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מס"ד
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="msd"
                  value={state.msd}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מיקום
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="location"
                  value={state.location}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סוג המפגע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="hazardType"
                  value={state.hazardType}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תיאור הממצא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="hazardDescription"
                  value={state.hazardDescription}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                פעולות תיקון / מניעה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repairActions"
                  value={state.repairActions}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                סילוק / תיקון
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repair"
                  value={state.repair}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                לו"ז לביצוע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="executionSchedule"
                  value={state.executionSchedule}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                בקרת ביצוע הסרה / תיקון הממצא
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="repairControl"
                  value={state.repairControl}
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
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                גדוד
              </div>
              <FormGroup className="mb-3" dir="rtl">
                <Input
                  placeholder="גדוד"
                  name="gdod"
                  type="select"
                  value={state.gdod}
                  onChange={handleChange}
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
export default withRouter(HazardsMonitoringForm);
