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
