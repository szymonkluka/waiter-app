import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css'; // ES6
import { useForm } from 'react-hook-form';
import { FormControl } from 'react-bootstrap';


const PostForm = ({ action, ...props }) => {

  const changeStatus = (value) => {
    if (value === 'Free' && value === 'Cleaning') {
      setAuthor('0');
    }
    if (value === 'Busy') {
      setDescription('0');
    }
    if (value === 'Cleaning') {
      setAuthor('0');
    }
    setCategory(value);

  };


  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [category, setCategory] = useState(props.category);
  const [title] = useState(props.title);
  const [title2, setTitle2] = useState(props.title2)
  const [author, setAuthor] = useState(props.author);
  const [description, setDescription] = useState(props.description);



  const handleSubmit = () => {
    action({ title, title2, author, description, category });
  };

  return (


    <Row className="justify-content-center">
      <Col className="col-12">

        <Form>

          <div className="mb-2" controlId="formBasicEmail">
            <div className="d-flex">
              <div className="p-1 flex me-2"><Form.Label style={({ marginRight: "5px" })}><strong>Category:</strong></Form.Label></div>
              <div className="">
                <Form.Select aria-label="Default select example"
                  value={category}
                  onChange={(e) => changeStatus(e.target.value)}
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

          {category === 'Busy' ? (
            <div className="mb-2" controlId="formBasicEmail">
              <div className="d-flex">
                <div className="p-1 flex-2"><Form.Label style={({ marginLeft: "0px" })}><strong>Ammount:</strong></Form.Label></div>
                <div className="p-2 flex-2"><Form.Label style={({ marginLeft: "20px" })}>$</Form.Label></div>
                <div className="p-1 flex">
                  <FormControl

                    {...register("description", { required: true, minLength: 1 })}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Nr" style={{ width: "45px", height: "30px", marginRigt: "50px", }} />
                </div>
              </div>
              {errors.description && <small className="d-block form text-danger mt-2">This field is required (minimal length: 20)</small>}
            </div>
          ) : (
            ''
          )}

          <div className="mb-2" controlId="formBasicEmail">
            <div className="d-flex">
              <div className="p-1 flex-2 me-4"><Form.Label style={({ marginLeft: "0px" })}><strong>People:</strong></Form.Label></div>
              <div className="p-1 flex">
                <FormControl
                  {...register("author", { required: true, minLength: 1 })}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Nr" style={{ category: category.reserved ? "none" : "inline-block", width: "45px", height: "30px", marginRigt: "50px", }} />
              </div>
              <div className="p-2 flex-2">/</div>
              <div className="p-1 flex">
                <FormControl
                  {...register("title2", { required: true, minLength: 1 })}
                  value={title2}
                  onChange={(e) => setTitle2(e.target.value)}
                  placeholder="Nr" style={{ width: "45px", height: "30px", marginRigt: "50px", }} />
              </div>
            </div>
            {errors.description && <small className="d-block form text-danger mt-2">This field is required (minimal length: 1)</small>}
          </div>

          <Button
            onClick={validate(handleSubmit)}
            className="my-3">Add post
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default PostForm;