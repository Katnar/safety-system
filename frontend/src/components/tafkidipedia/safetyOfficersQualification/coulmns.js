import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "מספר אישי",
    accessor: "personalNumber",
    Filter: ColumnFilter,
  },
  {
    Header: "ת''ז",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "שם מלא",
    accessor: "fullName",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך הוצאת תעודה",
    accessor: "certificateIssuingDate",
    Filter: ColumnFilter,
  },
  {
    Header: "מספר ימי עיון שבוצעו",
    accessor: "numberOfSeminarDays",
    Filter: ColumnFilter,
  },
];
