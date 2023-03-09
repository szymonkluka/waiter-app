import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from '../../../redux/postsRedux';
import TableForm from '../TableForm/TableForm';

const EditTableForm = () => {

  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));


  return (
    <TableForm
      actionText="Edit table"
      status={tableData.status}
      currentPeople={tableData.currentPeople}
      maxPeople={tableData.maxPeople}
      bill={tableData.bill}
    />

  )
}

export default EditTableForm;