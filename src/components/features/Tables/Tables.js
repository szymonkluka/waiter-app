import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../../redux/postsRedux';
import ClipLoader from "react-spinners/ClipLoader";

const Tables = () => {
  const tables = useSelector(getAllTables);
  if (!tables.length) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40vh',
      fontSize: '30px',
    }}> <ClipLoader size={150}></ClipLoader>Loading...</div>
  }

  else

    return (
      <Row xs={1} md={1} lg={1}>
        {tables.map(table => (
          <Col key={table.id}>
            <Card className="mb-3">
              <Card.Body>
                <div className="d-flex">
                  <div className="p-1 flex-3">
                    <strong><h2>{table.id}</h2></strong></div>
                  <div className="p-3 flex-2"><strong>Status: </strong>{table.status}</div>
                  <div className="ms-auto p-2">
                    <Link to={"/table/edit/" + table.id}>
                      <Button variant="primary">Show more</Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row >
    );

};

export default Tables