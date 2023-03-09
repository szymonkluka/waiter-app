import EditTableForm from "../../features/EditTableForm/EditTableForm";
import { getTableById } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const TableEdit = () => {
  const { id } = useParams();
  const tableId = useSelector(state => getTableById(state, id));

  return (
    <>
      <div className="mb-2">
        <h1 className="mb-3">{tableId.id}</h1>
      </div>
      <EditTableForm />
    </>
  )
}

export default TableEdit;