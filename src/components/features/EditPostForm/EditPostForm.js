import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPostByID } from "../../../redux/postsRedux";
import { editPost } from '../../../redux/postsRedux';
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostByID(state, id));

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
      title={postData.title}
      title2={postData.title2}
      category={postData.category}
      author={postData.author}
      publishedDate={postData.publishedDate}
      description={postData.description}
      mainContent={postData.mainContent}
    />

  )
}

export default EditPostForm;