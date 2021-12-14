import { Row, Col, Icon } from 'react-materialize';

export default function Education() {
  return (
    <section className="education-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon tiny>school</Icon>
          <h5 className="thin">Education</h5>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h6 className="header-text">Bachelor of Science in Business Administration</h6>
          <p className="sub-text header-text secondary-text">University of New Hampshire</p> 
          <p className="body-text secondary-text">
            Dual concentrations in Management and Information Systems Management
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h6 className="header-text">Coding Boot Camp - Full Stack Web Development</h6>
          <p className="sub-text header-text secondary-text">University of New Hampshire</p>
          <p className="body-text secondary-text">
            An intensive 24-week long boot camp dedicated to designing and building web applications.
          </p>
        </Col>
      </Row>
    </section>
  );
}
