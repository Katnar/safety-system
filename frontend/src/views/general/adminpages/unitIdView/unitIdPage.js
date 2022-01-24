import React, { useState, useEffect, useRef } from "react";

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

import axios from "axios";
import unitIdTable from "components/safetySystem/UnitId/SortingTable";
import certificationTable from "components/safetySystem/certificationsManagement/SortingTable";
import PanelHeader from "components/general/PanelHeader/PanelHeader";

function UnitIdPage({ match }) {
  //mahzor
  const [unitData, setUnitData] = useState({});
  //mahzor

  //   const loadUnit = () => {
  //     axios
  //       .get(`http://localhost:8000/api/unitId`)
  //       .then((response) => {
  //         let tempUnit = response.data;
  //         tempUnit.startdate = tempUnit.startdate.slice(0, 10);
  //         tempUnit.enddate = tempUnit.enddate.slice(0, 10);
  //         setUnitData(tempUnit);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const getUnitDetails = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/unitId`)
        .then((response) => {
          setUnitData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {}
  };

  function init() {
    // loadUnit();
    getUnitDetails();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      {/* <PanelHeader
        size="sm"
        content={
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {unitData.name}
            </h1>
          </Container>
        }
      /> */}

      <Card>
        <CardBody>
          <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
            תעודת זהות יחידה
          </h3>
        </CardBody>
      </Card>

      <unitIdTable />
      <certificationTable />
      <Link to={`/UnitIdForm`}>
        <Button>הוסף יחידה</Button>
      </Link>
    </Container>
  );
}

export default withRouter(UnitIdPage);
