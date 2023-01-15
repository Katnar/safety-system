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
    Header: "תפקיד/מקצוע",
    accessor: "profession",
    Filter: ColumnFilter,
  },
  {
    Header: "גורם מזיק",
    accessor: "harmfulCause",
    Filter: ColumnFilter,
  },
  {
    Header: "חקיקה ופקודות הצבא",
    accessor: "legislationAndMilitaryOrders",
    Filter: ColumnFilter,
  },
  {
    Header: "תדירות הבדיקות",
    accessor: "frequencyOfTests",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך ביצוע אחרון",
    accessor: "lastExecutionDate",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך בדיקה הבאה",
    accessor: "nextTestDate",
    Filter: ColumnFilter,
  },
  {
    Header: "כשיר/לא כשיר",
    accessor: "fit",
    Filter: ColumnFilter,
  },
  {
    Header: "צירוף מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
