import type { Component } from '@builder.io/sdk';
import MuiAlert from '@mui/material/Alert';
import type { AlertProps as MuiAlertProps } from '@mui/material/Alert';

function Alert(props: MuiAlertProps) {
  return <MuiAlert {...props}>{props.children}</MuiAlert>;
}

export default Alert;

export const config: Component = {
  name: 'Alert',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'severity',
      type: 'text',
      enum: ['error', 'warning', 'info', 'success'],
      defaultValue: 'info',
      helperText: 'The severity of the alert.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'filled', 'outlined'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    {
      name: 'onClose',
      type: 'event',
      helperText: 'Callback fired when the close icon is clicked.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-alert/',
};
