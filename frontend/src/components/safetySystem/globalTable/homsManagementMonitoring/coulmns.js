import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "שם החומר",
    accessor: "materialName",
    Filter: ColumnFilter,
  },
  {
    Header: "מספר גיליון",
    accessor: "sheetId",
    Filter: ColumnFilter,
  },
  {
    Header: "מחלקות בהן נמצא החומר",
    accessor: "materialDepartments",
    Filter: ColumnFilter,
  },
  {
    Header: "הערות",
    accessor: "comments",
    Filter: ColumnFilter,
  },
];
