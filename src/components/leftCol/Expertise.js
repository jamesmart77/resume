import { Row, Col, Icon  } from 'react-materialize';

export default function Expertise() {
  return (
    <section className="expertise-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon tiny>highlight</Icon>
          <h5 className="thin">Expertise & Focus</h5>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <ul className="list">
            <li className="list-item">
              <p className="body-text secondary-text">User Centric App Design</p>
            </li>
            <li className="list-item">
              <p className="body-text secondary-text">Innovation & Creative Thinking</p>
            </li>
            <li className="list-item">
              <p className="body-text secondary-text">Web App Development</p>
            </li>
            <li className="list-item">
              <p className="body-text secondary-text">Building Relationships on Trust</p>
            </li>
            <li className="list-item">
              <p className="body-text secondary-text">Test Driven Development</p>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
}
