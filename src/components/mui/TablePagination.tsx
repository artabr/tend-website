import type { Component } from '@builder.io/sdk';
import MuiTablePagination from '@mui/material/TablePagination';
import type { TablePaginationProps as MuiTablePaginationProps } from '@mui/material/TablePagination';

function TablePagination(props: MuiTablePaginationProps) {
  return <MuiTablePagination {...props} />;
}

export default TablePagination;

export const config: Component = {
  name: 'TablePagination',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'count',
      type: 'number',
      helperText: 'Total number of rows.',
    },
    {
      name: 'page',
      type: 'number',
      helperText: 'Current page number.',
    },
    {
      name: 'rowsPerPage',
      type: 'number',
      helperText: 'Number of rows per page.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table-pagination/',
};
