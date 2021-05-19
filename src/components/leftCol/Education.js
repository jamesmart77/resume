import React from "react";
import { Typography, Icon } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Education() {
  return (
    <div className="education-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon type="school" size="xs" />
          <Typography type="header5" thin>Education</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="header6"className="header-text">Bachelor of Science in Business Administration</Typography>
          <Typography type="subText" className="header-text secondary-text" thin>University of New Hampshire</Typography>
          <Typography type="body" className="body-text secondary-text">
            Dual concentrations in Management and Information Systems Management
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="header6"className="header-text">Coding Boot Camp - Full Stack Web Development</Typography>
          <Typography type="subText" className="header-text secondary-text" thin>University of New Hampshire</Typography>
          <Typography type="body" className="body-text secondary-text">
            An intensive 24-week long boot camp dedicated to designing and building web applications.
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
