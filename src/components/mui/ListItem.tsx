import type { Component } from '@builder.io/sdk';
import MuiListItem from '@mui/material/ListItem';
import type { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

function ListItem(props: MuiListItemProps) {
  return <MuiListItem {...props}>{props.children}</MuiListItem>;
}

export default ListItem;

export const config: Component = {
  name: 'ListItem',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'button',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the list item is a button.',
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
  docsLink: 'https://mui.com/material-ui/api/list-item/',
};
