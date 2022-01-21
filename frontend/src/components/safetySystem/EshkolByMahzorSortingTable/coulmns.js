import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'תפקיד',
        accessor: 'job',
        Filter: ColumnFilter
    },
    {
        Header: 'ודאי/לא ודאי',
        accessor: 'job.certain',
        Filter: ColumnFilter
    },
    {
        Header: '',
        accessor: 'candidates',
        Filter: ColumnFilter
    },
]