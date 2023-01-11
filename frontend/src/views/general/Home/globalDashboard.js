import React, { useEffect, useState, useMemo, useRef } from "react";
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

export default function Home(props) {
  const useStyles = makeStyles(dashboardStyle);
  const [gdods, setGdods] = useState("");
  const user = isAuthenticated();

  async function init() {

    if (user.user.role == "0") {
      await axios.get(`http://localhost:8000/api/gdod`)
        .then((response) => {
          let tempgdods = response.data;
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }


    if (user.user.role == "1") {
      await axios.get(`http://localhost:8000/api/gdod/${user.user.gdod}`)
        .then((response) => {
          let tempgdods = [response.data];
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (user.user.role == "2") {
      await axios.post(`http://localhost:8000/api/gdod/gdodsbyhativaid`, { hativa: user.user.hativa })
        .then((response) => {
          let tempgdods = response.data;
          setGdods(tempgdods)        
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (user.user.role == "3") {
      let tempgdods=[];
      await axios.post(`http://localhost:8000/api/hativa/hativasbyogdaid`, { ogda: user.user.ogda })
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

    if (user.user.role == "4") {
      let tempgdods=[];
      await axios.post(`http://localhost:8000/api/ogda/ogdasbypikodid`, { pikod: user.user.pikod })
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
    if (user.user && user.user.role != undefined && user.user.role != null) {
      init();
    }
  }, [user.user.role]);

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
            "GlobalCertificationsManagementsView",
            "שים לב! חלק מההסמכות פגות תוקף",
            "certificationValidity",
            "certificationsManagement",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "פיקוח תעסוקתי",
            "GlobalOccupationalSupervisionView",
            "שים לב! חלק מהפיקוחים פגי תוקף",
            "nextTestDate",
            "occupationalSupervision",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "בדיקות תקופתיות לציוד וחומרים",
            "GlobalEquipmentAndMaterialsPeriodicInspectionsView",
            "שים לב! חלק מהבדיקות פגות תוקף",
            "nextTestDate",
            "equipmentAndMaterialsPeriodicInspections",
          ]}
          gdods={gdods}
        />
        <CardTableCalcGlobal
          name={[
            "ניטורים סביבתיים",
            "GlobalEnvironmentalMonitoringView",
            "שים לב! חלק מהניטורים פגי תוקף",
            "nextMonitoringDate",
            "environmentalMonitoring",
          ]}
          gdods={gdods}
        />
      </GridContainer>
      <GridContainer>
        <CardTable name={["תעודת זהות יחידה", "GlobalUnitIdView"]} />
        <CardTable
          name={["כשירות ממונים על הבטיחות", "GlobalSafetyOfficersQualificationView"]}
        />
        <CardTable name={["תכנית הדרכות", "GlobalTrainingProgramView"]} />
        <CardTable
          name={[
            "בדיקות תקופתיות למכונות וציוד",
            "GlobalMachinesAndEquipmentPeriodicInspectionsView",
          ]}
        />
        <CardTable
          name={["מעקב ניהול סיכונים", "GlobalRiskManagementMonitoringView"]}
        />
        <CardTable
          name={[
            "מעקב וועדות בטיחות חודשיות",
            "GlobalMonthlySafetyCommitteesMonitoringView",
          ]}
        />
      </GridContainer>
      <GridContainer>
        <CardTable name={["מעקב סקר מפגעים", "GlobalHazardsMonitoringView"]} />
        <CardTable name={['מעקב ניהול חומ"ס', "GlobalHomsManagementMonitoringView"]} />
        <CardTable
          name={[
            "מעקב ציוד מגן אישי",
            "GlobalPersonalProtectiveEquipmentMonitoringView",
          ]}
        />
        <CardTable name={["בדיקות הארקות חשמל ומבנים", "GlobalGroundingTestsView"]} />
        <CardTable name={["תיעוד ביקורות", "GlobalReviewsDocumentationView"]} />
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
