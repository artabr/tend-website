import type { Component } from '@builder.io/sdk';
import MuiListItemButton from '@mui/material/ListItemButton';
import type { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

function ListItemButton(props: MuiListItemButtonProps) {
  return <MuiListItemButton {...props}>{props.children}</MuiListItemButton>;
}

export default ListItemButton;

export const config: Component = {
  name: 'ListItemButton',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'autoFocus',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the list item is focused on mount.',
    },
    {
      name: 'dense',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, compact vertical padding.',
    },
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
  docsLink: 'https://mui.com/material-ui/api/list-item-button/',
};
