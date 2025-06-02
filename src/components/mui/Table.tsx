import type { Component } from '@builder.io/sdk';
import MuiTable from '@mui/material/Table';
import type { TableProps as MuiTableProps } from '@mui/material/Table';

function Table(props: MuiTableProps) {
  return <MuiTable {...props}>{props.children}</MuiTable>;
}

export default Table;

export const config: Component = {
  name: 'Table',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium'],
      defaultValue: 'medium',
      helperText: 'The size of the table.',
    },
    {
      name: 'padding',
      type: 'text',
      enum: ['normal', 'checkbox', 'none'],
      defaultValue: 'normal',
      helperText: 'Cell padding.',
    },
    {
      name: 'stickyHeader',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the header will be sticky.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table/',
};
