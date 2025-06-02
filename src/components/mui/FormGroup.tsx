import type { Component } from '@builder.io/sdk';
import MuiFormGroup from '@mui/material/FormGroup';
import type { FormGroupProps as MuiFormGroupProps } from '@mui/material/FormGroup';

function FormGroup(props: MuiFormGroupProps) {
  return <MuiFormGroup {...props}>{props.children}</MuiFormGroup>;
}

export default FormGroup;

export const config: Component = {
  name: 'FormGroup',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'row',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Display group in a row.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/form-group/',
};
