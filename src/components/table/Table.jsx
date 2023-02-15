import "./Table.css";
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


  return (
    <table  className="table-main"{...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr className="table-header"
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
          prepareRow(row);
          return (
            <tr className="table-row" {...row.getRowProps()} >
              {row.cells.map(cell => (
                <td  className="table-cell"{...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Table);