import React from "react";
import { Typography, Icon } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';

export default function Interests() {
  return (
    <div className="interests-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon type="favorite" size="xs" />
          <Typography type="header5" thin>Interests</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={4} className="col-wrapper">
          <div className="wrapper">
            <Icon type="hiking" />
            <Typography type="subText">Hiking</Typography>
          </div>
        </Col>
        <Col s={4} className="col-wrapper">
          <div className="wrapper">
            <Icon type="sailing" />
            <Typography type="subText">Boating</Typography>
          </div>
        </Col>
        <Col s={4} className="col-wrapper">
          <div className="wrapper">
            <Icon type="menu_book" />
            <Typography type="subText">Reading</Typography>
          </div>
        </Col>
      </Row>
      <Row>
        <Col s={6} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon type="groups" />
            <Typography type="subText">Friends & Fam</Typography>
          </div>
        </Col>
        <Col s={6} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon type="developer_mode" />
            <Typography type="subText">Coding, even for fun</Typography>
          </div>
        </Col>
      </Row>
    </div>
  );
}
