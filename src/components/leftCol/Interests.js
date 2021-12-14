import { Row, Col, Icon } from 'react-materialize';

export default function Interests() {
  return (
    <section className="interests-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon tiny>favorite</Icon>
          <h5 className="thin">Interests</h5>
        </Col>
      </Row>
      <Row>
        <Col s={4} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon small>directions_walk</Icon>
            <p className="sub-text">Hiking</p>
          </div>
        </Col>
        <Col s={4} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon small>directions_boat</Icon>
            <p className="sub-text">Boating</p>
          </div>
        </Col>
        <Col s={4} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon small>import_contacts</Icon>
            <p className="sub-text">Reading</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col s={6} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon small>group</Icon>
            <p className="sub-text">Friends & Fam</p>
          </div>
        </Col>
        <Col s={6} className="col-wrapper">
          <div className="lg-wrapper">
            <Icon small>developer_mode</Icon>
            <p className="sub-text">Coding, even for fun 🤓</p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
