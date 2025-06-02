import type { Component } from '@builder.io/sdk';
import MuiDivider from '@mui/material/Divider';
import type { DividerProps as MuiDividerProps } from '@mui/material/Divider';

function Divider(props: MuiDividerProps) {
  return <MuiDivider {...props}>{props.children}</MuiDivider>;
}

export default Divider;

export const config: Component = {
  name: 'Divider',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'absolute',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, absolutely positions the divider.',
    },
    {
      name: 'flexItem',
      type: 'boolean',
      defaultValue: false,
      helperText:
        'If true, stretches the divider to the parent flex container.',
    },
    {
      name: 'light',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, uses a lighter color.',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      helperText: 'The orientation of the divider.',
    },
    {
      name: 'textAlign',
      type: 'text',
      enum: ['center', 'right', 'left'],
      defaultValue: 'center',
      helperText: 'The alignment of the divider content.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['fullWidth', 'inset', 'middle'],
      defaultValue: 'fullWidth',
      helperText: 'The variant to use.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/divider/',
};
