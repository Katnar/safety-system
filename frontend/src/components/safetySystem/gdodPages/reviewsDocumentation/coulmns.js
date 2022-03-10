import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "תאריך",
    accessor: "date",
    Filter: ColumnFilter,
  },
  {
    Header: "מיקום ביצוע הביקורת",
    accessor: "location",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים סרוקים",
    accessor: "documentUpload",
    Filter: ColumnFilter,
  },
];
