import React from "react";
import { Container } from '@lmig/gllt-react-component-library';
import { Col } from 'react-materialize';
import Header from './rightCol/Header';
import Skills from './rightCol/Skills';
import Experience from './rightCol/Experience';
import { Slide } from 'react-reveal';

export default function RightCol() {
  return (
      <Col m={6} s={12} className="right-col push-m6">
        <Container width={80} className="col-container">
          <Slide right>
            <Header />
          </Slide>
          <Slide right>
            <Skills />
          </Slide>
          <Slide right>
            <Experience />
          </Slide>
        </Container>
      </Col>
  );
}
