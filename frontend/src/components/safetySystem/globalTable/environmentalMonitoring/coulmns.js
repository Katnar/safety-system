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
    Header: "גורמים מזיקים",
    accessor: "harmfulCauses",
    Filter: ColumnFilter,
  },
  {
    Header: "מיקומם ביחידה",
    accessor: "locationInUnit",
    Filter: ColumnFilter,
  },
  {
    Header: "מועד ניטור אחרון",
    accessor: "lastMonitoringDate",
    Filter: ColumnFilter,
  },
  {
    Header: "מועד ניטור הבא",
    accessor: "nextMonitoringDate",
    Filter: ColumnFilter,
  },
  {
    Header: "סטטוס",
    accessor: "executionStatus",
    Filter: ColumnFilter,
  },
  {
    Header: "תסקיר מתאריך",
    accessor: "surveyDate",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
