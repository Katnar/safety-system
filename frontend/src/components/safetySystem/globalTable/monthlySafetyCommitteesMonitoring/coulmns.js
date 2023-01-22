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
    Header: "יחידה",
    accessor: "unit",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך",
    accessor: "date",
    Filter: ColumnFilter,
  },
  {
    Header: "מבצע הוועדה",
    accessor: "committeeExecuter",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
