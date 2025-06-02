import type { Component } from '@builder.io/sdk';
import MuiCircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

function CircularProgress(props: MuiCircularProgressProps) {
  return <MuiCircularProgress {...props} />;
}

export default CircularProgress;

export const config: Component = {
  name: 'CircularProgress',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: [
        'primary',
        'secondary',
        'inherit',
        'success',
        'error',
        'info',
        'warning',
      ],
      defaultValue: 'primary',
      helperText: 'The color of the component.',
    },
    {
      name: 'disableShrink',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables shrink animation.',
    },
    { name: 'size', type: 'number', helperText: 'The size of the circle.' },
    {
      name: 'thickness',
      type: 'number',
      helperText: 'The thickness of the circle.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['determinate', 'indeterminate'],
      defaultValue: 'indeterminate',
      helperText: 'The variant to use.',
    },
    {
      name: 'value',
      type: 'number',
      helperText: 'The progress value for determinate variant.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-progress/',
};
