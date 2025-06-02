import type { Component } from '@builder.io/sdk';
import MuiDialog from '@mui/material/Dialog';
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

function Dialog(props: MuiDialogProps) {
  return <MuiDialog {...props}>{props.children}</MuiDialog>;
}

export default Dialog;

export const config: Component = {
  name: 'Dialog',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the Dialog is open.',
    },
    {
      name: 'fullScreen',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the dialog is full-screen.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the dialog stretches to maxWidth.',
    },
    {
      name: 'maxWidth',
      type: 'text',
      enum: [
        { label: 'xs', value: 'xs' },
        { label: 'sm', value: 'sm' },
        { label: 'md', value: 'md' },
        { label: 'lg', value: 'lg' },
        { label: 'xl', value: 'xl' },
        { label: 'false', value: false },
      ],
      defaultValue: 'sm',
      helperText: 'Dialog maxWidth.',
    },
    {
      name: 'scroll',
      type: 'text',
      enum: [
        { label: 'paper', value: 'paper' },
        { label: 'body', value: 'body' },
      ],
      defaultValue: 'paper',
      helperText: 'Dialog scroll behavior.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-dialog/',
};
