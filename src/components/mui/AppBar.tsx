import type { Component } from '@builder.io/sdk';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

function AppBar(props: MuiAppBarProps) {
  return <MuiAppBar {...props}>{props.children}</MuiAppBar>;
}

export default AppBar;

export const config: Component = {
  name: 'AppBar',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'position',
      type: 'text',
      enum: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
      defaultValue: 'fixed',
      helperText: 'The positioning type.',
    },
    {
      name: 'color',
      type: 'text',
      enum: ['inherit', 'primary', 'secondary', 'default', 'transparent'],
      defaultValue: 'primary',
      helperText: 'The color of the component.',
    },
    {
      name: 'enableColorOnDark',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the color prop is applied in dark mode.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-app-bar/',
};
