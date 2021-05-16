import React from "react";
import { Row, Col } from 'react-materialize';
import { Typography } from '@lmig/gllt-react-component-library';
import { Slide } from 'react-reveal';

export default function Contact() {
  return (
    <Slide left>
      <div className="contact-container">
        <Row className="wrapper">
          <Col s={12} className="contact-col">
            <Typography type="header6" className="header">Call</Typography>
            <Typography type="body">603.509.8454</Typography>
            <Typography type="body" className="mid-header">or</Typography>
            <Typography type="header6" className="header">Email</Typography>
            <a
              href='mailto:jamesmart77@gmail.com'
              target='_blank'
              rel="noreferrer noopener"
            >
              <Typography type="body">jamesmart77@gmail.com</Typography>
            </a>
          </Col>
        </Row>
      </div>
    </Slide>
  );
}