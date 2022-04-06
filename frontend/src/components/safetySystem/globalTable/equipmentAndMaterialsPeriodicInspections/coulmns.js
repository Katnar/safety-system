import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "סוג הציוד",
    accessor: "equipmentType",
    Filter: ColumnFilter,
  },
  {
    Header: "יצרן",
    accessor: "manufacturer",
    Filter: ColumnFilter,
  },
  {
    Header: "תדירות הבדיקות",
    accessor: "testingFrequency",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך בדיקה",
    accessor: "testDate",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך בדיקה הבא",
    accessor: "nextTestDate",
    Filter: ColumnFilter,
  },
  {
    Header: "צירוף מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
