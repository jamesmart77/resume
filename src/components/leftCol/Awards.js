import { Row, Col, Icon } from 'react-materialize';

export default function Awards() {
  return (
    <section className="awards-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon tiny>star</Icon>
          <h5 className="thin">Awards</h5>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h6 className="header-text">2019 Excellence Award</h6>
          <p className="body-text secondary-text">
            Member of development squad that developed the Performance & Talent Review Summary application.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h6 className="header-text">Two Time Hackathon Winner</h6>
          <p className="body-text secondary-text">
            Member of squad with back-to-back wins for a real estate utilization app and
            enterprise career objectives/growth app.
          </p>
        </Col>
      </Row>
    </section>
  );
}
