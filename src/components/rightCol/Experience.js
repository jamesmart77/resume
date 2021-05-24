import React from "react";
import {Icon, Typography} from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Experience() {
  return (
    <div className="experience-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon type="hardware" size="xs" />
          <Typography type="header5" thin>Experience</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="subText" thin className="secondary-text">2018 - Present</Typography>
          <Typography type="header6"className="header-text">Software Engineer</Typography>
          <Typography type="subText" className="header-text secondary-text" thin>Liberty Mutual Insurance</Typography>
          <Typography type="body" className="body-text secondary-text">
            Specialize in MERN full stack for web apps and help lead the team in development,
            well-architected design principles, innovation disciplines, mentoring, and reinforcing relationships
            built on trust.
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="subText" thin className="secondary-text">2015 - 2018</Typography>
          <Typography type="header6"className="header-text">IT Project Coordinator / Data Analyst</Typography>
          <Typography type="subText" className="header-text secondary-text" thin>Liberty Mutual Insurance</Typography>
          <Typography type="body" className="body-text secondary-text">
            Automated Liberty Gateway non-employee management process and assisted in automation of Supplier
            Relationship management processes. Also worked to support organization's agile transformation and
            present metrics for data driven decisions.
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="subText" thin className="secondary-text">2013-2015</Typography>
          <Typography type="header6"className="header-text">Project Analyst</Typography>
          <Typography type="subText" className="header-text secondary-text" thin>Bottomline Technologies</Typography>
          <Typography type="body" className="body-text secondary-text">
            Worked with Digital Banking clients for enterprise software implementations and configurations. Also
            made concerted efforts to automate resource management reporting for program lines.
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
