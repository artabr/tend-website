import type { Component } from '@builder.io/sdk';
import MuiCheckbox from '@mui/material/Checkbox';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

function Checkbox(props: MuiCheckboxProps) {
  return <MuiCheckbox {...props} />;
}

export default Checkbox;

export const config: Component = {
  name: 'Checkbox',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'checked',
      type: 'boolean',
      helperText: 'If true, the component is checked.',
    },
    {
      name: 'color',
      type: 'text',
      enum: [
        'primary',
        'secondary',
        'default',
        'error',
        'info',
        'success',
        'warning',
      ],
      defaultValue: 'primary',
      helperText: 'The color of the component.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is indeterminate.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium'],
      defaultValue: 'medium',
      helperText: 'The size of the component.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-checkbox/',
};
