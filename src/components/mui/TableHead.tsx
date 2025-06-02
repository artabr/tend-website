import type { Component } from '@builder.io/sdk';
import MuiTableHead from '@mui/material/TableHead';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';

function TableHead(props: MuiTableHeadProps) {
  return <MuiTableHead {...props}>{props.children}</MuiTableHead>;
}

export default TableHead;

export const config: Component = {
  name: 'TableHead',
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
  docsLink: 'https://mui.com/material-ui/api/table-head/',
};
