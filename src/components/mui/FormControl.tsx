import type { Component } from '@builder.io/sdk';
import MuiFormControl from '@mui/material/FormControl';
import type { FormControlProps as MuiFormControlProps } from '@mui/material/FormControl';

function FormControl(props: MuiFormControlProps) {
  return <MuiFormControl {...props}>{props.children}</MuiFormControl>;
}

export default FormControl;

export const config: Component = {
  name: 'FormControl',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label should be displayed in an error state.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component takes up the full width.',
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is displayed as required.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'outlined', 'filled'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/form-control/',
};
