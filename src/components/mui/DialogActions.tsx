import type { Component } from '@builder.io/sdk';
import MuiDialogActions from '@mui/material/DialogActions';
import type { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions';

function DialogActions(props: MuiDialogActionsProps) {
  return <MuiDialogActions {...props}>{props.children}</MuiDialogActions>;
}

export default DialogActions;

export const config: Component = {
  name: 'DialogActions',
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
  docsLink: 'https://mui.com/material-ui/api/dialog-actions/',
};
