import type { Component } from '@builder.io/sdk';
import MuiDialogTitle from '@mui/material/DialogTitle';
import type { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';

function DialogTitle(props: MuiDialogTitleProps) {
  return <MuiDialogTitle {...props}>{props.children}</MuiDialogTitle>;
}

export default DialogTitle;

export const config: Component = {
  name: 'DialogTitle',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disableTypography',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables default typography.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/dialog-title/',
};
