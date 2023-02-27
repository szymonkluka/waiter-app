import EditPostForm from "../../features/EditPostForm/EditPostForm";
import { getPostByID } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PostEdit = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostByID(state, id));


  return (
    <>
      <div className="mb-2">
        <h1 className="mb-3">{postData.title}</h1>
      </div>
      <EditPostForm />
    </>
  )
}

export default PostEdit;