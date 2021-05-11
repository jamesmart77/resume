import React from "react";
import { Typography } from '@lmig/gllt-react-component-library';
import { Row, Col } from 'react-materialize';
import SkillBar from "react-skillbars";

export default function Skills() {
  const skills = [
    {
      "type": "React",
      "level": 100
    },
    {
      "type": "Testing",
      "level": 95
    },
    {
      "type": "Node.Js",
      "level": 95
    },
    {
      "type": "SQL",
      "level": 85
    },
    {
      "type": "AWS",
      "level": 65
    },
    {
      "type": "Java/Spring",
      "level": 60
    },
  ]
  const colors = {
    "bar": "#aeeded",
    "title": {
      "text": "#ffd000",
      "background": "#06748c"
    }
  };

  return (
    <div className="skills-container">
      <Row>
        <Col s={12}>
          <Typography type="header5" thin>Skills</Typography>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <SkillBar
            height="2rem"
            skills={skills}
            colors={colors}
            animationDelay={1000}
            animationDuration={1500}
          />
        </Col>
      </Row>
    </div>
  );
}
