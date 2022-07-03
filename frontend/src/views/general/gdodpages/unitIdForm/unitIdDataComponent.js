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


const UnitIdDataComponent = ({ match }) => {

  const user = isAuthenticated();
  //mahzor
  const [unit, setUnit] = useState([]);
  const [gdods, setGdods] = useState([]);
  //mahzor

  function handleChange(evt) {
    const value = evt.target.value;
    setUnit({ ...unit, [evt.target.name]: value });
  }

  const loadunits = () => {
    axios
      .get(`http://localhost:8000/api/unitId/${match.params.id}`)
      .then((response) => {
        let tempunits = response.data;
        setUnit(tempunits);
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

  const UploadFile = async (id) => {
    const formData = new FormData();
    const collec = "unitId";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log("First File:"+singleFile);
  };

  
  const UploadFile2 = async (id) => {
    const formData = new FormData();
    const collec = "unitId";
    formData.append("file", singleFile2);
    await singleFileUpload(formData, collec, "2_"+id);
    console.log("Second File:"+singleFile2);
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
    let tempUnitData;
    let gd = {...unit};
    gd.gdod = user.user.gdod;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post("http://localhost:8000/api/unitId", gd);
      tempUnitData = result.data;
    } else {
      // update mahzor
      let tempUnitWithDeleteId = gd;
      delete tempUnitWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/unitId/${match.params.id}`,
        tempUnitWithDeleteId
      );
      tempUnitData = result.data;
    }

    await UploadFile(tempUnitData._id);
    await UploadFile2(tempUnitData._id);

    // console.log("post")
    // let result = await axios.post("http://localhost:8000/api/unitId", unit);
    // tempUnitData = result.data;
  }

  function init() {

    if (match.params.id != "0") {
      loadunits();
    }
    loadGdods();
  }

  useEffect(() => {
    init();
    console.log(user.user.gdod);
  }, []);

  const [singleFile, setSingleFile] = useState("");
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };
  
  const [singleFile2, setSingleFile2] = useState("");
  const SingleFileChange2 = (e) => {
    setSingleFile2(e.target.files[0]);
  };


  return (
    <Card>
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h3"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
          טופס תעודת זהות יחידה
        </CardTitle>
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                שם יחידה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="name"
                  value={unit.name}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מיקום היחידה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="location"
                  value={unit.location}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מבנה היחידה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="unitStructure"
                  value={unit.unitStructure}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                פירוט האמצעים ביחידה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="unitMeans"
                  value={unit.unitMeans}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                עיסוק מרכזי
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="mainOccupation"
                  value={unit.mainOccupation}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                עץ מבנה יחידה
              </div>
              <Input
                  type="file"
                  name="unitStructureTree"
                  value={unit.unitStructureTree}
                  onChange={(e) => SingleFileChange(e)}
                ></Input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                עץ מבנה מחלקת טנ"א
              </div>
              <Input
                  type="file"
                  name="teneStructureTree"
                  value={unit.teneStructureTree}
                  onChange={(e) => SingleFileChange2(e)}
                ></Input>
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
export default withRouter(UnitIdDataComponent);
