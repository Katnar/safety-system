import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "שלב התהליך",
    accessor: "processStage",
    Filter: ColumnFilter,
  },
  {
    Header: "גורם הסיכון",
    accessor: "riskFactor",
    Filter: ColumnFilter,
  },
  {
    Header: "סיבות / תרחישים",
    accessor: "factorMfive",
    Filter: ColumnFilter,
  },
  {
    Header: "הערכת סיכונים ראשונית",
    accessor: "initialRiskAssessment",
    Filter: ColumnFilter,
  },
  {
    Header: "פעולות מניעה",
    accessor: "preventiveActions",
    Filter: ColumnFilter,
  },
  {
    Header: "הערכת סיכונים חוזרת",
    accessor: "secondRiskAssessment",
    Filter: ColumnFilter,
  },
  {
    Header: "אחריות",
    accessor: "responsibility",
    Filter: ColumnFilter,
  },
  {
    Header: 'תג"ב',
    accessor: "tgb",
    Filter: ColumnFilter,
  },
  {
    Header: "סטטוס",
    accessor: "status",
    Filter: ColumnFilter,
  },
];
