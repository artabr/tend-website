import type { Component } from '@builder.io/sdk';
import MuiRadio from '@mui/material/Radio';
import type { RadioProps as MuiRadioProps } from '@mui/material/Radio';

function Radio(props: MuiRadioProps) {
  return <MuiRadio {...props} />;
}

export default Radio;

export const config: Component = {
  name: 'Radio',
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
  docsLink: 'https://mui.com/material-ui/api/radio/',
};
