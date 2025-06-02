import type { Component } from '@builder.io/sdk';
import MuiTableSortLabel from '@mui/material/TableSortLabel';
import type { TableSortLabelProps as MuiTableSortLabelProps } from '@mui/material/TableSortLabel';

function TableSortLabel(props: MuiTableSortLabelProps) {
  return <MuiTableSortLabel {...props}>{props.children}</MuiTableSortLabel>;
}

export default TableSortLabel;

export const config: Component = {
  name: 'TableSortLabel',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'active',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label will have an active sort indication.',
    },
    {
      name: 'direction',
      type: 'text',
      enum: ['asc', 'desc'],
      defaultValue: 'asc',
      helperText: 'The sort direction.',
    },
    {
      name: 'hideSortIcon',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, hides the sort icon.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table-sort-label/',
};
