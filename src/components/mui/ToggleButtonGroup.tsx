import type { Component } from '@builder.io/sdk';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import type { ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';

function ToggleButtonGroup(props: MuiToggleButtonGroupProps) {
  return (
    <MuiToggleButtonGroup {...props}>{props.children}</MuiToggleButtonGroup>
  );
}

export default ToggleButtonGroup;

export const config: Component = {
  name: 'ToggleButtonGroup',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the selected button(s).',
    },
    {
      name: 'exclusive',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, only one button can be selected.',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      helperText: 'The orientation of the group.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      helperText: 'The size of the buttons.',
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
      helperText: 'The color of the buttons.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/toggle-button-group/',
};
