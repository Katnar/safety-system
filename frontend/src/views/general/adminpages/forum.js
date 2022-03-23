import React, { useState } from "react";
// nodejs library that concatenates classes
// react plugin used to create charts

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

import TrainingProgramTable from "components/safetySystem/adminPages/trainingProgram/SortingTable";
import { isAuthenticated } from "auth";
import AskQ from 'components/forum/AskQ'
import PostCard from 'components/forum/postCard'

function Forum() {
  return (
    <>
        <AskQ/>
        <PostCard/>
    </>
  );
}

export default withRouter(Forum);
