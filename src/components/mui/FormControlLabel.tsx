import type { Component } from '@builder.io/sdk';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';

function FormControlLabel(props: MuiFormControlLabelProps) {
  return <MuiFormControlLabel {...props} />;
}

export default FormControlLabel;

export const config: Component = {
  name: 'FormControlLabel',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'label', type: 'string', helperText: 'The label text.' },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'labelPlacement',
      type: 'text',
      enum: ['end', 'start', 'top', 'bottom'],
      defaultValue: 'end',
      helperText: 'The position of the label.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/form-control-label/',
};
