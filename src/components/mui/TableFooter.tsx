import type { Component } from '@builder.io/sdk';
import MuiTableFooter from '@mui/material/TableFooter';
import type { TableFooterProps as MuiTableFooterProps } from '@mui/material/TableFooter';

function TableFooter(props: MuiTableFooterProps) {
  return <MuiTableFooter {...props}>{props.children}</MuiTableFooter>;
}

export default TableFooter;

export const config: Component = {
  name: 'TableFooter',
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
  docsLink: 'https://mui.com/material-ui/api/table-footer/',
};
