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
    Header: "תאריך ההדרכה",
    accessor: "trainingDate",
    Filter: ColumnFilter,
  },
  {
    Header: "נושא ההדרכה",
    accessor: "trainingSubject",
    Filter: ColumnFilter,
  },
  {
    Header: "צירוף מצגת רלוונטית",
    accessor: "_id",
    Filter: ColumnFilter,
  },
  {
    Header: "דרוש מבחן",
    accessor: "requireTest",
    Filter: ColumnFilter,
  },
  {
    Header: "רשימת עובדים נדרשים",
    accessor: "requiredWorkersList",
    Filter: ColumnFilter,
  },
  {
    Header: "סטטוס",
    accessor: "trainingStatus",
    Filter: ColumnFilter,
  },
  {
    Header: "סטטוס הגעה",
    accessor: "requiredWorkersStatus",
    Filter: ColumnFilter,
  },
];
