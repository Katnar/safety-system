import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import { withRouter, Redirect, Link } from "react-router-dom";
import { COLUMNS } from "./coulmns";
import { GlobalFilter } from './GlobalFilter'
import axios from 'axios'
import style from 'components/Table.css'
import editpic from "assets/img/edit.png";
import deletepic from "assets/img/delete.png";

const SortingTable = ({ match }) => {
  const columns = useMemo(() => COLUMNS, []);

  const [data, setData] = useState([])

  function init() {
    getMahzorUnitsPreferences();
  }

  const getMahzorUnitsPreferences = async () => {//get + sort by mahzorid
    try {
      // await axios.get(`http://localhost:8000/api/smartunitpreference`)
      await axios.get(`http://localhost:8000/api/smartunitpreference`)
        .then(response => {
          let tempdata = response.data;
          let tempunitspreferences = [];
          // for (let i = 0; i < tempdata.length; i++) {
          //   if (tempdata[i].mahzor._id == match.params.mahzorid)
          //   tempunitspreferences.push(tempdata[i])
          // }
          setData(tempdata)
        })
        .catch((error) => {
          console.log(error);
        })
    }
    catch {

    }
  }

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
  } = useTable({
    columns, data, initialState: { pageIndex: 0 },
  },
    useGlobalFilter, useFilters, useSortBy, usePagination);

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="table-responsive" style={{ overflow: 'auto' }}>
        <table {...getTableProps()}>
        <thead style={{ backgroundColor: '#4fa9ff' }}>
            <tr>
            <th colSpan="1">תפקיד</th>
            <th colSpan="1">ודאי/לא ודאי</th>
            <th colSpan="100%">מועמדים</th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        // if (cell.column.id != "candidate.user.name") {
                        //   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        // }
                        // else {
                        if (cell.column.id == "job.jobtype.jobname") {
                          return <td>{cell.value}{"/"}{row.original.job.unit.name}</td>
                        }
                        if (cell.column.id == "job.certain") {
                          return <td>{cell.value == true ? "ודאי" : "לא ודאי"}</td>
                        }
                        if (cell.column.id == "candidates") {
                          return <> {cell.value.users.map((user, index) => (
                            <td>{user.name} {user.lastname}</td>
                          ))}</>
                        }
                      })
                    }
                    {/* {console.log(row)} */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="pagination">

          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}

          <span>
            עמוד{' '}
            <strong>
              {pageIndex + 1} מתוך {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | חפש עמוד:{' '}
            <input

              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px', borderRadius: '10px' }}
            />
          </span>{' '}
          <select
            style={{ borderRadius: '10px' }}
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[5, 10, 15, 20, 25].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default withRouter(SortingTable);;