import React from "react";
import { Typography } from '@lmig/gllt-react-component-library';
import { Col } from 'react-materialize';
import {Slide} from "react-reveal";

export default function LeftCol() {
  return (
      <Col m={6} s={12} className="left-col pull-m6">
    <Slide left>
        <Typography type="header4">Left Col</Typography>
    </Slide>
      </Col>
  );
}
