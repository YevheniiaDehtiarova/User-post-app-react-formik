import "./users.css";
import React, {useState,useEffect,useCallback, useMemo} from "react";
import Input from "../input/input";
import Table from "../table/table";

const EMPTY_ARR = [];

function Users({ users, handleAdd, handleEdit }) {
  //console.log(users);
  //const { values } = useFormikContext();
  //console.log(values);
  //const formikSlice = getIn(values, users)|| EMPTY_ARR;
  const formikSlice = users || EMPTY_ARR;

  const [tableRows, setTableRows] = useState(formikSlice);

  useEffect(() => {
    //console.log(tableRows);
    setTableRows(formikSlice);
  }, [formikSlice, tableRows]);

  const onAdd = useCallback(() => {
    const newState = [...tableRows];
    const item = {
      id: Math.floor(Math.random() * 100) / 10,
      firstName: "",
      lastName: ""
    };

    newState.push(item);
    setTableRows(newState);
    handleAdd(item);
  }, [handleAdd, tableRows]);


  const onEdit = useCallback(
    (index)=> {
        const newState = [...tableRows];
        const findedTableElement = newState.find((user) => user.id === index);
        newState.splice(index, 1, findedTableElement);
        setTableRows(newState);
        handleEdit(findedTableElement);
    }, [handleEdit, tableRows]
  )

  const columns = useMemo(
    () => [
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
        Cell: ({ row: { index } }) => (
          <button type="button" onClick={() => onEdit(index)}>
            edit
          </button>
        )
      }
    ],
    [users, onEdit]
  );

  return (
    <div className="field">
         <div>
        <button type="button" onClick={onAdd}>
          Add user
        </button>
      </div>
      <Table data={tableRows} columns={columns} rowKey="id" />

    </div>
  );
}

export default React.memo(Users);
