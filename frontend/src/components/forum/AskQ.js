import React, { useEffect, useState, useMemo, useRef } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import { Link, withRouter, Redirect } from "react-router-dom";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { toast } from "react-toastify";
import { isAuthenticated } from "auth";
// import { FormGroup } from "reactstrap";
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

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

// const [data, SetData] = useState();

const AskQ = (props) => {
  const user = isAuthenticated();

  const [data, setData] = useState({
    user: user.user._id,
    text: "",
    createdAt: "",
    answer: "",
    error: false,
    successmsg: false,
    loading: false,
    redirectToReferrer: false,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setData({ ...data, [evt.target.name]: value });
  }

  // const clickSubmit = (event) => {
  //   if (CheckFormData()) {
  //     SubmitData();
  //   } else {
  //     toast.error("שגיאה בפרסום השאלה");
  //   }
  // };

  const postData = () => {
    var today = new Date();
    var invdate = new Date(today.toLocaleString('en-US', {
      timeZone: 'Asia/Jerusalem'}))
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // var yyyy = today.getFullYear();
    // today = dd + "." + mm + "." + yyyy;
    setData({ ...data, loading: true, successmsg: false, error: false });
    const question = {
      user: user.user._id,
      text: data.text,
      createdAt: invdate,
      // answer: "435",
    };
    Axios.post(`http://localhost:8000/api/question`, question)
      .then((res) => {
        setData({ ...data, loading: false, error: false, successmsg: true });
        toast.success(`השאלה פורסמה בהצלחה`);
        window.location.reload();
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

  return (
    <Card
      style={{
        borderRadius: "15px",
        boxShadow: "0 0 1rem 0",
        background: "#B5CFD8"
      }}
    >
      <CardHeader style={{ direction: "rtl" }}>
        <CardTitle
          tag="h3"
          style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
        >
          פורום טנ"ה 9
        </CardTitle>
        {/*headline*/}
      </CardHeader>
      <CardBody style={{ direction: "rtl" }}>
        {/* <Container> */}
        <Row>
          <Col xs={12}>
            <div
              style={{
                textAlign: "right",
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              שאל שאלה
            </div>
            <FormGroup dir="rtl">
              <Input
                type="textarea"
                name="text"
                value={data.text}
                onChange={handleChange}
              ></Input>
            </FormGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <Button
              type="primary"
              className="btn btn-info"
              style={{ width: "100%", height: "3rem", width: "10rem" }}
              onClick={() => postData()}
              // onClick={() => clickSubmit()}
            >
              פרסם שאלה
            </Button>
          </Col>
        </Row>
        {/* </Container> */}
      </CardBody>
    </Card>
  );
};

export default withRouter(AskQ);
