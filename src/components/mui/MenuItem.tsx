import type { Component } from '@builder.io/sdk';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

function MenuItem(props: MuiMenuItemProps) {
  return <MuiMenuItem {...props}>{props.children}</MuiMenuItem>;
}

export default MenuItem;

export const config: Component = {
  name: 'MenuItem',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is selected.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/menu-item/',
};
