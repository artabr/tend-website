import type { Component } from '@builder.io/sdk';
import MuiLinearProgress from '@mui/material/LinearProgress';
import type { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

function LinearProgress(props: MuiLinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}

export default LinearProgress;

export const config: Component = {
  name: 'LinearProgress',
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
      name: 'variant',
      type: 'text',
      enum: ['determinate', 'indeterminate', 'buffer', 'query'],
      defaultValue: 'indeterminate',
      helperText: 'The variant to use.',
    },
    {
      name: 'value',
      type: 'number',
      helperText: 'The progress value for determinate and buffer variants.',
    },
    {
      name: 'valueBuffer',
      type: 'number',
      helperText: 'Buffer value for buffer variant.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/linear-progress/',
};
