import React from "react";
import { Container } from '@lmig/gllt-react-component-library';
import RightCol from "./RightCol";
import LeftCol from "./LeftCol";
import { Row } from 'react-materialize';

export default function Resume() {
  return (
    <Container width={70} className="resume-container">
      <Row className="wrapper-row">
        <RightCol />
        <LeftCol />
      </Row>
    </Container>
  );
}
