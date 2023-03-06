import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit post"
      status={postData.status}
      currentPeople={postData.currentPeople}
      maxPeople={postData.maxPeople}
      bill={postData.bill}
    />

  )
}

export default EditPostForm;