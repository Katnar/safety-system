import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
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

// import editpic from "assets/img/edit.png";
// import deletepic from "assets/img/delete.png";
// import SettingModal from "../../../../components/general/modal/SettingModal";
import { isAuthenticated } from "auth";

const CertificationManagementDataComponent = ({match}) => {
  //mahzor
  const [data, setData] = useState({});
  const [gdods, setGdods] = useState([]);

  const user = isAuthenticated();

  // const columns = useMemo(() => COLUMNS, []);

  async function init() { 
    let user1 = await isAuthenticated();
    console.log(user1)
    // if (match.params.id != "0") {
    //   loadDatas();
    // }
    // if (user.user != undefined) {
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
    // }
    // getDetails();
  }

  const getGdods = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/certificationsManagement`)
        .then((response) => {
          let tempData = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].gdod == user.user.gdod) {
              tempData.push(response.data[i]);
            }
          }
          setData(tempData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch { }
  };

  const getGdodsByHativa = async () => {
    let tempgdodbyhativa;
    await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: user.user.hativa })
      .then((response) => {
        tempgdodbyhativa = response.data;
        setGdods(tempgdodbyhativa, () => console.log(gdods))
        console.log(gdods)
        // console.log(Data)
      })
      .catch((error) => {
        console.log(error);
      });

    // await axios.get(`http://localhost:8000/api/certificationsManagement`)
    //   .then((response) => {
    //     console.log(response.data)
    //     let tempData = [];
    //     for (let i = 0; i < response.data.length; i++) {
    //       for (let j = 0; j < tempgdodbyhativa.length; j++) {
    //         if (response.data[i].gdod == tempgdodbyhativa[j]._id) {
    //           tempData.push(response.data[i]);
    //         }
    //       }
    //     }
    //     setData(tempData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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

    // await axios.get(`http://localhost:8000/api/certificationsManagement`)
    //   .then((response) => {
    //     // console.log(response.data)
    //     let tempData = [];
    //     for (let i = 0; i < response.data.length; i++) {
    //       for (let j = 0; j < tempgdodsbyogda.length; j++) {
    //         if (response.data[i].gdod == tempgdodsbyogda[j]._id) {
    //           tempData.push(response.data[i]);
    //         }
    //       }
    //     }
    //     setData(tempData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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

      // await axios.get(`http://localhost:8000/api/certificationsManagement`)
      // .then((response) => {
      //   // console.log(response.data)
      //   let tempData = [];
      //   for (let i = 0; i < response.data.length; i++) {
      //     for (let j = 0; j < tempgdodsbypikod.length; j++) {
      //       if (response.data[i].gdod == tempgdodsbypikod[j]._id) {
      //         tempData.push(response.data[i]);
      //       }
      //     }
      //   }
      //   setData(tempData);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setData({ ...data, [evt.target.name]: value });
  }

  // const loadDatas = () => {
  //   axios
  //     .get(
  //       `http://localhost:8000/api/certificationsManagement/${match.params.id}`
  //     )
  //     .then((response) => {
  //       let tempdatas = response.data;
  //       setData(tempdatas);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const getDetails = async () => {
  //   try {
  //     await axios
  //       .get(`http://localhost:8000/api/certificationsManagement`)
  //       .then((response) => {
  //         let tempData = [];
  //         for (let i = 0; i < response.data.length; i++) {
  //           console.log(props);
  //           if (response.data[i].gdod == user.user.gdod) {
  //             tempData.push(response.data[i]);
  //           }
  //         }
  //         setData(tempData);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch {}
  // };

  // const loadGdods = () => {
  //   axios
  //     .get("http://localhost:8000/api/gdod")
  //     .then((response) => {
  //       setGdods(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const clickSubmit = async (event) => {
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

  const UploadFile = async (id) => {
    const formData = new FormData();
    const collec = "certificationsManagement";
    formData.append("file", singleFile);
    await singleFileUpload(formData, collec, id);
    console.log(singleFile);
  };

  async function SubmitData() {
    let tempData;
    if (match.params.id == "0") {
      //new mahzor
      let result = await axios.post(
        "http://localhost:8000/api/certificationsManagement",
        data
      );
      tempData = result.data;
    } else {
      // update mahzor
      let tempWithDeleteId = data;
      delete tempWithDeleteId._id;
      let result = await axios.put(
        `http://localhost:8000/api/certificationsManagement/${match.params.id}`,
        tempWithDeleteId
      );
      tempData = result.data;
    }
    if(singleFile!=="")
    await UploadFile(tempData._id);

    // console.log("post")
    // let result = await axios.post(
    //   "http://localhost:8000/api/certificationsManagement",
    //   data
    // );
    // tempData = result.data;
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
          טופס ניהול הסמכות
        </CardTitle>
      
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
                  value={data.personalNumber}
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
                  value={data.id}
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
                  value={data.fullName}
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
                  value={data.rank}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                מקצוע
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="profession"
                  value={data.profession}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                הסמכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="text"
                  name="certification"
                  value={data.certification}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                תוקף הסמכה
              </div>
              <FormGroup dir="rtl">
                <Input
                  type="date"
                  name="certificationValidity"
                  value={data.certificationValidity}
                  onChange={handleChange}
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
                  value={data.gdod}
                  onChange={handleChange}
                >
                  <option value={""}>גדוד</option>
                  {gdods.map((gdod, index) => (
                    <option value={gdod._id} key={index}>{gdod.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                צירוף מסמך
              </div>
              <Input
                type="file"
                name="documentUpload"
                value={data.documentUpload}
                onChange={(e) => SingleFileChange(e)}
              ></Input>
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
export default withRouter(CertificationManagementDataComponent);
 