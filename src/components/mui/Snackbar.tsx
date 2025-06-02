import type { Component } from '@builder.io/sdk';
import MuiSnackbar from '@mui/material/Snackbar';
import type { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';

function Snackbar(props: MuiSnackbarProps) {
  return <MuiSnackbar {...props}>{props.children}</MuiSnackbar>;
}

export default Snackbar;

export const config: Component = {
  name: 'Snackbar',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the snackbar is open.',
    },
    {
      name: 'autoHideDuration',
      type: 'number',
      helperText: 'Duration in ms to auto-hide.',
    },
    { name: 'message', type: 'string', helperText: 'The message to display.' },
    {
      name: 'onClose',
      type: 'event',
      helperText: 'Callback fired when the snackbar is closed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/snackbar/',
};
