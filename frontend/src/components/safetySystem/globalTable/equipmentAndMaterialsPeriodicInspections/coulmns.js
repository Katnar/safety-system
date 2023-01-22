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
