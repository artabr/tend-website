import type { Component } from '@builder.io/sdk';
import MuiToolbar from '@mui/material/Toolbar';
import type { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';

function Toolbar(props: MuiToolbarProps) {
  return <MuiToolbar {...props}>{props.children}</MuiToolbar>;
}

export default Toolbar;

export const config: Component = {
  name: 'Toolbar',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'variant',
      type: 'text',
      enum: ['regular', 'dense'],
      defaultValue: 'regular',
      helperText: 'The variant to use.',
    },
    {
      name: 'disableGutters',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables the gutters.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/toolbar/',
};
