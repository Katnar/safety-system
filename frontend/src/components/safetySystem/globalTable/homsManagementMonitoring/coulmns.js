import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: 'פיקוד',
    accessor: 'pikod',
    Filter: ColumnFilter
  },
  {
    Header: 'אוגדה',
    accessor: 'ogda',
    Filter: ColumnFilter
  },
  {
    Header: 'חטיבה',
    accessor: 'hativa',
    Filter: ColumnFilter
  },
  {
    Header: 'גדוד',
    accessor: 'gdod',
    Filter: ColumnFilter
  },
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
  {
    Header: "מסמכים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
