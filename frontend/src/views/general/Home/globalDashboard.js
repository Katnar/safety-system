import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import CardTable from "components/Card/CardTable";
import Faq from "components/forum/faq";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { isAuthenticated } from "auth";
import CardTableCalcGlobal from "components/Card/CardTableCalcGlobal";
import safetyPic from "assets/img/shieldSafety.png"
import ContactUs from "components/Card/contactUs";
import {
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

function Home(props) {
  const useStyles = makeStyles(dashboardStyle);
  const [gdods, setGdods] = useState("");

  async function init() {
    if (props.match.params.unittype == "admin") {
      await axios.get(`http://localhost:8000/api/gdod`)
        .then((response) => {
          let tempgdods = response.data;
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (props.match.params.unittype == "gdod") {
      await axios.get(`http://localhost:8000/api/gdod/${props.match.params.unitid}`)
        .then((response) => {
          let tempgdods = [response.data];
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (props.match.params.unittype == "hativa") {
      await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: props.match.params.unitid })
        .then((response) => {
          let tempgdods = response.data;
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (props.match.params.unittype == "ogda") {
      let tempgdods=[];
      await axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: props.match.params.unitid })
        .then(async(response1) => {
          for (let i = 0; i < response1.data.length; i++) {
            await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response1.data[i]._id })
              .then((response2) => {
                for (let j = 0; j < response2.data.length; j++) {
                  tempgdods.push(response2.data[j])
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
          console.log(tempgdods)
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (props.match.params.unittype == "pikod") {
      let tempgdods=[];
      await axios.post(`http://localhost:8000/api/ogda/ogdasbypikodid`, { pikod: props.match.params.unitid })
        .then(async(response1) => {
          for (let i = 0; i < response1.data.length; i++) {
            await axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: response1.data[i]._id })
              .then(async(response2) => {
                for (let j = 0; j < response2.data.length; j++) {
                  await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: response2.data[j]._id })
                    .then((response3) => {
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
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }

  useEffect(() => {
      init();
  }, []);

  return (
    gdods.length == 0 ?
      <div style={{ width: '50%', marginTop: '30%' }}>
        <PropagateLoader color={'#00dc7f'} loading={true} size={25} />
      </div>
      :
      <div>
      <GridContainer>
        <CardTableCalcGlobal
          name={[
            "ניהול הסמכות",
            `GlobalCertificationsManagementsView/${props.match.params.unittype}/${props.match.params.unitid}`,
            "שים לב! חלק מההסמכות פגות תוקף",
            "certificationValidity",
            "certificationsManagement",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "פיקוח תעסוקתי",
            `GlobalOccupationalSupervisionView/${props.match.params.unittype}/${props.match.params.unitid}`,
            "שים לב! חלק מהפיקוחים פגי תוקף",
            "nextTestDate",
            "occupationalSupervision",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "בדיקות תקופתיות לציוד וחומרים",
            `GlobalEquipmentAndMaterialsPeriodicInspectionsView/${props.match.params.unittype}/${props.match.params.unitid}`,
            "שים לב! חלק מהבדיקות פגות תוקף",
            "nextTestDate",
            "equipmentAndMaterialsPeriodicInspections",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "ניטורים סביבתיים",
            `GlobalEnvironmentalMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`,
            "שים לב! חלק מהניטורים פגי תוקף",
            "nextMonitoringDate",
            "environmentalMonitoring",
          ]}
          gdods={gdods}
        />
      </GridContainer>
      <GridContainer>
        <CardTable name={["תעודת זהות יחידה", `GlobalUnitIdView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <CardTable
          name={["כשירות ממונים על הבטיחות", `GlobalSafetyOfficersQualificationView/${props.match.params.unittype}/${props.match.params.unitid}`]}
        />
        <CardTable name={["תכנית הדרכות", `GlobalTrainingProgramView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <CardTable
          name={[
            "בדיקות תקופתיות למכונות וציוד",
            `GlobalMachinesAndEquipmentPeriodicInspectionsView/${props.match.params.unittype}/${props.match.params.unitid}`,
          ]}
        />
        <CardTable
          name={["מעקב ניהול סיכונים", `GlobalRiskManagementMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`]}
        />
        <CardTable
          name={[
            "מעקב וועדות בטיחות חודשיות",
            `GlobalMonthlySafetyCommitteesMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`,
          ]}
        />
      </GridContainer>
      <GridContainer>
        <CardTable name={["מעקב סקר מפגעים", `GlobalHazardsMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <CardTable name={['מעקב ניהול חומ"ס', `GlobalHomsManagementMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <CardTable
          name={[
            "מעקב ציוד מגן אישי",
            `GlobalPersonalProtectiveEquipmentMonitoringView/${props.match.params.unittype}/${props.match.params.unitid}`,
          ]}
        />
        <CardTable name={["בדיקות הארקות חשמל ומבנים", `GlobalGroundingTestsView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <CardTable name={["תיעוד ביקורות", `GlobalReviewsDocumentationView/${props.match.params.unittype}/${props.match.params.unitid}`]} />
        <Col>
          <img src={safetyPic} style={{ height: "100px", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
        </Col>
      </GridContainer>
      <hr />
      <br />
      <Row>
        <Col>
          <Faq
            style={{
              direction: "rtl",
              borderRadius: "15px",
              backgrooungColor: "#bde0fe",
            }}
          />
        </Col>
        <Col>
          <ContactUs />
        </Col>
      </Row>
    </div>
    // </Page>
  );
}
export default withRouter(Home);