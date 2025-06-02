import type { Component } from '@builder.io/sdk';
import MuiAlertTitle from '@mui/material/AlertTitle';
import type { AlertTitleProps as MuiAlertTitleProps } from '@mui/material/AlertTitle';

function AlertTitle(props: MuiAlertTitleProps) {
  return <MuiAlertTitle {...props}>{props.children}</MuiAlertTitle>;
}

export default AlertTitle;

export const config: Component = {
  name: 'AlertTitle',
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
  docsLink: 'https://mui.com/material-ui/api/alert-title/',
};
