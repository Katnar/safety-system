import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  Container,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import history from 'history.js'
import { toast } from "react-toastify";
import Select from 'components/general/Select/AnimatedSelect'
import logo from "assets/img/wideLogo.png";

export default function SignUpForm() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    personalnumber: "",
    password: "",
    role: "",
    gdod: "",
    hativa: "",
    ogda: "",
    pikod: "",

    errortype: "",
    error: false,
    successmsg: false,
    loading: false,
    redirectToReferrer: false,
    //
    site_permission:'צפייה ועריכה',
  });

  const [gdods, setGdods] = useState([]);
  const [hativas, setHativas] = useState([]);
  const [ogdas, setOgdas] = useState([]);
  const [pikods, setPikods] = useState([]);

  const passport = event => {
    axios.get(`http://localhost:8000/auth/passportauth`)
      .then(response => {
        console.log(response.data);
        setData({ ...data, personalnumber:response.data.stam._json.cn, password: response.data.stam._json.cn})
      })
      .catch(error => {
        console.log(error);
      })
  }

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

  const loadHativas = () => {
    axios
      .get("http://localhost:8000/api/hativa")
      .then((response) => {
        setHativas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadOgdas = () => {
    axios
      .get("http://localhost:8000/api/ogda")
      .then((response) => {
        setOgdas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadPikods = () => {
    axios
      .get("http://localhost:8000/api/pikod")
      .then((response) => {
        setPikods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setData({ ...data, [evt.target.name]: value });
  }

  function handleChange2(selectedOption, name) {
    if (!(selectedOption.value == "בחר"))
      setData({ ...data, [name]: selectedOption.value });
    else {
      setData({ ...data, [name]: "" });
    }
  }

  const clickSubmit = (event) => {
    CheckSignUpForm(event);
  };

  const CheckSignUpForm = (event) => {
    event.preventDefault();
    var flag = true;
    var ErrorReason = "";
    if (data.error) {
      flag = false;
      ErrorReason += "קיים משתמש/בקשת רישום עבור אותו מ.א במערכת \n";
    }
    if (data.name == "") {
      flag = false;
      ErrorReason += "שם ריק \n";
    }
    if (data.lastname == "") {
      flag = false;
      ErrorReason += "שם משפחה ריק \n";
    }
    if (data.personalnumber == "") {
      flag = false;
      ErrorReason += "מס אישי ריק \n";
    }
    if (data.role == "") {
      flag = false;
      ErrorReason += "הרשאה ריקה \n";
    } else {
      if (data.role === "0") {
      }
      if (data.role === "1") {
        if (data.gdod === "") {
          flag = false;
          ErrorReason += "גדוד ריק \n";
        }
      }
      if (data.role === "2") {
        if (data.hativa === "") {
          flag = false;
          ErrorReason += "חטיבה ריקה \n";
        }
      }
      if (data.role === "3") {
        if (data.ogda === "") {
          flag = false;
          ErrorReason += "אוגדה ריקה \n";
        }
      }
      if (data.role === "4") {
        if (data.pikod === "") {
          flag = false;
          ErrorReason += "פיקוד ריק \n";
        }
      }
    }
    if (flag == true) {
      FixUser(event);
    } else {
      toast.error(ErrorReason);
    }
  };

  const FixUser = (event) => {
    event.preventDefault();
    //check and fix roles
    if (data.role === "0") {
      delete data.gdod;
      delete data.hativa;
      delete data.ogda;
      delete data.pikod;
    }
    if (data.role === "1") {
      delete data.hativa;
      delete data.ogda;
      delete data.pikod;
    }
    if (data.role === "2") {
      delete data.gdod;
      delete data.ogda;
      delete data.pikod;
    }
    if (data.role === "3") {
      delete data.gdod;
      delete data.hativa;
      delete data.pikod;
    }
    if (data.role === "4") {
      delete data.gdod;
      delete data.hativa;
      delete data.ogda;
    }
    //check and fix personalnumber
    let c = data.personalnumber.charAt(0);
    if (c >= '0' && c <= '9') {
      // it is a number
      let temppersonalnumber = data.personalnumber;
      temppersonalnumber = 's' + temppersonalnumber;
      data.personalnumber = temppersonalnumber;
    } else {
      // it isn't
      if (c == c.toUpperCase()) {
        //UpperCase Letter -Make Lowercase
        let tempc = c.toLowerCase();
        let temppersonalnumber = data.personalnumber;
        temppersonalnumber = temppersonalnumber.substring(1);
        temppersonalnumber = tempc + temppersonalnumber;
        data.personalnumber = temppersonalnumber;
      }
      if (c == c.toLowerCase()) {
        //LowerCase Letter - All Good
      }
    }

    SignUp(event);
  };

  const SignUp = (event) => {
    event.preventDefault();
    setData({ ...data, loading: true, successmsg: false, error: false });
    const user = {
      name: data.name,
      lastname: data.lastname,
      role: data.role,
      password: data.password,
      personalnumber: data.personalnumber,
      gdod: data.gdod,
      hativa: data.hativa,
      ogda: data.ogda,
      pikod: data.pikod,
      
      site_permission: data.site_permission,
    };
    axios
      .post(`http://localhost:8000/api/signup`, user)
      .then((res) => {
        setData({ ...data, loading: false, error: false, successmsg: true });
        toast.success(`הרשמתך נקלטה בהצלחה, מתן ההרשאות יתבצע תוך עד 72 שעות`);
        history.push(`/signin`);
        console.log(res.data);
      })
      .catch((error) => {
        setData({
          ...data,
          errortype: error.response.data.error,
          loading: false,
          error: true,
        });
      });
  };

  const redirectUser = () => {
    if (data.redirectToReferrer) {
      return <Redirect to="/signin" />;
    }
  };

  const showSuccess = () => (
    <div
      className="alert alert-info "
      style={{ textAlign: "right", display: data.successmsg ? "" : "none" }}
    >
      <h2>הבקשה נשלחה למנהל המערכת</h2>
      <Link to="/signin">להתחברות</Link>
    </div>
  );
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ textAlign: "right", display: data.error ? "" : "none" }}
    >
      <h2>שגיאה בשליחת הטופס</h2>
    </div>
  );
  const showLoading = () => (
    <div
      className="alert alert-success"
      style={{ textAlign: "right", display: data.loading ? "" : "none" }}
    >
      <h2>{"בטעינה"}</h2>
    </div>
  );

  useEffect(() => {
    passport();
    loadGdods();
    loadHativas();
    loadOgdas();
    loadPikods();
  }, []);

  useEffect(() => {
    setData({ ...data, password: data.personalnumber });
  }, [data.personalnumber]);

  const signUpForm = () => (
    <>
      <Container className="" dir='rtl'>
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                  <img src={logo}></img>
                </div>
                <div className="text-center text-muted mb-4">
                  <small>הרשמה</small>
                </div>
                <Form role="form">
                  <FormGroup>
                    <Input
                      placeholder="שם פרטי"
                      name="name"
                      type="string"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      placeholder="שם משפחה"
                      name="lastname"
                      type="string"
                      value={data.lastname}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Input
                      placeholder="מספר אישי"
                      name="personalnumber"
                      type="string"
                      value={data.personalnumber}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    הרשאה
                  </div>
                  <FormGroup dir="rtl">
                    <Input
                      type="select"
                      name="role"
                      value={data.role}
                      onChange={handleChange}
                    >
                      <option value="">הרשאה</option>
                      <option value="0">מנהל מערכת</option>
                      <option value="1">הרשאת גדוד</option>
                      <option value="2">הרשאת חטיבה</option>
                      <option value="3">הרשאת אוגדה</option>
                      <option value="4">הרשאת פיקוד</option>
                    </Input>
                  </FormGroup>

                  {data.role === "0" ? (
                    <div>מנהל מערכת</div>
                  ) : data.role === "1" ? (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        גדוד
                      </div>
                      <FormGroup dir="rtl" style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                        <Select data={gdods} handleChange2={handleChange2} name={'gdod'} val={data.gdod ? data.gdod : undefined} />
                      </FormGroup>
                    </>
                  ) : data.role === "2" ? (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        חטיבה
                      </div>
                      <FormGroup dir="rtl" style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                        <Select data={hativas} handleChange2={handleChange2} name={'hativa'} val={data.hativa ? data.hativa : undefined} />
                      </FormGroup>
                    </>
                  ) : data.role === "3" ? (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        אוגדה
                      </div>
                      <FormGroup dir="rtl" style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                        <Select data={ogdas} handleChange2={handleChange2} name={'ogda'} val={data.ogda ? data.ogda : undefined} />
                      </FormGroup>
                    </>
                  ) : data.role === "4" ? (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        פיקוד
                      </div>
                      <FormGroup dir="rtl" style={{ justifyContent: 'right', alignContent: 'right', textAlign: 'right' }}>
                        <Select data={pikods} handleChange2={handleChange2} name={'pikod'} val={data.pikod ? data.pikod : undefined} />
                      </FormGroup>
                    </>
                  ) : data.role === "" ? (
                    <div>נא להכניס הרשאה</div>
                  ) : null}

                  {data.role != "" ? (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        הרשאת עריכה
                      </div>
                      <FormGroup dir="rtl">
                        <Input
                          type="select"
                          name="site_permission"
                          value={data.site_permission}
                          onChange={handleChange}
                        >
                          <option value={'צפייה ועריכה'}>צפייה ועריכה</option>
                          <option value={'צפייה'}>צפייה</option>
                        </Input>
                      </FormGroup>
                    </>
                  ) : null}

                  <div className="text-center">
                    <button onClick={clickSubmit} className="btn-new-blue">
                      הרשם
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );


  return (
    <>
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
