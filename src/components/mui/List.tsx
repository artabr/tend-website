import type { Component } from '@builder.io/sdk';
import MuiList from '@mui/material/List';
import type { ListProps as MuiListProps } from '@mui/material/List';

function List(props: MuiListProps) {
  return <MuiList {...props}>{props.children}</MuiList>;
}

export default List;

export const config: Component = {
  name: 'List',
  canHaveChildren: true,
  type: 'react',
  inputs: [
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
    { name: 'subheader', type: 'string', helperText: 'Subheader content.' },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/list/',
};
