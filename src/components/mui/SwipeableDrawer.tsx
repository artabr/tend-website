import type { Component } from '@builder.io/sdk';
import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer';
import type { SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material/SwipeableDrawer';

function SwipeableDrawer(props: MuiSwipeableDrawerProps) {
  return <MuiSwipeableDrawer {...props}>{props.children}</MuiSwipeableDrawer>;
}

export default SwipeableDrawer;

export const config: Component = {
  name: 'SwipeableDrawer',
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
      name: 'disableBackdropTransition',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables the backdrop transition.',
    },
    {
      name: 'disableDiscovery',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables swipe to open discovery feature.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/swipeable-drawer/',
};
