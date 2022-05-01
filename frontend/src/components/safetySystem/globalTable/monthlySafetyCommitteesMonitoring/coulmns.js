import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
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
