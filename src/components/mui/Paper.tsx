import type { Component } from '@builder.io/sdk';
import MuiPaper from '@mui/material/Paper';
import type { PaperProps as MuiPaperProps } from '@mui/material/Paper';

function Paper(props: MuiPaperProps) {
  return <MuiPaper {...props}>{props.children}</MuiPaper>;
}

export default Paper;

export const config: Component = {
  name: 'Paper',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'elevation',
      type: 'number',
      defaultValue: 1,
      helperText: 'Shadow depth, accepts values between 0 and 24.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['elevation', 'outlined'],
      defaultValue: 'elevation',
      helperText: 'The variant to use.',
    },
    {
      name: 'square',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, rounded corners are disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/paper/',
};
