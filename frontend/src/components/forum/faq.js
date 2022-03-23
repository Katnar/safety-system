import RenderToLayer from "material-ui/internal/RenderToLayer";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: <h1 style={{padding:"1rem 3rem 0 0"}}>שאלות נפוצות</h1>,
    rows: [
        {
            title: "כמה צעיר גיא?",
            content: <p style={{direction: "rtl", textAlign: "right", paddingRight: "5rem"}}>גיא צעיר מאוד מאוד מאוד, והוא משתחרר רק בעוד מיליון שנה בערך!</p>,
        },
        {
            title: "מה הצוות הכי טוב בצהל?",
            content:<p style={{direction: "rtl", textAlign: "right", paddingRight: "5rem"}}>
                צוות 100 הוכתר כצוות החזק ביותר בגלקסיה!</p>,
        },
        {
            title: "איך יוצרים קשר?",
            content: <p style={{direction: "rtl", textAlign: "right", paddingRight: "5rem"}}>ניתן ליצור קשר על במייל admatai@idf.il</p>,
        },
        {
            title: "Which bear is the best bear?",
            content: <p style={{direction: "rtl", textAlign: "right", paddingRight: "5rem"}}>Black bear!</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    direction: "rtl",
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
                style={{direction: "rtl", float: "right"}}
            />
        </div>
    );
    }

    export default faq;
