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
    Header: "שם האמצעי",
    accessor: "meanName",
    Filter: ColumnFilter,
  },
  {
    Header: "מסט\"ב",
    accessor: "mstb",
    Filter: ColumnFilter,
  },
  {
    Header: "מק\"ט",
    accessor: "mkt",
    Filter: ColumnFilter,
  },
  {
    Header: "יצרן",
    accessor: "manufacturer",
    Filter: ColumnFilter,
  },
  {
    Header: "מועד בדיקה נוכחי",
    accessor: "testDate",
    Filter: ColumnFilter,
  },
  {
    Header: "מועד בדיקה הבא",
    accessor: "nextTestDate",
    Filter: ColumnFilter,
  },
  {
    Header: "ממצאים",
    accessor: "findings",
    Filter: ColumnFilter,
  },
  {
    Header: "הערות",
    accessor: "comments",
    Filter: ColumnFilter,
  },
  {
    Header: "כמות מכל אמצעי",
    accessor: "meanQuantity",
    Filter: ColumnFilter,
  },
  {
    Header: "מסמכים סרוקים",
    accessor: "_id",
    Filter: ColumnFilter,
  },
];
