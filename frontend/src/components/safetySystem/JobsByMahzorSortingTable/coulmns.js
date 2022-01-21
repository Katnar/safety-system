import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'סוג תפקיד',
        accessor: 'jobtype.jobname',
        Filter: ColumnFilter
    },
    {
        Header: 'יחידה',
        accessor: 'unit.name',
        Filter: ColumnFilter
    },
    {
        Header: 'ודאי/לא ודאי',
        accessor: 'certain',
        Filter: ColumnFilter
    },
]