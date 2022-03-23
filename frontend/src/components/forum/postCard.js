import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
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
import UserProfileCircle from '../general/Navbars/UserProfileCircle/UserProfileCircle'


const PostCard = () => {

  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/question`)
        .then(async (response) =>  {
          let tempdatas =  await response.data
          setQuestions(tempdatas);
          console.log(tempdatas[0].text)
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
      <Card>
{/* {console.table(questions)} */}
{/* <UserProfileCircle/> */}
          <h3 style={{textAlign: "right", padding: "1rem 3rem 0 0"}}>{questions[0].user}</h3>
          <h1 style={{textAlign: "right", padding: "0 3rem 0 0"}}>{questions[0].text}</h1>
      </Card>
    </>
  );
}

export default PostCard;


