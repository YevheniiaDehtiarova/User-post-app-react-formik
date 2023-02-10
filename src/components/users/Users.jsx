import "./users.css";
import React, {useState,useEffect} from "react";
import Input from "../input/input";
import Table from "../table/Table";
import UserForm from '../user-form/UserForm';

const EMPTY_ARR = [];

function Users({ users, handleAdd, handleEdit }) {
  console.log(users);
  //const { values } = useFormikContext();
  //const formikSlice = getIn(values, users)|| EMPTY_ARR;
  const formikSlice = users || EMPTY_ARR;

  const [userFormActive, setUserFormActive] = useState(false);
  const [tableRows, setTableRows] = useState(formikSlice);
  const [rowData, setRowData] = useState(null)

  useEffect(() => {
    //console.log(tableRows);
    setTableRows(formikSlice);
  }, [formikSlice, tableRows]);

  const onAdd = () => {
    const newState = [...tableRows];
    //newState.push(item);
    //setTableRows(newState); //позже раскоментировать
    //handleAdd(item);
  }


  const onEdit = (row)=> {
    console.log(row, 'ROW FROM ONEDIT');
        const newState = [...tableRows];
        console.log(newState)
        const findedTableElement = newState.find((user) => user.id === row.id);
        console.log(findedTableElement)
        newState.splice(row.index, 1, findedTableElement);
        setTableRows(newState);
    }
  

  const columns =
    [
      {
        Header: "Name",
        accessor: "name",
        Cell: props => {
          const { original } = props.cell.row;
          return <Input name={`${original.firstName} ${original.lastName}`}/>;
        },
      },
      {
        Header: "Email",
        id: "email",
        Cell: props => {
          const { original } = props.cell.row;
          return <Input name={original.email}/>;
        },
      },
      {
        Header: "Address",
        id: "address",
        Cell: props => {
          const { original } = props.cell.row;
          return <Input name={`${original.address.city} ${original.address.street} ${original.address.building}`}/>;
        },
      },
      {
        Header: "Phone",
        id: "phone",
        Cell: props => {
          const { original } = props.cell.row;
          return <Input name={original.phone}/>;
        },
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row } ) => (
          <div>
          <button type="button" onClick={() => onClickEditUser(row)}>
            edit
          </button>
          </div>     
        )
      }
    ]
  
    const onClickAddUser = () => {
       //onAdd();
       setUserFormActive(true);
    }

    const onClickEditUser = (row) => {
      console.log(userFormActive, row,  'click edit user')
      // onEdit(row);
      setRowData(row); //если пришла строка то меняем стейт
      setUserFormActive(true);
    }

  return (
    <div className="field">
         <div>
        <button type="button" onClick={onClickAddUser}>
          Add user
        </button>
      </div>
      <Table data={tableRows} columns={columns} rowKey="id" />
      <UserForm active={userFormActive} setActive={setUserFormActive}  row={rowData}></UserForm>

    </div>
  );
}

export default React.memo(Users);
