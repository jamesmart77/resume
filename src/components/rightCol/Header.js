import React from "react";
import { Typography } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';
import linkedInImg from '../../images/linkedIn.png';
import githubImg from '../../images/github.jpeg';
import portfolioImg from '../../images/portfolio.png';

export default function Header() {
  return (
    <div className="header-container">
      <Row>
        <Col s={12}>
          <Typography type="header3" thin>James</Typography>
        </Col>
        <Col s={12}>
          <Typography type="header2">Martineau</Typography>
        </Col>
        <Col m={7} s={12}>
          <div className="job-title">
            <Typography type="header6">
              Senior Software Engineer
            </Typography>
          </div>
        </Col>
      </Row>
      <Row className="links-row">
        <Col s={4} className="link-col">
          <a
            href="https://jamesmart77.github.io/portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={portfolioImg} alt="" className="link-icon" />
            <Typography type="subText">Portfolio</Typography>
          </a>
        </Col>
        <Col s={4} className="link-col">
          <a
            href="https://www.linkedin.com/in/jamesrmartineau"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedInImg} alt="" className="link-icon" />
            <Typography type="subText">jamesmartineau</Typography>
          </a>
        </Col>
        <Col s={4} className="link-col">
          <a
            href="https://github.com/jamesmart77"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={githubImg} alt="" className="link-icon" />
            <Typography type="subText">jamesmart77</Typography>
          </a>
        </Col>
      </Row>
    </div>
  );
}
