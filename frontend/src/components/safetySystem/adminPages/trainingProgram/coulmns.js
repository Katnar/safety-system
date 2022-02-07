import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
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
    accessor: "presentationUpload",
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
