import type { Component } from '@builder.io/sdk';
import MuiTableContainer from '@mui/material/TableContainer';
import type { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';

function TableContainer(props: MuiTableContainerProps) {
  return <MuiTableContainer {...props}>{props.children}</MuiTableContainer>;
}

export default TableContainer;

export const config: Component = {
  name: 'TableContainer',
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
  docsLink: 'https://mui.com/material-ui/api/table-container/',
};
