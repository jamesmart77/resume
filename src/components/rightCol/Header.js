import { Row, Col } from 'react-materialize';
import linkedInImg from '../../images/linkedIn.png';
import githubImg from '../../images/github.jpeg';
import portfolioImg from '../../images/portfolio.png';

export default function Header() {
  return (
    <div className="header-container">
      <Row>
        <Col s={12}>
          <h3 className="thin">James</h3>
        </Col>
        <Col s={12}>
          <h2>Martineau</h2>
        </Col>
        <Col l={10} s={11}>
          <div className="job-title">
            <h6>
              Principal Software Engineer
            </h6>
          </div>
        </Col>
      </Row>
      <Row className="links-row">
        <Col xl={3} l={4} m={5} s={3} className="link-col">
          <a
            href="https://jamesmart77.github.io/portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={portfolioImg} alt="portfolio" className="link-icon" />
            <p className="sub-text">Portfolio</p>
          </a>
        </Col>
        <Col s={5} className="link-col center-col">
          <a
            href="https://www.linkedin.com/in/jamesrmartineau"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedInImg} alt="LinkedIn" className="link-icon" />
            <p className="sub-text">jamesmartineau</p>
          </a>
        </Col>
        <Col s={4} className="link-col">
          <a
            href="https://github.com/jamesmart77"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={githubImg} alt="github" className="link-icon" />
            <p className="sub-text">jamesmart77</p>
          </a>
        </Col>
      </Row>
    </div>
  );
}
