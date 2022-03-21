import React, { useEffect, useState, useMemo, useRef } from "react";
import Page from "react-page-loading";
import GridContainer from "components/Grid/GridContainer.js";
import CardTableCalc from "components/Card/CardTableCalc";
import CardTable from "components/Card/CardTable";
import Post from "components/forum/post";
import Comment from "components/forum/comment";

export default function Home() {

  return (
    <Page loader={"resize-spin"} color={"#A9A9A9"} size={4}>
      <div>
        <GridContainer>
          <CardTableCalc name={["ניהול הסמכות", "certificationsManagements", "שים לב! חלק מההסמכות הן פגות תוקף", "certificationValidity", "certificationsManagement"]}/>
          <CardTableCalc name={["פיקוח תעסוקתי", "occupationalSupervision", "שים לב! חלק מהפיקוחים פגי תוקף", "nextTestDate", "occupationalSupervision"]}/>
          <CardTableCalc name={["בדיקות תקופתיות לציוד וחומרים", "equipmentAndMaterialsPeriodicInspections", "שים לב! חלק מהבדיקות הן פגות תוקף", "nextTestDate", "equipmentAndMaterialsPeriodicInspections"]}/>
          <CardTableCalc name={["ניטורים סביבתיים", "environmentalMonitoring", "שים לב! חלק מהניטורים פגי תוקף", "nextMonitoringDate", "environmentalMonitoring"]}/>
        </GridContainer>
        <GridContainer>
          <CardTable name={["תעודת זהות יחידה", "unitId"]}/>
          <CardTable name={["כשירות ממונים על הבטיחות", "safetyOfficersQualification"]}/>
          <CardTable name={["תכנית הדרכות", "trainingProgram"]} />
          <CardTable name={["בדיקות תקופתיות למכונות וציוד", "machinesAndEquipmentPeriodicInspections"]}/>
          <CardTable name={["מעקב ניהול סיכונים", "riskManagementMonitoring"]}/>
          <CardTable name={["מעקב וועדות בטיחות חודשיות", "monthlySafetyCommitteesMonitoring"]}/>
        </GridContainer>
        <GridContainer>
          <CardTable name={["מעקב סקר מפגעים", "hazardsMonitoring"]} />
          <CardTable name={['מעקב ניהול חומ"ס', "homsManagementMonitoring"]} />
          <CardTable name={["מעקב ציוד מגן אישי", "personalProtectiveEquipmentMonitoring"]}/>
          <CardTable name={["בדיקות הארקות חשמל ומבנים", "groundingTests"]} />
          <CardTable name={["תיעוד ביקורות", "reviewsDocumentation"]} />
        </GridContainer>
        <Post/>
        {/* <Comment/> */}
        {/* <Post/> */}
      </div>
    </Page>
  );
}

// "@material-ui/data-grid": "*",
