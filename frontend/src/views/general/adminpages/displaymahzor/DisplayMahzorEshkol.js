import React, { useState, useEffect, useRef } from 'react';

import { Link, withRouter, Redirect } from "react-router-dom";

// reactstrap components
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

import axios from 'axios';
import SortingTable from 'components/tafkidipedia/EshkolSortingTable/SortingTable';

function DisplayMahzorEshkol({ match }) {
    const [count, setCount] = useState(0); //to refresh table...

    //candidatespreferences
    //const [candidatespreferences, setCandidatesPreferences] = useState({})
    //candidatespreferences

    //mahzoreshkol
    // const [mahzoreshkol, setMahzorEshkol] = useState({})
    //mahzoreshkol

    async function CalculateMahzorEshkol() {
        //delete all eshkols of certain mahzor
        let response1 = await axios.delete(`http://localhost:8000/api/eshkol/deletemahzoreshkol/${match.params.mahzorid}`)
        let tempdata = response1.data;
        // console.log(tempdata)

        //calculate all eshkols of certain mahzor
        let response2 = await axios.get(`http://localhost:8000/api/candidatepreferencebymahzorid/${match.params.mahzorid}`)
        let candidatespreferences = response2.data;

        let tempmahzoreshkol = [];
        for (let i = 0; i < candidatespreferences.length; i++) {
            let iscertjobpreference1alreadyhaseshkol = false;
            let iscertjobpreference2alreadyhaseshkol = false;
            let iscertjobpreference3alreadyhaseshkol = false;

            let isnoncertjobpreference1alreadyhaseshkol = false;
            let isnoncertjobpreference2alreadyhaseshkol = false;
            let isnoncertjobpreference3alreadyhaseshkol = false;

            for (let j = 0; j < tempmahzoreshkol.length; j++) {
                if (candidatespreferences[i].certjobpreference1._id == tempmahzoreshkol[j].job) {
                    iscertjobpreference1alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }
                if(iscertjobpreference1alreadyhaseshkol==false)
                if (candidatespreferences[i].certjobpreference2._id == tempmahzoreshkol[j].job) {
                    iscertjobpreference2alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }
                if((iscertjobpreference1alreadyhaseshkol==false)&&(iscertjobpreference2alreadyhaseshkol==false))
                if (candidatespreferences[i].certjobpreference3._id == tempmahzoreshkol[j].job) {
                    iscertjobpreference3alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }
                
                if (candidatespreferences[i].noncertjobpreference1._id == tempmahzoreshkol[j].job) {
                    isnoncertjobpreference1alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }

                if(isnoncertjobpreference1alreadyhaseshkol==false)
                if (candidatespreferences[i].noncertjobpreference2._id == tempmahzoreshkol[j].job) {
                    isnoncertjobpreference2alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }

                if((isnoncertjobpreference1alreadyhaseshkol==false)&&(isnoncertjobpreference2alreadyhaseshkol==false))
                if (candidatespreferences[i].noncertjobpreference3._id == tempmahzoreshkol[j].job) {
                    isnoncertjobpreference3alreadyhaseshkol = true;
                    let isuseralreadypickedjob = false;
                    for (let k = 0; k < tempmahzoreshkol[j].candidates.length; k++) {
                        if (candidatespreferences[i].candidate._id == tempmahzoreshkol[j].candidates[k]) {
                            // same user already picked that job
                            isuseralreadypickedjob = true;
                        }
                    }
                    if (isuseralreadypickedjob == false) {
                        // user picked that job -> insert
                        tempmahzoreshkol[j].candidates.push(candidatespreferences[i].candidate._id)
                    }
                }
            }
            if (iscertjobpreference1alreadyhaseshkol == false) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].certjobpreference1._id, candidates: [candidatespreferences[i].candidate._id] })
            }
            if ((iscertjobpreference2alreadyhaseshkol == false)&&(candidatespreferences[i].certjobpreference1._id!=candidatespreferences[i].certjobpreference2._id)) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].certjobpreference2._id, candidates: [candidatespreferences[i].candidate._id] })
            }
            if ((iscertjobpreference3alreadyhaseshkol == false)&&(candidatespreferences[i].certjobpreference1._id!=candidatespreferences[i].certjobpreference3._id)&&(candidatespreferences[i].certjobpreference2._id!=candidatespreferences[i].certjobpreference3._id)) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].certjobpreference3._id, candidates: [candidatespreferences[i].candidate._id] })
            }
            if (isnoncertjobpreference1alreadyhaseshkol == false) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].noncertjobpreference1._id, candidates: [candidatespreferences[i].candidate._id] })
            }
            if ((isnoncertjobpreference2alreadyhaseshkol == false)&&(candidatespreferences[i].noncertjobpreference1._id!=candidatespreferences[i].noncertjobpreference2._id)) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].noncertjobpreference2._id, candidates: [candidatespreferences[i].candidate._id] })
            }
            if ((isnoncertjobpreference3alreadyhaseshkol == false)&&(candidatespreferences[i].noncertjobpreference1._id!=candidatespreferences[i].noncertjobpreference3._id)&&(candidatespreferences[i].noncertjobpreference2._id!=candidatespreferences[i].noncertjobpreference3._id)) {
                // job doesnt has eshkol -> insert
                tempmahzoreshkol.push({ mahzor:match.params.mahzorid, job: candidatespreferences[i].noncertjobpreference3._id, candidates: [candidatespreferences[i].candidate._id] })
            }
        }
        //post mahzor eshkols to db
        for (let i = 0; i < tempmahzoreshkol.length; i++) {
            let response1 = await axios.post(`http://localhost:8000/api/eshkol`, tempmahzoreshkol[i])
            // let tempdata = response1.data;
        }
        setCount(count + 1);
    }

    function init() {

    }

    useEffect(() => {
        init();
    }, [])

    return (
        <Container>
            <h3 style={{ textAlign: 'right', fontWeight: 'bold' }}>טבלת אשכולות</h3>
            <SortingTable mahzorid={match.params.mahzorid} refresh={count}/>
            <Button onClick={() => CalculateMahzorEshkol()}>חשב אשכולות</Button>
        </Container>
    );
}

export default withRouter(DisplayMahzorEshkol);