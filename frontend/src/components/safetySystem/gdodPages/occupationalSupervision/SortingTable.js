import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import Button from "reactstrap/lib/Button";
import { withRouter, Redirect, Link } from "react-router-dom";
import { COLUMNS } from "./coulmns";
import { GlobalFilter } from "./GlobalFilter";
import axios from "axios";
import style from "components/Table.css";
import editpic from "assets/img/edit.png";
import deletepic from "assets/img/delete.png";

const SortingTable = (props) => {
  const columns = useMemo(() => COLUMNS, []);

  const [data, setData] = useState([]);

  function init() {
    getOccupationalSupervisionDetails();
  }

  const getOccupationalSupervisionDetails = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/occupationalSupervision`)
        .then((response) => {
          let tempData = [];
          for (let i = 0; i < response.data.length; i++) {
            console.log(props);
            if (response.data[i].gdod == props.userData.user.gdod) {
              tempData.push(response.data[i]);
            }
          }
          setData(tempData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {}
  };

  const occupationalSupervisionDetailsDelete = (
    occupationalSupervisionDetailsId
  ) => {
    axios
      .delete(
        `http://localhost:8000/api/occupationalSupervision/${occupationalSupervisionDetailsId}`
      )
      .then((response) => {
        loadOccupationalSupervisionDetails();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadOccupationalSupervisionDetails = () => {
    axios
      .get("http://localhost:8000/api/occupationalSupervision")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    init();
    setPageSize(5);
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="table-responsive" style={{ overflow: "auto" }}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th>
                    <div
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {" "}
                      {column.render("Header")}{" "}
                    </div>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                    <div>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "⬆️"
                        : ""}
                    </div>
                  </th>
                ))}
                <th>ערוך</th>
                {/* <th>מחק</th> */}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    if (cell.column.id == "personalNumber") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "id") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "fullName") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "rank") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "profession") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "harmfulCause") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "legislationAndMilitaryOrders") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "frequencyOfTests") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "lastExecutionDate") {
                      return (
                        <td>
                          {cell.value
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </td>
                      );
                    }
                    if (cell.column.id == "nextTestDate") {
                      return (
                        <td>
                          {cell.value
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </td>
                      );
                    }
                    if (cell.column.id == "fit") {
                      return <td>{cell.value}</td>;
                    }
                    if (cell.column.id == "documentUpload") {
                      return <td>{cell.value}</td>;
                    }
                    // return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  {/* {console.log(row)} */}
                  <td role="cell">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <Link
                        to={`/occupationalSupervisionGdodForm/${row.original._id}`}
                      >
                        <button className="btn btn-success">ערוך</button>
                      </Link>
                    </div>
                  </td>
                  {/* <td role="cell">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          occupationalSupervisionDetailsDelete(row.original._id)
                        }
                      >
                        מחק
                      </button>
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <span>
            עמוד{" "}
            <strong>
              {pageIndex + 1} מתוך {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | חפש עמוד:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px", borderRadius: "10px" }}
            />
          </span>{" "}
          <select
            style={{ borderRadius: "10px" }}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default withRouter(SortingTable);
