import type { Component } from '@builder.io/sdk';
import MuiToggleButton from '@mui/material/ToggleButton';
import type { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';

function ToggleButton(props: MuiToggleButtonProps) {
  return <MuiToggleButton {...props}>{props.children}</MuiToggleButton>;
}

export default ToggleButton;

export const config: Component = {
  name: 'ToggleButton',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the button.',
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the button is selected.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the button is disabled.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      helperText: 'The size of the button.',
    },
    {
      name: 'color',
      type: 'text',
      enum: [
        'standard',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      defaultValue: 'standard',
      helperText: 'The color of the button.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/toggle-button/',
};
