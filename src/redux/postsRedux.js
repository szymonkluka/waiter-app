export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);


export const getTables = payload => ({ type: GET_TABLES, payload });
export const editedTables = payload => ({ type: EDIT_TABLES, payload })

const createActionName = actionName => `app/tables/${actionName}`;


const GET_TABLES = createActionName('GET_TABLES');

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
      .then((response) => response.json())
      .then((data) => dispatch(getTables(data)));
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLES:
      return statePart.map(table => (table.id === action.payload.id) ? { ...table, ...action.payload } : table);
    case GET_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

const createActionNames = (action) => {
  return `app/status/${action}`;
};

const EDIT_TABLES = createActionNames('EDIT_DATA');



export const addChangedData = (tables) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tables)
    };
    fetch(`${'http://localhost:3131'}/tables/${tables.id}`, options)
      .then((response) => response.json())
      .then((data) => dispatch(editedTables(data)));
  };
}

