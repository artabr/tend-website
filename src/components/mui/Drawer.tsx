import type { Component } from '@builder.io/sdk';
import MuiDrawer from '@mui/material/Drawer';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

function Drawer(props: MuiDrawerProps) {
  return <MuiDrawer {...props}>{props.children}</MuiDrawer>;
}

export default Drawer;

export const config: Component = {
  name: 'Drawer',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'anchor',
      type: 'text',
      enum: ['left', 'top', 'right', 'bottom'],
      defaultValue: 'left',
      helperText: 'Side from which the drawer will appear.',
    },
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the drawer is open.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['permanent', 'persistent', 'temporary'],
      defaultValue: 'temporary',
      helperText: 'The variant to use.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-drawer/',
};
