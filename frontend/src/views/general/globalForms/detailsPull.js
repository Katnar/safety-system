import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { singleFileUpload } from "../../../data/api";

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
import SettingModal from "../../../components/general/modal/SettingModal";

import { isAuthenticated } from "auth";

const DetailsPull = ({ match }) => {
  const [state, setState] = useState({});
  const [details, setDetails] = useState({});
  const [gdods, setGdods] = useState([]);

  const user = isAuthenticated();

  async function init() {
    getGdods();
    // if (match.params.id != "0") {
    //   loadDatas();
    // }
    let user1 = await isAuthenticated();
    console.log(user1);
    console.log(state.personalNumber);
    if (user1.user.role == "1") {
      getGdods();
    }else
    if (user1.user.role == "2") {
      getGdodsByHativa();
    }else 
    if (user1.user.role == "3") {
      getGdodsByOgda();
    }else 
    if (user1.user.role == "4") {
      getGdodsByPikod();
    }
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  const getGdods = async () => {
      axios
        .get("http://localhost:8000/api/gdod")
        .then((response) => {
          setGdods(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const getGdodsByHativa = async () => {
    let tempgdodbyhativa;
    await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: user.user.hativa })
      .then((response) => {
        tempgdodbyhativa = response.data;
        setGdods(tempgdodbyhativa, () => console.log(gdods))
        console.log(gdods)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const getGdodsByOgda = async () => {
    let tempgdodsbyogda = [];
    console.log(user.user.ogda)
    await axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: user.user.ogda })
      .then(async (response1) => {
        for (let i = 0; i < response1.data.length; i++) {
          await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response1.data[i]._id })
            .then((response2) => {
              for (let j = 0; j < response2.data.length; j++) {
                tempgdodsbyogda.push(response2.data[j])               
              }
            })
            .catch((error) => {
              console.log(error);
            });
          }
          console.log(tempgdodsbyogda)
          setGdods(tempgdodsbyogda);
          console.log(gdods)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGdodsByPikod = async () => {
    let tempgdodsbypikod = [];

    await axios.post(`http://localhost:8000/api/ogda/ogdasbypikodid`, { pikod: user.user.pikod })
      .then(async (response1) => {
        for (let i = 0; i < response1.data.length; i++) {
          await axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: response1.data[i]._id })
            .then(async (response2) => {
              for (let j = 0; j < response2.data.length; j++) {
                await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response2.data[j]._id })
                  .then(async (response3) => {
                    for (let k = 0; k < response3.data.length; k++) {
                      tempgdodsbypikod.push(response3.data[k])
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  })
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        setGdods(tempgdodsbypikod)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const clickPull = (event) => {
    let tempPn = state.personalNumber
    console.log(tempPn)
    axios
      .get(
        `http://localhost:8000/api/occupationalSupervision/byPn/${tempPn}`
      )
      .then((response) => {
        let tempdatas = response.data[0];
        if (tempdatas != null)
        {
          setDetails(tempdatas);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('error');
        console.log(state.personalNumber);
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
          טופס משיכת נתונים
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
                  value={details.id}
                  onChange={handleChange}
                  disabled="disabled"
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
                  value={details.fullName}
                  onChange={handleChange}
                  disabled="disabled"
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
                  value={details.rank}
                  onChange={handleChange}
                  disabled="disabled"
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
                  value={details.profession}
                  onChange={handleChange}
                  disabled="disabled"
                ></Input>
              </FormGroup>
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
                  value={details.gdod}
                  onChange={handleChange}
                  // disabled="disabled"
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
                className="btn btn-edit"
                style={{ width: "100%" }}
                onClick={() => clickPull()}
              >
                משוך נתונים
              </Button>
            </Col>
            <Col xs={12} md={4}><Button
                type="primary"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={() => clickSubmit()}
              >
                העלה נתונים
              </Button></Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};
export default withRouter(DetailsPull);
