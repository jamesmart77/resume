import React from "react";
import { Typography, Icon } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Expertise() {
  return (
    <div className="expertise-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon type="psychology" size="xs" />
          <Typography type="header5" thin>Expertise & Focus</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <ul className="list">
            <li className="list-item">
              <Typography type="body" className="body-text secondary-text">User Centric App Design</Typography>
            </li>
            <li className="list-item">
              <Typography type="body" className="body-text secondary-text">Innovation & Creative Thinking</Typography>
            </li>
            <li className="list-item">
              <Typography type="body" className="body-text secondary-text">Web App Development</Typography>
            </li>
            <li className="list-item">
              <Typography type="body" className="body-text secondary-text">Building Relationships on Trust</Typography>
            </li>
            <li className="list-item">
              <Typography type="body" className="body-text secondary-text">Test Driven Development</Typography>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
