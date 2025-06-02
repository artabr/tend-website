import type { Component } from '@builder.io/sdk';
import MuiDialogContentText from '@mui/material/DialogContentText';
import type { DialogContentTextProps as MuiDialogContentTextProps } from '@mui/material/DialogContentText';

function DialogContentText(props: MuiDialogContentTextProps) {
  return (
    <MuiDialogContentText {...props}>{props.children}</MuiDialogContentText>
  );
}

export default DialogContentText;

export const config: Component = {
  name: 'DialogContentText',
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
  docsLink: 'https://mui.com/material-ui/api/dialog-content-text/',
};
