import React from "react";
import { Typography } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Experience() {
  return (
    <div className="experience-container">
      <Row>
        <Col s={12}>
          <Typography type="header5" thin>Experience</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="subText" thin>2018 - Present</Typography>
          <Typography type="header6"className="header-text" >Software Engineer</Typography>
          <Typography type="subText" className="header-text" thin>Liberty Mutual Insurance</Typography>
          <Typography type="body" className="body-text">
            Specialized in MERN full stack for web apps and help lead the team in development,
            well-architected design principles, innovation disciplines, and reinforcing relationships
            built on trust.
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
