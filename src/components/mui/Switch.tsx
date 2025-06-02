import type { Component } from '@builder.io/sdk';
import MuiSwitch from '@mui/material/Switch';
import type { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

function Switch(props: MuiSwitchProps) {
  return <MuiSwitch {...props} />;
}

export default Switch;

export const config: Component = {
  name: 'Switch',
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
  docsLink: 'https://mui.com/material-ui/api/switch/',
};
