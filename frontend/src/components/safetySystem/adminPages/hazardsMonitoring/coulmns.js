import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "מספר אישי",
    accessor: "personalNumber",
    Filter: ColumnFilter,
  },
  {
    Header: "דרגה",
    accessor: "rank",
    Filter: ColumnFilter,
  },
  {
    Header: "שם מלא",
    accessor: "fullName",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך",
    accessor: "date",
    Filter: ColumnFilter,
  },
  {
    Header: "נתוני הסקר",
    accessor: "surveyDetails",
    Filter: ColumnFilter,
  },
  {
    Header: "חתימה דיגיטלית",
    accessor: "digitalSignature",
    Filter: ColumnFilter,
  },
  {
    Header: 'מס"ד',
    accessor: "msd",
    Filter: ColumnFilter,
  },
  {
    Header: "מיקום",
    accessor: "location",
    Filter: ColumnFilter,
  },
  {
    Header: "סוג המפגע",
    accessor: "hazardType",
    Filter: ColumnFilter,
  },
  {
    Header: "תיאור המפגע",
    accessor: "hazardDescription",
    Filter: ColumnFilter,
  },
  {
    Header: "פעולות תיקון / מניעה",
    accessor: "repairActions",
    Filter: ColumnFilter,
  },
  {
    Header: "סילוק / תיקון",
    accessor: "repair",
    Filter: ColumnFilter,
  },
  {
    Header: 'לו"ז לביצוע',
    accessor: "executionSchedule",
    Filter: ColumnFilter,
  },
  {
    Header: "בקרת ביצוע הסרה / תיקון הממצא",
    accessor: "repairControl",
    Filter: ColumnFilter,
  },
  {
    Header: "סטטוס",
    accessor: "status",
    Filter: ColumnFilter,
  },
];
