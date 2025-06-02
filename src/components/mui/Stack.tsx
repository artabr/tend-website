import type { Component } from '@builder.io/sdk';
import MuiStack from '@mui/material/Stack';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

function Stack(props: MuiStackProps) {
  return <MuiStack {...props}>{props.children}</MuiStack>;
}

export default Stack;

export const config: Component = {
  name: 'Stack',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'direction',
      type: 'text',
      enum: ['row', 'row-reverse', 'column', 'column-reverse'],
      defaultValue: 'column',
      helperText: 'Direction of the stack.',
    },
    {
      name: 'spacing',
      type: 'number',
      helperText: 'Spacing between children.',
    },
    {
      name: 'divider',
      type: 'string',
      helperText: 'Element to use as a divider between children.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/stack/',
};
