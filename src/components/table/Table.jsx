import "./Table.css";
import React, { useEffect } from "react";
import { useTable } from "react-table";

function Table({ columns, data, rowKey, active}) {
  useEffect(() => {
  }, [active]);

  useEffect(() => {}, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      getRowId: React.useCallback((row) => row[rowKey], [rowKey]),
    });

  return (
    active && (
      <table className="table-main" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="table-header"
              {...headerGroup.getHeaderGroupProps()}
              style={{ background: "#ccc" }}
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="table-row" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="table-cell" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}

export default React.memo(Table);
