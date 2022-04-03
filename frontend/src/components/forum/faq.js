import RenderToLayer from "material-ui/internal/RenderToLayer";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: <h1 style={{ padding: "1rem 3rem 0 0" }}>שאלות נפוצות</h1>,
  rows: [
    {
      title: 'מהי מערכת טנ"ה 9?',
      content: (
        <p
          style={{ direction: "rtl", textAlign: "right", paddingRight: "5rem" }}
        >
          מערכת טנ"ה 9 הינה מערכת שנועדה לנהל את תיקבטיחות הטנ"א ביחידה.
        </p>
      ),
    },
    {
      title: "לכמה זמן כל הסמכה תקפה?",
      content: (
        <p
          style={{ direction: "rtl", textAlign: "right", paddingRight: "5rem" }}
        >
          לכל הסמכה תוקף שונה, אך המערכת תתריע במייל ובשולחן העבודה על הסמכות פגות תוקף ועל הסמכות שיפוגו בשבועיים הקרובים.
        </p>
      ),
    },
    {
      title: "איך ניתן ליצור קשר?",
      content: (
        <p
          style={{ direction: "rtl", textAlign: "right", paddingRight: "5rem" }}
        >
          ניתן ליצור קשר במייל "חדשנות טנ"א" (+ctrl k).
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "#E8ECF1",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "#E8ECF1",
  arrowColor: "gray",
  direction: "rtl",
  borderRadius: "15px",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const faq = () => {
  return (
    <div>
      <Faq
        data={data}
        styles={styles}
        config={config}
        style={{ direction: "rtl", float: "right", borderRadius: "15px" }}
      />
    </div>
  );
};

export default faq;
