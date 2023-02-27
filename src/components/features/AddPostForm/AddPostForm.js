import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import shortid from 'shortid';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(addPost({ id: shortid(), ...post }));
    navigate('/');
  };

  return <PostForm action={handleSubmit} />
}

export default AddPostForm