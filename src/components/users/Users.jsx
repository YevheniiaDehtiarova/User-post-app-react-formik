import "./Users.css";
import React, { useState, useEffect } from "react";
import Input from "../input/input";
import Table from "../table/Table";
import UserForm from "../user-form/UserForm";
import UserDetail from "../user-detail/UserDetail";

const EMPTY_ARR = [];

function Users({ users }) {
  const formikSlice = users || EMPTY_ARR;

  const [userFormActive, setUserFormActive] = useState(false);
  const [tableRows, setTableRows] = useState(formikSlice);
  const [rowData, setRowData] = useState(null);
  const [updateTableRows, setUpdateTableRows] = useState(null);

  const [tableRow, setTableRow] = useState("");
  const [userDetailActive, setUserDetailActive]= useState(false);

  const [userTableActive, setUserTableActive]=useState(true);

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
        <div className="user-btn-block">
          <button className="user-btn" type="button" onClick={() => onClickEditUser(row)}>
            edit
          </button>
          <button className="user-btn" type="button" onClick={() => onClickOpenUser(row)}>
            open
          </button>
        </div>
      ),
    },
  ];


  const onClickAddUser = () => {
    setUserFormActive(true);
    setUserTableActive(false);
    //console.log(userTableActive, 'USER TABLE ACTIVE ADD ROW')
  };
  const onClickOpenUser  = (row) => {
    //console.log(row, 'ROW IN OPEN TABLE ROW');
    setTableRow(row.original);
    setUserDetailActive(true);
    setUserTableActive(false);
    //console.log(userTableActive, 'USER TABLE ACTIVE OPEN ROW')
  }

  const onClickEditUser = (row) => {
    setRowData(row.original);
    setUserFormActive(true);
    setUserTableActive(false);
    //console.log(userTableActive, 'USER TABLE ACTIVE EDITE ROW')
  };

  const getUserFromUserForm = (user) => {
    //console.log('работает колбэк')
    setUserTableActive(true);
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

  const getUserDetailStatus = (status) => {
    //console.log('работает колбэк с дитейла');
    //console.log(status, 'STATUS FROM CALLBACK');
    if (!status) {
      setUserTableActive(true);
    }
  }


  return (
    <div className="field">
      <div>
        {userTableActive && 
        <button className="user-btn" type="button" onClick={onClickAddUser}>
          Add user
        </button>
       }  
      </div>
      <Table data={tableRows} updateData={updateTableRows} columns={columns}  active ={userTableActive} setActive={setUserTableActive} rowKey="id" />
      <UserForm sendUpdateUser={getUserFromUserForm}  active={userFormActive} setActive={setUserFormActive} row={rowData}></UserForm>
      <UserDetail sendUpdateStatus={getUserDetailStatus} tableRow={tableRow} active={userDetailActive} setActive={setUserDetailActive}/>
    </div>

  );
}

export default React.memo(Users);
