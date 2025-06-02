import type { Component } from '@builder.io/sdk';
import MuiListItemText from '@mui/material/ListItemText';
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';

function ListItemText(props: MuiListItemTextProps) {
  return <MuiListItemText {...props} />;
}

export default ListItemText;

export const config: Component = {
  name: 'ListItemText',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'primary', type: 'string', helperText: 'Primary content.' },
    { name: 'secondary', type: 'string', helperText: 'Secondary content.' },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/list-item-text/',
};
