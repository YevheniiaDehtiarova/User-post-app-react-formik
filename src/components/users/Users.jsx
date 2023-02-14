import "./Users.css";
import React, { useState, useEffect } from "react";
import Input from "../input/input";
import Table from "../table/Table";
import UserForm from "../user-form/UserForm";

const EMPTY_ARR = [];

function Users({ users }) {
  const formikSlice = users || EMPTY_ARR;

  const [userFormActive, setUserFormActive] = useState(false);
  const [tableRows, setTableRows] = useState(formikSlice);
  const [rowData, setRowData] = useState(null);
  const [updateTableRows, setUpdateTableRows] = useState(null);

  useEffect(() => {
    //console.log('works useeffect in table');
    setTableRows(formikSlice);
  }, [formikSlice, tableRows]);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props) => {
        const { original } = props.cell.row;
        return <Input name={`${original.firstName} ${original.lastName}`} />;
      },
    },
    {
      Header: "Email",
      id: "email",
      Cell: (props) => {
        const { original } = props.cell.row;
        return <Input name={original.email} />;
      },
    },
    {
      Header: "Address",
      id: "address",
      Cell: (props) => {
        const { original } = props.cell.row;
        return <Input name={`${original.address.city} ${original.address.street} ${original.address.building}`} />;
      },
    },
    {
      Header: "Phone",
      id: "phone",
      Cell: (props) => {
        const { original } = props.cell.row;
        return <Input name={original.phone} />;
      },
    },
    {
      Header: "Actions",
      id: "actions",
      Cell: ({ row }) => (
        <div>
          <button type="button" onClick={() => onClickEditUser(row)}>
            edit
          </button>
        </div>
      ),
    },
  ];


  const onClickAddUser = () => {
    setUserFormActive(true);
  };

  const onClickEditUser = (row) => {
    setRowData(row.original);
    setUserFormActive(true);
  };

  const callBack = (user) => {
     if(user){
       if(JSON.stringify(user) !== JSON.stringify(rowData?.original)){
          const newState = [...tableRows];
           const findedElement = newState.find((item) => item.id === user.id);
           const index = newState.indexOf(findedElement)
           newState.splice(index, 1, user);
           setUpdateTableRows(newState);
       }
     }
  }



  return (
    <div className="field">
      <div>
        <button type="button" onClick={onClickAddUser}>
          Add user
        </button>
      </div>
      <Table data={tableRows} updateData={updateTableRows} columns={columns} rowKey="id" />
      <UserForm callBack={callBack}  active={userFormActive} setActive={setUserFormActive} row={rowData}></UserForm>
    </div>
  );
}

export default React.memo(Users);
