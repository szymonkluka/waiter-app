import { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostByID } from "../../../redux/postsRedux";
import { deletePost } from "../../../redux/postsRedux";
import React from 'react';
import { dateToStr } from '../../../utlis/dateTostr';

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostByID(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const removePostClick = () => {
    dispatch(deletePost(postData.id))
    setShow();
  };

  if (!postData) return <Navigate to="/" />;
  else
    return (
      <>
        <div className="center">
          <Col className="col-9">
            <Card className="border-0">
              <Card.Body>
                <Card.Title><h1>{postData.title}</h1></Card.Title>
                <Card.Title><h1>{postData.title2}</h1></Card.Title>
                <Card.Text className="my-0"><strong>Author: </strong>{postData.author}</Card.Text>
                <Card.Text className="my-0"><strong>Published: </strong>{dateToStr(postData.publishedDate)}</Card.Text>
                <Card.Text className="my-0"><strong>Category:</strong>{postData.category}</Card.Text>
                <Card.Text className="my-2"><strong>Short description: </strong>{postData.description}</Card.Text>
                <Card.Text dangerouslySetInnerHTML={{ __html: postData.mainContent }} />
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <>
              <Link to={"/post/edit/" + postData.id}><Button className="my-3 mx-3" variant="outline-info">Edit</Button></Link>
              <Button variant="danger" className="btn btn-danger" onClick={handleShow}>
                Delete
              </Button>
              <Modal show={show}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <>The operation will delete post. Are you sure?</>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={removePostClick}>Remove</Button>
                  </Modal.Footer>
                </Modal.Footer>
              </Modal>
            </>
          </Col>
        </div>
      </>

    )
}

export default SinglePost;