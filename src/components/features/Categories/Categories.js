import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from '../../../redux/categoryRedux';

const Categories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <div className='text-center'>
      <Row>
        <Col className="text-center">
          <h1>All categories</h1>
        </Col>
      </Row>
      {categories.map(category => (
        <Card key={category}>
          <Card.Header>
            <Link to={"/category/" + category}>{category}</Link>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
}

export default Categories;