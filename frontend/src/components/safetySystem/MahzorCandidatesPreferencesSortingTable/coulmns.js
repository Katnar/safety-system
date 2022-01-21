import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'שם מתמודד',
        accessor: 'candidate.user.name',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד ודאי 1',
        accessor: 'certjobpreference1',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד ודאי 2',
        accessor: 'certjobpreference2',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד ודאי 3',
        accessor: 'certjobpreference3',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד לא ודאי 1',
        accessor: 'noncertjobpreference1',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד לא ודאי 2',
        accessor: 'noncertjobpreference2',
        Filter: ColumnFilter
    },
    {
        Header: 'תפקיד לא ודאי 3',
        accessor: 'noncertjobpreference3',
        Filter: ColumnFilter
    },
]