import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'שם מחזור',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'תאריך התחלה',
        accessor: 'startdate',
        Filter: ColumnFilter
    },
    {
        Header: 'תאריך סיום',
        accessor: 'enddate',
        Filter: ColumnFilter
    },
]