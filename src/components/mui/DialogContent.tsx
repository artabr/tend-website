import type { Component } from '@builder.io/sdk';
import MuiDialogContent from '@mui/material/DialogContent';
import type { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';

function DialogContent(props: MuiDialogContentProps) {
  return <MuiDialogContent {...props}>{props.children}</MuiDialogContent>;
}

export default DialogContent;

export const config: Component = {
  name: 'DialogContent',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'dividers',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, adds dividers.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/dialog-content/',
};
