import { Col, Row } from "react-bootstrap";

import Tables from "../../features/Tables/Tables";

const Home = () => {

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h1>All tables</h1>
        </Col>
      </Row>
      <Tables />
    </>
  )
}

export default Home;