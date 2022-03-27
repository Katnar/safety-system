import axios from "axios";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col,
  Collapse,
} from "reactstrap";
import UserProfileCircle from "../general/Navbars/UserProfileCircle/UserProfileCircle";
import ProfilePicture from "../general/Navbars/UserProfileCircle/ProfilePicture";
import { format } from "date-fns";
import { isAuthenticated } from "auth";
import replay from "assets/img/replay.png";

const PostCard = () => {
  const [questions, setQuestions] = useState([]);

  const [colorhr, setcolorhr] = useState("transparent");
  const [color, setcolor] = useState("transparent");
  const { user } = isAuthenticated();
  // console.log(date)

  const getQuestions = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/smartQuestions`)
        .then(async (response) => {
          let tempdatas = await response.data;
          setQuestions(tempdatas);
          console.log(tempdatas[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {}
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((question, key) => {
        return (
          <Card
            style={{
              borderRadius: "15px",
              boxShadow: "0 0 1rem 0",
              color: "lightBlue",
            }}
          >
            <Row>
              <Col xs={12} sm={8} md={4}>
                <Row style={{ margin: "1rem 3rem 0 0" }}>
                  {question.user ? (
                    <ProfilePicture
                      fname={question.user.name}
                      bgcolor={color}
                    />
                  ) : null}
                  <h3
                    style={{
                      textAlign: "right",
                      paddingRight: "1rem",
                      margin: "0",
                    }}
                  >
                    {question.user.name + " " + question.user.lastname}
                  </h3>
                </Row>
              </Col>
              <Col xs={12} sm={8} md={4}></Col>
              <Col xs={12} sm={8} md={4}>
                <h4 style={{ textAlign: "left", padding: "1rem 0 0 3rem" }}>
                  {question.createdAt
                    .slice(11, 16)
                    } {" "}
                    {question.createdAt
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join(".")}
                   
                  
                </h4>
              </Col>
            </Row>
            <h1 style={{ textAlign: "right", padding: "3rem 3rem 0 0" }}>
              {question.text}
            </h1>
            <Row>
              <Col xs={12} sm={8} md={4}></Col>
              <Col xs={12} sm={8} md={4}></Col>
              <Col xs={12} sm={8} md={4}>
                <Button
                  type="primary"
                  className="btn btn-success"
                  style={{
                    width: "100%",
                    height: "3rem",
                    width: "8rem",
                    marginLeft: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Row>
                    <img
                      src={replay}
                      style={{
                        width: "20px",
                        height: "20px",
                        textAlign: "left",
                      }}
                    ></img>
                    <h4 style={{ paddingRight: "1rem", textAlign: "left" }}>
                      השב
                    </h4>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
