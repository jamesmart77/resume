import { Row, Container } from 'react-materialize';
import RightCol from "./RightCol";
import LeftCol from "./LeftCol";

export default function Resume() {
  return (
    <Container width={70} className="resume-container">
      <Row className="wrapper-row">
        <RightCol />
        <LeftCol />
      </Row>
    </Container>
  );
}
