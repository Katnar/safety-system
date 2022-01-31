import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "שם יחידה",
    accessor: "name",
    Filter: ColumnFilter,
  },
  {
    Header: "מיקום היחידה",
    accessor: "location",
    Filter: ColumnFilter,
  },
  {
    Header: "מבנה היחידה",
    accessor: "unitStructure",
    Filter: ColumnFilter,
  },
  {
    Header: "פירוט האמצעים ביחידה",
    accessor: "unitMeans",
    Filter: ColumnFilter,
  },
  {
    Header: "עיסוק מרכזי",
    accessor: "mainOccupation",
    Filter: ColumnFilter,
  },
  {
    Header: "עץ מבנה יחידה",
    accessor: "unitStructureTree",
    Filter: ColumnFilter,
  },
  {
    Header: "עץ מבנה מחלקת טנ''א",
    accessor: "teneStructureTree",
    Filter: ColumnFilter,
  },
];
