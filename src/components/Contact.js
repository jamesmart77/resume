import { Row, Col } from 'react-materialize';
import { Slide } from 'react-reveal';

export default function Contact() {
  return (
    <Slide left>
      <section className="contact-container">
        <Row className="wrapper">
          <Col s={12} className="contact-col">
            <h6 className="header">Call</h6>
            <p className="info">603.509.8454</p>
            <p className="mid-header">or</p>
            <h6 className="header">Email</h6>
            <a
              href='mailto:jamesmart77@gmail.com'
              target='_blank'
              rel="noreferrer noopener"
            >
              <p className="info">jamesmart77@gmail.com</p>
            </a>
          </Col>
        </Row>
      </section>
    </Slide>
  );
}