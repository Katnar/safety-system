import React, { useEffect, useState, useMemo, useRef } from "react";
import Axios from "axios";
import CertificationIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import { Link } from "react-router-dom";
import moment from "moment";
import { isAuthenticated } from "auth";
import { ContactSupportOutlined } from "@material-ui/icons";

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();
const user = isAuthenticated();


const CardTableCalcGlobal = (props) => {
  const [validData, setValidData] = useState("");
  const [expiredData, setExpiredData] = useState("");
  const [isExpiredData, setIsExpiredData] = useState("");
  const [isAlertData, setIsAlertData] = useState("");

  const DataLoad = async () => {
    let tempUnit
    if (user.user.role == "0") {
      tempUnit = "";
    }
    if (user.user.role == "1") {
      tempUnit = "/" + user.user.gdod;
    }
    if (user.user.role == "2") {
      tempUnit = "/" + user.user.hativa;
    }
    if (user.user.role == "3") {
      tempUnit = "/" + user.user.ogda;
    }
    if (user.user.role == "4") {
      tempUnit = "/" + user.user.pikod;
    }
    const validity = props.name[3];

    let tempgdods = [];

    if (user.user.role== "1") {
      await Axios.get(`http://localhost:8000/api/gdod/${user.user.gdod}`)
        .then((response) => {
          tempgdods = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      }

    if (user.user.role== "2") {
      await Axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: user.user.hativa })
        .then((response) => {
          tempgdods = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      }

    if (user.user.role== "3") {
      await Axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: user.user.ogda })
        .then(async (response1) => {
          for (let i = 0; i < response1.data.length; i++) {
            await Axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response1.data[i]._id })
              .then((response2) => {
                for (let j = 0; j < response2.data.length; j++) {
                  tempgdods.push(response2.data[j])
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

    if (user.user.role== "4") {
      await Axios.post(`http://localhost:8000/api/ogda/ogdasbypikodid`, { pikod: user.user.pikod })
        .then(async (response1) => {
          for (let i = 0; i < response1.data.length; i++) {
            await Axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: response1.data[i]._id })
              .then(async (response2) => {
                for (let j = 0; j < response2.data.length; j++) {
                  await Axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response2.data[j]._id })
                    .then(async (response3) => {
                      for (let k = 0; k < response3.data.length; k++) {
                        tempgdods.push(response3.data[k])
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
        })
        .catch((error) => {
          console.log(error);
        });
    };

    await Axios.get(`http://localhost:8000/api/${props.name[4]}`).then(async(response) => {
      var valid = 0;
      var expired = 0;
      var isExpired = false;
      var isAlert = false;
      var today = new Date();

      let tempData = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < tempgdods.length; j++) {
            if (response.data[i].gdod == tempgdods[j]._id) {
              tempData.push(response.data[i]);
            }
          }
        }

      for (var i = 0; i < tempData.length; i++) {
        console.log(validity);
        if (props.name[3] == "certificationValidity") {
          if (Date.parse(tempData[i].certificationValidity) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(tempData[i].certificationValidity).diff(
              moment(today),
              "days"
            ) < 14
          ) {
            isAlert = true;
          }
        }
        if (props.name[3] == "nextTestDate") {
          if (Date.parse(tempData[i].nextTestDate) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(tempData[i].nextTestDate).diff(moment(today), "days") <
            14
          ) {
            isAlert = true;
          }
        }
        if (props.name[3] == "nextMonitoringDate") {
          if (Date.parse(tempData[i].nextMonitoringDate) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(tempData[i].nextMonitoringDate).diff(
              moment(today),
              "days"
            ) < 14
          ) {
            isAlert = true;
          }
        }
      }
      // console.log(valid);
      // console.log(isAlert);
      setIsAlertData(isAlert);
      setExpiredData(expired);
      setValidData(valid);
      setIsExpiredData(isExpired);
      // console.log("test")
    });
  };

  useEffect(() => {
    DataLoad();
    // init();
  }, [props]);

  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Link to={`/${props.name[1]}`}>
          <Card
            style={{
              color: "#000",
              height: "15rem",
              borderRadius: "15px",
              backgroundColor: "#B5CFD8",
              boxShadow: "0 0 1rem 0",
              overflow: "auto",
            }}
          >
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CertificationIcon />
              </CardIcon>
              <br />
              <h3
                style={{ color: "black", fontSize: "26px", fontWeight: "bold" }}
              // className={classes.cardCategory}
              >
                {props.name[0]}
              </h3>
              <h3 style={{ color: "black", fontSize: "20px" }}>
                {validData}/{validData + expiredData} <small> בתוקף</small>
              </h3>
            </CardHeader>
            {isExpiredData ? (
              <CardFooter stats>
                <div>
                  {/* <Danger>
                        <Warning />
                      </Danger> */}
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "red", fontSize: "22px" }}
                  >
                    {props.name[2]}
                  </a>
                </div>
              </CardFooter>
            ) : (
              <CardFooter stats>
                <div style={{ color: "black", fontSize: "22px" }}>
                  {/* <Check /> */}
                  לא נדרשת פעולה מיידית
                </div>
              </CardFooter>
            )}

            {isAlertData ? (
              <CardFooter stats>
                <div>
                  {/* <Danger>
                        <DateRange />
                      </Danger> */}
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "crimson ", fontSize: "22px" }}
                  >
                    הסמכות מסוימות יפוגו בשבועיים הקרובים
                  </a>
                </div>
              </CardFooter>
            ) : (
              <></>
            )}
          </Card>
        </Link>
      </GridItem>
    </>
  );
};

export default CardTableCalcGlobal;
