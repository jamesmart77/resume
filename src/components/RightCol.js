import React from "react";
import { Container } from '@lmig/gllt-react-component-library';
import { Col } from 'react-materialize';
import Header from './rightCol/Header';
import Skills from './rightCol/Skills';
import { Slide } from 'react-reveal';

export default function RightCol() {
  return (
      <Col m={6} s={12} className="right-col push-m6">
        <Slide right>
          <Container width={80}>
            <Header />
            <Skills />
          </Container>
        </Slide>
      </Col>
  );
}
