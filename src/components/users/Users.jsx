import "./Users.css";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Input from "../input/input";
import Table from "../table/Table";
import UserForm from "../user-form/UserForm";
import UserDetail from "../user-detail/UserDetail";



function Users({ users }) {
  const [tableRows, setTableRows] = useState(users);
  const [rowData, setRowData] = useState(null);
  const [tableRow, setTableRow] = useState("");
  const [activeComponent, setActiveComponent] = useState("userTable");

  useEffect(() => {
    setTableRows(users);
  }, [users]);

  const onClickAddUser = () => {
    setActiveComponent("userForm");
  };
  const onClickOpenUser = useCallback((row) => {
    setTableRow(row.original);
    setActiveComponent("userDetail");
  },[]);

  const onClickEditUser = useCallback((row) => {
    setRowData(row.original);
    setActiveComponent("userForm");
  },[]);

  const columns = useMemo(() => [
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
        return (
          <Input
            name={`${original.address.city} ${original.address.street} ${original.address.building}`}
          />
        );
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
          <button
            className="user-btn"
            type="button"
            onClick={() => onClickEditUser(row)}
          >
            edit
          </button>
          <button
            className="user-btn"
            type="button"
            onClick={() => onClickOpenUser(row)}
          >
            open
          </button>
        </div>
      ),
    },
  ], [onClickEditUser,onClickOpenUser]);

  const getUserFromUserForm = (user) => {
    setActiveComponent("userTable");
    if (user) {
      if (JSON.stringify(user) !== JSON.stringify(rowData?.original)) {
        const newState = [...tableRows];
        console.log(newState, 'NEWS STATE FIRST');
        const findedElement = newState.find((item) => item.id === user.id);
        const index = newState.indexOf(findedElement);
        newState.splice(index, 1, user);
        console.log(newState, 'NEWS STATE SECOND');
        setTableRows(newState);
      }
    }
  };

  const getUserDetailStatus = (status) => {
    if (!status) {
      setActiveComponent("userTable");
    }
  };

  return (
    <div className="field">
      <div>
        {activeComponent === "userTable" && (
          <button className="user-btn" type="button" onClick={onClickAddUser}>
            Add user
          </button>
        )}
      </div>
      <Table
        data={tableRows}
        columns={columns}
        active={activeComponent === "userTable"}
        setActive={setActiveComponent}
        rowKey="id"
      />
      <UserForm
        sendUpdateUser={getUserFromUserForm}
        active={activeComponent === "userForm"}
        setActive={setActiveComponent}
        row={rowData}
      ></UserForm>
      <UserDetail
        sendUpdateStatus={getUserDetailStatus}
        tableRow={tableRow}
        active={activeComponent === "userDetail"}
        setActive={setActiveComponent}
      />
    </div>
  );
}

export default React.memo(Users);
