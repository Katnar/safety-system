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


export default function Home(props) {
  const [byrole, setByrole] = useState("");
  const useStyles = makeStyles(dashboardStyle);

  const user = isAuthenticated();

  async function init() {
    console.log(user.user.role)
    if (user.user.role == "0") {
      setByrole("");
    }
    if (user.user.role == "1") {
      setByrole("/bygdod");
    }
    if (user.user.role == "2") {
      setByrole("/byhativa");
    }
    if (user.user.role == "3") {
      setByrole("/byogda");
    }
    if (user.user.role == "4") {
      setByrole("/bypikod");
    }
  }

  useEffect(() => {
    if(user && user.user.role){
      init();
    }
  }, [props.match]);

  return (
    // <Page loader={"resize-spin"} color={"#A9A9A9"} size={4}>
    <div>
      <GridContainer>
        <CardTableCalcGlobal
          name={[
            "ניהול הסמכות",
            "GlobalCertificationsManagementsView",
            "שים לב! חלק מההסמכות פגות תוקף",
            "certificationValidity",
            "certificationsManagement",
            byrole,
          ]}
        />
        <CardTableCalcGlobal
          name={[
            "פיקוח תעסוקתי",
            "GlobalOccupationalSupervisionView",
            "שים לב! חלק מהפיקוחים פגי תוקף",
            "nextTestDate",
            "occupationalSupervision",
            byrole,
          ]}
        />
        <CardTableCalcGlobal
          name={[
            "בדיקות תקופתיות לציוד וחומרים",
            "GlobalEquipmentAndMaterialsPeriodicInspectionsView",
            "שים לב! חלק מהבדיקות פגות תוקף",
            "nextTestDate",
            "equipmentAndMaterialsPeriodicInspections",
            byrole,
          ]}
        />
        <CardTableCalcGlobal
          name={[
            "ניטורים סביבתיים",
            "GlobalEnvironmentalMonitoringView",
            "שים לב! חלק מהניטורים פגי תוקף",
            "nextMonitoringDate",
            "environmentalMonitoring",
            byrole,
          ]}
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
