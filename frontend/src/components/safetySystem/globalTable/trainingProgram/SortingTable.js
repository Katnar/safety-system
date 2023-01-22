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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import PropagateLoader from "react-spinners/PropagateLoader"; import { GlobalFilter } from "./GlobalFilter";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";
import style from "components/Table.css";
import editpic from "assets/img/edit.png";
import deletepic from "assets/img/delete.png";
import { isAuthenticated } from "auth";
import GlobalUnitFilter from "components/safetySystem/Filters/GlobalUnitFilter";

const SortingTable = (props) => {
  const user = isAuthenticated();
  const columns = useMemo(() => COLUMNS, []);
  //data
  const [data, setData] = useState([])
  const [originaldata, setOriginaldata] = useState([])
  //filter
  const [filter, setFilter] = useState([])
  //spinner
  const [isdataloaded, setIsdataloaded] = useState(false);

  async function init() {
    fixfilter();
      if (props.unittype == "admin") {
        getDetails();
      }
      if (props.unittype == "gdod") {
        getUnitDetailsByGdod();
      }
      if (props.unittype == "hativa") {
        getUnitDetailsByHativa();
      }
      if (props.unittype == "ogda") {
        getUnitDetailsByOgda();
      }
      if (props.unittype == "pikod") {
        getUnitDetailsByPikod();
      }
  }
  
  const getUnitDetailsByGdod = async () => {
    await axios.get(`http://localhost:8000/api/trainingProgram/bygdod/${props.unitid}`)
      .then((response) => {
        setData(response.data);
        setOriginaldata(response.data);
          setIsdataloaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const getUnitDetailsByHativa = async () => {
    await axios.get(`http://localhost:8000/api/trainingProgram/byhativa/${props.unitid}`)
      .then((response) => {
        setData(response.data);
        setOriginaldata(response.data);
          setIsdataloaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  const getUnitDetailsByOgda = async () => {
    await axios.get(`http://localhost:8000/api/trainingProgram/byogda/${props.unitid}`)
      .then((response) => {
        setData(response.data);
        setOriginaldata(response.data);
          setIsdataloaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const getUnitDetailsByPikod = async () => {
    await axios.get(`http://localhost:8000/api/trainingProgram/bypikod/${props.unitid}`)
      .then((response) => {
        setData(response.data);
        setOriginaldata(response.data);
          setIsdataloaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const getDetails = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/trainingProgram`)
        .then((response) => {
          setData(response.data);
          setOriginaldata(response.data);
          setIsdataloaded(true)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch { }
  };

  const Delete = (data) => {
    const tempData = data;
    // tempData.deletedAt = new Date();
    axios.post("http://localhost:8000/api/trainingProgramDelete", tempData).then((response) => {
      axios.delete(`http://localhost:8000/api/trainingProgram/${tempData}`).then((response) => {
        init();
      })
        .catch((error) => {
          console.log(error);
        });
    }).catch((error) => {
      console.log(error);
    });
  };

  const fixfilter = async () => {
    let tempfilter = {};
    if (props.unittype == 'admin') {
      // nothing
    }
    if (props.unittype == 'pikod') {
      tempfilter.pikod = [props.unitid]
    }
    else if (props.unittype == 'ogda') {
      tempfilter.ogda = [props.unitid]
      let response = await axios.get(`http://localhost:8000/api/ogda/${props.unitid}`,)
      tempfilter.pikod = [response.data.pikod]
    }
    else if (props.unittype == 'hativa') {
      tempfilter.hativa = [props.unitid]
      let response1 = await axios.get(`http://localhost:8000/api/hativa/${props.unitid}`,)
      tempfilter.ogda = [response1.data.ogda]
      let response = await axios.get(`http://localhost:8000/api/ogda/${tempfilter.ogda}`,)
      tempfilter.pikod = [response.data.pikod]
    }
    else if (props.unittype == 'gdod') {
      tempfilter.gdod = [props.unitid]
      let response2 = await axios.get(`http://localhost:8000/api/gdod/${props.unitid}`,)
      tempfilter.hativa = [response2.data.hativa]
      let response1 = await axios.get(`http://localhost:8000/api/hativa/${tempfilter.hativa}`,)
      tempfilter.ogda = [response1.data.ogda]
      let response = await axios.get(`http://localhost:8000/api/ogda/${tempfilter.ogda}`,)
      tempfilter.pikod = [response.data.pikod]
    }
    setFilter(tempfilter);
  }

  const setfilterfunction = (evt) => {
    if (evt.currentTarget.name == 'kshirot') {
      if (filter.kshirotfilter) {
        let tempkshirotfilter = [...filter.kshirotfilter]
        const index = tempkshirotfilter.indexOf(evt.currentTarget.value);
        if (index > -1) {
          tempkshirotfilter.splice(index, 1);
        }
        else {
          tempkshirotfilter.push(evt.currentTarget.value)
        }
        setFilter({ ...filter, kshirotfilter: tempkshirotfilter })
      }
      else {
        setFilter({ ...filter, kshirotfilter: [evt.currentTarget.value] })
      }
    }
    if (evt.currentTarget.name == 'zminot') {
      if (filter.zminotfilter) {
        let tempzminotfilter = [...filter.zminotfilter]
        const index = tempzminotfilter.indexOf(evt.currentTarget.value);
        if (index > -1) {
          tempzminotfilter.splice(index, 1);
        }
        else {
          tempzminotfilter.push(evt.currentTarget.value)
        }
        setFilter({ ...filter, zminotfilter: tempzminotfilter })
      }
      else {
        setFilter({ ...filter, zminotfilter: [evt.currentTarget.value] })
      }
    }
    if (evt.currentTarget.name == 'stand') {
      if (filter.standfilter) {
        let tempstandfilter = [...filter.standfilter]
        const index = tempstandfilter.indexOf(evt.currentTarget.value);
        if (index > -1) {
          tempstandfilter.splice(index, 1);
        }
        else {
          tempstandfilter.push(evt.currentTarget.value)
        }
        setFilter({ ...filter, standfilter: tempstandfilter })
      }
      else {
        setFilter({ ...filter, standfilter: [evt.currentTarget.value] })
      }
    }
  }

  function handleChange8(selectedOption, name) {
    if (!(selectedOption.value == "בחר")) {
      let tempvalues = [];
      for (let i = 0; i < selectedOption.length; i++) {
        tempvalues.push(selectedOption[i].value);
      }
      setFilter({ ...filter, [name]: tempvalues });
    }
    else {
      let tempfilter = { ...filter };
      delete tempfilter[name];
      setFilter(tempfilter);
    }
  }

  const applyfiltersontodata = () => {
    let tempdatabeforefilter = originaldata;

    let myArrayFiltered3 = []; //filter pikod
    if (filter.pikod && filter.pikod.length > 0) {
      myArrayFiltered3 = tempdatabeforefilter.filter(item => filter.pikod.includes(item.pikod));
    }
    else {
      myArrayFiltered3 = tempdatabeforefilter;
    }

    let myArrayFiltered4 = []; //filter ogda
    if (filter.ogda && filter.ogda.length > 0) {
      myArrayFiltered4 = myArrayFiltered3.filter(item => filter.ogda.includes(item.ogda));
    }
    else {
      myArrayFiltered4 = myArrayFiltered3;
    }

    let myArrayFiltered5 = []; //filter hativa
    if (filter.hativa && filter.hativa.length > 0) {
      myArrayFiltered5 = myArrayFiltered4.filter(item => filter.hativa.includes(item.hativa));
    }
    else {
      myArrayFiltered5 = myArrayFiltered4;
    }

    let myArrayFiltered6 = []; //filter gdod
    if (filter.gdod && filter.gdod.length > 0) {
      myArrayFiltered6 = myArrayFiltered5.filter(item => filter.gdod.includes(item.gdod));
    }
    else {
      myArrayFiltered6 = myArrayFiltered5;
    }
    setData(myArrayFiltered6)
  }

  useEffect(() => {
    applyfiltersontodata()
  }, [filter]);

  useEffect(() => {
    init();
    setPageSize(15);
  }, [props]);

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
    !isdataloaded ?
      <div style={{ paddingTop: '20%', paddingBottom: '20%' }}>
        <div style={{ width: '50%' }}>
          <PropagateLoader color={'#00dc7f'} loading={true} size={25} />
        </div>
      </div>
      :
      <>
        <div style={{ float: 'right', paddingBottom: '5px' }}>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="btn-green"
            table="table-to-xls"
            filename="קובץ - תכנית הדרכות"
            sheet="קובץ - תכנית הדרכות"
            buttonText="הורד כקובץ אקסל"
            style={{ float: 'right' }}
          />
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div className="table-responsive" style={{ overflow: "auto" }}>
          {/*filter */}
          <GlobalUnitFilter originaldata={originaldata} filter={filter} setfilterfunction={setfilterfunction} unittype={props.unittype} unitid={props.unitid} handleChange8={handleChange8} />
          <table {...getTableProps()} id="table-to-xls">
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
                  {props.unittype == "admin" ? <th>מחק</th> : null}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      if (cell.column.id == "pikod") {
                        return cell.value ? <td {...cell.getCellProps()}>{row.original.pikod_data ? row.original.pikod_data[0].name : null}</td> : <td {...cell.getCellProps()}></td>
                      }
                      if (cell.column.id == "ogda") {
                        return cell.value ? <td {...cell.getCellProps()}>{row.original.ogda_data ? row.original.ogda_data[0].name : null}</td> : <td {...cell.getCellProps()}></td>
                      }
                      if (cell.column.id == "hativa") {
                        return cell.value ? <td {...cell.getCellProps()}>{row.original.hativa_data ? row.original.hativa_data[0].name : null}</td> : <td {...cell.getCellProps()}></td>
                      }
                      if (cell.column.id == "gdod") {
                        return cell.value ? <td {...cell.getCellProps()}>{row.original.gdod_data ? row.original.gdod_data.name : null}</td> : <td {...cell.getCellProps()}></td>
                      }
                      if (cell.column.id == "trainingDate") {
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
                      if (cell.column.id == "trainingSubject") {
                        return <td>{cell.value}</td>;
                      }
                      if (cell.column.id == "_id") {
                        return (
                          <td>
                            <a
                              href={
                                "http://localhost:8000/api/downloadFile?collec=trainingProgram&id=" +
                                cell.value.toString()
                              }
                              target="_blank"
                            >
                              <FaFileDownload />
                            </a>
                          </td>
                        );
                      }
                      if (cell.column.id == "requireTest") {
                        return <td>{cell.value}</td>;
                      }
                      if (cell.column.id == "requiredWorkersList") {
                        return <td>{cell.value}</td>;
                      }
                      if (cell.column.id == "trainingStatus") {
                        return <td>{cell.value}</td>;
                      }
                      if (cell.column.id == "requiredWorkersStatus") {
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
                          to={`/GlobalTrainingProgramForm/${row.original._id}`}
                        >
                          <button className="btn btn-edit">ערוך</button>
                        </Link>
                      </div>
                    </td>

                    {props.unittype == "admin" ? <td role="cell">
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
                          onClick={() => Delete(row.original._id)}
                        >
                          מחק
                        </button>
                      </div>
                    </td> : null}

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
