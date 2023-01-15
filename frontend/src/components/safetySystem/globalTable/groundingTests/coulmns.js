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
    Header: "שם מבנה נבדק",
    accessor: "buildingName",
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
    Header: "תקין",
    accessor: "fit",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
