import type { Component } from '@builder.io/sdk';
import MuiMenuList from '@mui/material/MenuList';
import type { MenuListProps as MuiMenuListProps } from '@mui/material/MenuList';

function MenuList(props: MuiMenuListProps) {
  return <MuiMenuList {...props}>{props.children}</MuiMenuList>;
}

export default MenuList;

export const config: Component = {
  name: 'MenuList',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'autoFocus',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the list will be focused on mount.',
    },
    {
      name: 'dense',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, compact vertical padding.',
    },
    {
      name: 'disablePadding',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, removes padding.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/menu-list/',
};
