import type { Component } from '@builder.io/sdk';
import MuiInputLabel from '@mui/material/InputLabel';
import type { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';

function InputLabel(props: MuiInputLabelProps) {
  return <MuiInputLabel {...props}>{props.children}</MuiInputLabel>;
}

export default InputLabel;

export const config: Component = {
  name: 'InputLabel',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is disabled.',
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label should be displayed in an error state.',
    },
    {
      name: 'focused',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is focused.',
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is required.',
    },
    {
      name: 'shrink',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is shrunk.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/input-label/',
};
