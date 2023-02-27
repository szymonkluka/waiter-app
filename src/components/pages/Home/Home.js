import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";

const Home = () => {

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h1>All tables</h1>
          <Link to="/post/add"><Button className="mb-5" variant="outline-info">Add post</Button></Link>
        </Col>
      </Row>
      <Posts />
    </>
  )
}

export default Home;