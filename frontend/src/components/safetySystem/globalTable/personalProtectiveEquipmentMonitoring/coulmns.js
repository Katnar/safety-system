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
    Header: 'מס"ד',
    accessor: "msd",
    Filter: ColumnFilter,
  },
  {
    Header: "שם הציוד",
    accessor: "equipmentName",
    Filter: ColumnFilter,
  },
  {
    Header: 'מק"ט',
    accessor: "mkt",
    Filter: ColumnFilter,
  },
  {
    Header: "כמות",
    accessor: "amount",
    Filter: ColumnFilter,
  },
  {
    Header: "מיקום הציוד",
    accessor: "equipmentLocation",
    Filter: ColumnFilter,
  },
  {
    Header: "תאריך בדיקה",
    accessor: "testDate",
    Filter: ColumnFilter,
  },
  {
    Header: "אחראי הציוד",
    accessor: "equipmentGuarantor",
    Filter: ColumnFilter,
  },
  {
    Header: "הערות",
    accessor: "comments",
    Filter: ColumnFilter,
  },
];
