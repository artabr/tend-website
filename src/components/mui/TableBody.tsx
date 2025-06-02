import type { Component } from '@builder.io/sdk';
import MuiTableBody from '@mui/material/TableBody';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';

function TableBody(props: MuiTableBodyProps) {
  return <MuiTableBody {...props}>{props.children}</MuiTableBody>;
}

export default TableBody;

export const config: Component = {
  name: 'TableBody',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/table-body/',
};
