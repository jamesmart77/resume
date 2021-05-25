import React from "react";
import { Typography, Icon } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Awards() {
  return (
    <div className="awards-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon type="emoji_events" size="xs" />
          <Typography type="header5" thin>Awards</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="header6"className="header-text">2019 Excellence Award</Typography>
          <Typography type="body" className="body-text secondary-text">
            Member of development squad that developed the Performance & Talent Review Summary application.
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Typography type="header6"className="header-text">Two Time Hackathon Winner</Typography>
          <Typography type="body" className="body-text secondary-text">
            Member of squad with back-to-back wins for a real estate utilization app and
            enterprise career objectives/growth app.
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
