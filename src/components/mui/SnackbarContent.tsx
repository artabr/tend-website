import type { Component } from '@builder.io/sdk';
import MuiSnackbarContent from '@mui/material/SnackbarContent';
import type { SnackbarContentProps as MuiSnackbarContentProps } from '@mui/material/SnackbarContent';

function SnackbarContent(props: MuiSnackbarContentProps) {
  return <MuiSnackbarContent {...props} />;
}

export default SnackbarContent;

export const config: Component = {
  name: 'SnackbarContent',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'message', type: 'string', helperText: 'The message to display.' },
    { name: 'action', type: 'string', helperText: 'Action element.' },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/snackbar-content/',
};
