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
import { Icon } from '@iconify/react';
import commentDetail from '@iconify/icons-bx/comment-detail';

const PostCard = () => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState([]);

  const [colorhr, setcolorhr] = useState("transparent");
  const [color, setcolor] = useState("transparent");
  const { user } = isAuthenticated();
  // console.log(date)

  const getQuestions = async () => {
      await axios
        .get(`http://localhost:8000/api/smartQuestions`)
        .then(async (response) => {
          let tempdatas = await [...response.data].reverse();
          let tempAnswers;
          for(let i = 0; i < tempdatas.length; i++) {
            let answerCounter = 0;
            // console.log(tempdatas[i])
            await axios
            .get(`http://localhost:8000/api/answer`)
            .then(async (response) => {
             tempAnswers = await [...response.data];
             for(let j = 0; j < tempAnswers.length; j++) {
               if(tempAnswers[j].question == tempdatas[i]._id) {
                 answerCounter++;
                 console.log(answerCounter)
               }
             }
             tempdatas[i].counter = answerCounter;
            }
            )
          };
          setQuestions(tempdatas);
          console.log(tempdatas[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
      }

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
              background: "#dee9ed"
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
                  
                  className="btn btn-info"
                  style={{
                    width: "100%",
                    height: "3rem",
                    width: "8rem",
                    marginLeft: "3rem",
                    marginBottom: "1rem",
                    // background: "#04ab64"
                  }}
                >
                  <Row>
                    {/* <img
                      src={replay}
                      style={{
                        width: "20px",
                        height: "20px",
                        textAlign: "left",
                        color: "#fff"
                      }}
                    ></img> */}
                    <div>
                    <Icon icon={commentDetail} style={{fontSize: "1rem"}}/> {question.counter} תשובות
                    </div>
                   
                    {/* <h4 style={{ paddingRight: "1rem", textAlign: "left", color: "#fff" }}>
                      תשובות
                    </h4> */}
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
