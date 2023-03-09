import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Form, Row, FormControl } from 'react-bootstrap';
import { addChangedData } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTableById } from '../../../redux/postsRedux';
import { useForm } from 'react-hook-form';


const TableForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const table = useSelector((state) => getTableById(state, id));
  // const [post, setPost] = useState(
  //   post2 && PostID
  // );

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const handleSubmit = (value) => {

    const handleStatus2 = (value) => {
      if (setMaxPeopleAmount < (peopleAmount)) {
        // eslint-disable-next-line no-unused-expressions
        setPeopleAmount === setMaxPeopleAmount;

      }

      setMaxPeopleAmount(peopleAmount);

    };
    if (maxPeopleAmount < (peopleAmount)) {
      alert("The number of customers cannot exceed the maximum number of customers at the table. Please change input nr 1 in People form.");
      return
    }

    else {
      const editedData = {
        id, title, status, peopleAmount, maxPeopleAmount, bill,
      };
      dispatch(addChangedData(editedData, handleStatus2));
      navigate('/');
    }


    // to Cie juz nie obchodzi, bo usunąłeś ten komponent i przeszedłeś na home page:
    // setPost(PostID);
    // setStatus(post.status)
    // setContent1(post.content1)
    // setContent2(post.content2)
    // setMoneyAmmount(post.moneyAmmount)
  };

  const [title] = useState(table.title)
  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);


  const handleStatus = (value) => {



    if (value === 'Free' || value === 'Cleaning') {
      setPeopleAmount('0');
    }
    if (value === 'Busy') {
      setBill('0');
    }
    setStatus(value);

  };

  const handleStatus2 = (value) => {
    if (setMaxPeopleAmount < (peopleAmount)) {
      // eslint-disable-next-line no-unused-expressions
      setPeopleAmount === setMaxPeopleAmount;

    }

    setMaxPeopleAmount(peopleAmount);

  };



  return (
    <Row className="justify-content-center">
      <Col className="col-12">
        <Form>
          <h2>
            <strong>{table.title}</strong>
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

          <div className="mb-2" controlId="formBasicEmail">
            <div className="d-flex">
              <div className="p-1 flex-2 me-4"><Form.Label style={({ marginLeft: "0px" })}><strong>People:</strong></Form.Label></div>
              <div className="p-1 flex">
                <FormControl
                  {...register("description", { required: true, min: 1 })}
                  input type="number"
                  min="0"
                  max="10"
                  value={peopleAmount}
                  onChange={(e) => setPeopleAmount(e.target.value)}
                  placeholder="Nr" style={{ width: "58px", height: "30px", textAlign: "center", marginRigt: "50px", }} />
                {errors.description && <small className="d-block form text-danger mt-2">This field is required (minimal value: 1)</small>}
              </div>
              <div className="p-2 flex-2">/</div>
              <div className="p-1 flex">
                <FormControl
                  {...register("descriptions", { required: true, min: 1 })}
                  input type="number"
                  min="0"
                  max="10"
                  value={maxPeopleAmount}
                  onChange={(e) => handleStatus2(e.target.value)}
                  placeholder="Nr" style={{ width: "58px", height: "30px", marginRigt: "50px", }} />
                {errors.descriptions && <small className="d-block form text-danger mt-2">This field is required (minimal value: 1)</small>}
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
                    {...register("descriptionS", { required: true, min: 1 })}
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="Nr" style={{ width: "45px", height: "30px", marginRigt: "50px", }} />
                  {errors.descriptionS && <small className="d-block form text-danger mt-2">This field is required (minimal value: 1)</small>}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <Button
            onClick={validate(handleSubmit)}
            className="my-3">Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default TableForm
