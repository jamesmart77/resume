import React from "react";
import { Col } from 'react-materialize';
import {Container} from "@lmig/gllt-react-component-library";
import {Slide} from "react-reveal";
import Education from "./leftCol/Education";
import Awards from "./leftCol/Awards";
import Expertise from "./leftCol/Expertise";
import Interests from "./leftCol/Interests";

export default function LeftCol() {
  return (
      <Col m={6} s={12} className="left-col pull-m6">
        <Container width={80} className="col-container">
          <Slide left>
            <Education />
          </Slide>
          <Slide left>
            <Awards />
          </Slide>
          <Slide left>
            <Expertise />
          </Slide>
          <Slide left>
            <Interests />
          </Slide>
        </Container>
      </Col>
  );
}
