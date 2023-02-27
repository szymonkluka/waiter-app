import { Col, Row } from "react-bootstrap";

import Posts from "../../features/Posts/Posts";

const Home = () => {

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h1>All tables</h1>
        </Col>
      </Row>
      <Posts />
    </>
  )
}

export default Home;