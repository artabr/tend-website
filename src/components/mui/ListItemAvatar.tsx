import type { Component } from '@builder.io/sdk';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import type { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar';

function ListItemAvatar(props: MuiListItemAvatarProps) {
  return <MuiListItemAvatar {...props}>{props.children}</MuiListItemAvatar>;
}

export default ListItemAvatar;

export const config: Component = {
  name: 'ListItemAvatar',
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
  docsLink: 'https://mui.com/material-ui/api/list-item-avatar/',
};
