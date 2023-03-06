import EditPostForm from "../../features/EditPostForm/EditPostForm";
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PostEdit = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  return (
    <>
      <div className="mb-2">
        <h1 className="mb-3">{postData.id}</h1>
      </div>
      <EditPostForm />
    </>
  )
}

export default PostEdit;