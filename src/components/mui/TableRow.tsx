import type { Component } from '@builder.io/sdk';
import MuiTableRow from '@mui/material/TableRow';
import type { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

function TableRow(props: MuiTableRowProps) {
  return <MuiTableRow {...props}>{props.children}</MuiTableRow>;
}

export default TableRow;

export const config: Component = {
  name: 'TableRow',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'hover',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the row will have a hover state.',
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the row will be selected.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table-row/',
};
