import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "מספר אישי",
    accessor: "personalNumber",
    Filter: ColumnFilter,
  },
  {
    Header: "תעודת זהות",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "שם מלא",
    accessor: "fullName",
    Filter: ColumnFilter,
  },
  {
    Header: "דרגה",
    accessor: "rank",
    Filter: ColumnFilter,
  },
  {
    Header: "מקצוע",
    accessor: "profession",
    Filter: ColumnFilter,
  },
  {
    Header: "הסמכה",
    accessor: "certification",
    Filter: ColumnFilter,
  },
  {
    Header: "תוקף ההסמכה",
    accessor: "certificationValidity",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים",
    accessor: "documentUpload",
    Filter: ColumnFilter,
  },
];
