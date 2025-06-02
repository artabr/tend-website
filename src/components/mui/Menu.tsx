import type { Component } from '@builder.io/sdk';
import MuiMenu from '@mui/material/Menu';
import type { MenuProps as MuiMenuProps } from '@mui/material/Menu';

function Menu(props: MuiMenuProps) {
  return <MuiMenu {...props}>{props.children}</MuiMenu>;
}

export default Menu;

export const config: Component = {
  name: 'Menu',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'anchorEl',
      type: 'string',
      helperText: 'The DOM element used as the anchor.',
    },
    { name: 'open', type: 'boolean', helperText: 'If true, the menu is open.' },
    {
      name: 'onClose',
      type: 'event',
      helperText: 'Callback fired when the menu is closed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/menu/',
};
