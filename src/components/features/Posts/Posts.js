import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";

import React from 'react';

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={1} lg={1}>
      {posts.map(post => (
        <Col key={post.id}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <div className="p-1 flex-3">
                  <strong><h2>{post.title}</h2></strong></div>
                <div className="p-3 flex-2"><strong>Status: </strong>{post.category}</div>
                <div className="ms-auto p-2">
                  <Link to={"/post/edit/" + post.id}>
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
}

export default Posts;