import type { Component } from '@builder.io/sdk';
import MuiFormLabel from '@mui/material/FormLabel';
import type { FormLabelProps as MuiFormLabelProps } from '@mui/material/FormLabel';

function FormLabel(props: MuiFormLabelProps) {
  return <MuiFormLabel {...props}>{props.children}</MuiFormLabel>;
}

export default FormLabel;

export const config: Component = {
  name: 'FormLabel',
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
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/form-label/',
};
