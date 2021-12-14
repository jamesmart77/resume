import { Row, Col, Icon } from 'react-materialize';

export default function Experience() {
  return (
    <section className="experience-container">
      <Row>
        <Col s={12} className="section-header">
          <Icon tiny>build</Icon>
          <h5 className="thin">Experience</h5>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p className="sub-text secondary-text">2018 - Present</p>
          <h6 className="header-text">Software Engineer</h6>
          <p className="sub-text header-text secondary-text">Liberty Mutual Insurance</p>
          <p className="body-text secondary-text">
            Specialize in Postgres, Express.Js, React, and NodeJs full stack for web apps while helping lead the team in development,
            well-architected design principles, innovation disciplines, mentoring, and reinforcing relationships
            built on trust. Promotion path: Software Engineer, to Senior, to Principal.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p className="sub-text secondary-text">2015 - 2018</p>
          <h6 className="header-text">IT Project Coordinator / Data Analyst</h6>
          <p className="sub-text header-text secondary-text">Liberty Mutual Insurance</p>
          <p className="body-text secondary-text">
            Automated Liberty Gateway non-employee management process and assisted in automation of Supplier
            Relationship management processes. Also worked to support organization's agile transformation and
            present metrics for data driven decisions.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p className="sub-text secondary-text">2013-2015</p>
          <h6 className="header-text">Project Analyst / Quality Assurance</h6>
          <p className="sub-text header-text secondary-text">Bottomline Technologies</p>
          <p className="body-text secondary-text">
            Worked with Digital Banking clients for enterprise software implementations and configurations. Also
            made concerted efforts to automate resource management reporting for program lines using VBA. Constructed
            technical documentation for clients and ran creative testing scripts to ensure product quality.
          </p>
        </Col>
      </Row>
    </section>
  );
}
