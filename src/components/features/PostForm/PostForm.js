import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Form, Row, FormControl } from 'react-bootstrap';
import { addChangedData } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post2 } from '../../../post2';
import { getPostById } from '../../../redux/postsRedux';


const PostForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PostID = useSelector((state) => getPostById(state, id));
  const [post, setPost] = useState(
    post2 && PostID
  );


  const handleSubmit = (value) => {
    const editedData = {
      id, title, status, content1, content2, moneyAmmount,
    };
    dispatch(addChangedData(editedData));
    navigate('/');
    setPost(PostID);
    setStatus(post.status)
    setContent1(post.content1)
    setContent2(post.content2)
    setMoneyAmmount(post.moneyAmmount)
  };

  const [title] = useState(post.title)
  const [status, setStatus] = useState(post.status);
  const [content1, setContent1] = useState(post.content1);
  const [content2, setContent2] = useState(post.content2);
  const [moneyAmmount, setMoneyAmmount] = useState(post.moneyAmmount);


  const handleStatus = (value) => {

    if (value === 'Free' || value === 'Cleaning') {
      setContent1('0');
    }
    setStatus(value);
  };


  return (
    <Row className="justify-content-center">
      <Col className="col-12">
        <Form>
          <h2>
            <strong>{post.title}</strong>
          </h2>

          <div className="mb-2" controlId="formBasicEmail">
            <div className="d-flex">
              <div className="p-1 flex me-2"><Form.Label style={({ marginRight: "5px" })}><strong>Status:</strong></Form.Label></div>
              <div className="">
                <Form.Select aria-label="Default select example"
                  value={status}
                  onChange={(e) => handleStatus(e.target.value)}
                  placeholder="Nr" style={{ width: "280px", height: "40px", }}
                >
                  <option value='Free'>Free</option>;
                  <option value='Reserved'>Reserved</option>;
                  <option value='Busy'>Busy</option>;
                  <option value='Cleaning'>Cleaning</option>;
                </Form.Select>
              </div>
            </div>
          </div>

          {status === 'Busy' ? (
            <div className="mb-2" controlId="formBasicEmail">
              <div className="d-flex">
                <div className="p-1 flex-2"><Form.Label style={({ marginLeft: "0px" })}><strong>Ammount:</strong></Form.Label></div>
                <div className="p-2 flex-2"><Form.Label style={({ marginLeft: "20px" })}>$</Form.Label></div>
                <div className="p-1 flex">
                  <FormControl
                    value={moneyAmmount}
                    onChange={(e) => setMoneyAmmount(e.target.value)}
                    placeholder="Nr" style={{ width: "45px", height: "30px", marginRigt: "50px", }} />

                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <div className="mb-2" controlId="formBasicEmail">
            <div className="d-flex">
              <div className="p-1 flex-2 me-4"><Form.Label style={({ marginLeft: "0px" })}><strong>People:</strong></Form.Label></div>
              <div className="p-1 flex">
                <FormControl
                  input type="number"
                  min="1"
                  max="10"
                  value={content1}
                  onChange={(e) => setContent1(e.target.value)}
                  placeholder="Nr" style={{ width: "58px", height: "30px", textAlign: "center", marginRigt: "50px", }} />

              </div>
              <div className="p-2 flex-2">/</div>
              <div className="p-1 flex">
                <FormControl
                  input type="number"
                  min="1"
                  max="10"
                  value={content2}
                  onChange={(e) => setContent2(e.target.value)}
                  placeholder="Nr" style={{ width: "58px", height: "30px", marginRigt: "50px", }} />
              </div>
            </div>
          </div>
          <Button onClick={(handleSubmit)}>Add post
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm
