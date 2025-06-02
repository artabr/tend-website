import type { Component } from '@builder.io/sdk';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';

function ListItemIcon(props: MuiListItemIconProps) {
  return <MuiListItemIcon {...props}>{props.children}</MuiListItemIcon>;
}

export default ListItemIcon;

export const config: Component = {
  name: 'ListItemIcon',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/list-item-icon/',
};
