import "./table.css";
import React from "react";
import { useTable } from "react-table";
import { useState } from "react";
import UserDetail from "../user-detail/UserDetail"

function Table({ columns, data, rowKey, updateData }) {
  //console.log(columns,data,rowKey);
  //console.log(updateData, 'UPDATE DATA')
  if(updateData) {
    data = updateData
  }
  const [ tableRow, setTableRow] = useState("");
  const [userDetailActive, setUserDetailActive]= useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow /// Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
    getRowId: React.useCallback(row => row[rowKey], [rowKey])
  });

  const openTableRow = (row) => {
    console.log(row, 'ROW IN OPEN TABLE ROW');
    setTableRow(row.original);
    setUserDetailActive(true);
  }

  return (
    <table {...getTableProps()} style={{ width: "100%" }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{ background: "#ccc" }}
          >
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          //console.log(row, 'ROW FROM TABLE');
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}
            onClick={() => openTableRow(row)}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
            <UserDetail tableRow={tableRow} active={userDetailActive} setActive={setUserDetailActive}/>
      </tbody>
    </table>
  );
}

export default React.memo(Table);