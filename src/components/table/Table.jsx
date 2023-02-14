import "./table.css";
import React from "react";
import { useTable } from "react-table";

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
    prepareRow
  } = useTable({
    columns,
    data,
    getRowId: React.useCallback(row => row[rowKey], [rowKey])
  });

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
        {rows.map((row,index) => {
          //console.log(row, 'ROW FROM TABLE');
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Table);