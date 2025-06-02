import type { Component } from '@builder.io/sdk';
import MuiTableCell from '@mui/material/TableCell';
import type { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';

function TableCell(props: MuiTableCellProps) {
  return <MuiTableCell {...props}>{props.children}</MuiTableCell>;
}

export default TableCell;

export const config: Component = {
  name: 'TableCell',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'align',
      type: 'text',
      enum: ['inherit', 'left', 'center', 'right', 'justify'],
      defaultValue: 'inherit',
      helperText: 'Set the text-align on the table cell content.',
    },
    {
      name: 'padding',
      type: 'text',
      enum: ['normal', 'checkbox', 'none'],
      defaultValue: 'normal',
      helperText: 'Specify the cell padding.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium'],
      defaultValue: 'medium',
      helperText: 'Specify the cell size.',
    },
    {
      name: 'sortDirection',
      type: 'text',
      enum: [
        { label: 'asc', value: 'asc' },
        { label: 'desc', value: 'desc' },
        { label: 'false', value: false },
      ],
      defaultValue: false,
      helperText: 'Set the sort direction.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table-cell/',
};
