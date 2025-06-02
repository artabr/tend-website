import type { Component } from '@builder.io/sdk';
import MuiListSubheader from '@mui/material/ListSubheader';
import type { ListSubheaderProps as MuiListSubheaderProps } from '@mui/material/ListSubheader';

function ListSubheader(props: MuiListSubheaderProps) {
  return <MuiListSubheader {...props}>{props.children}</MuiListSubheader>;
}

export default ListSubheader;

export const config: Component = {
  name: 'ListSubheader',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['default', 'primary', 'inherit'],
      defaultValue: 'default',
      helperText: 'The color of the component.',
    },
    {
      name: 'disableGutters',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables gutters.',
    },
    {
      name: 'disableSticky',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables sticky positioning.',
    },
    {
      name: 'inset',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, adds left margin.',
    },
    {
      name: 'sticky',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the subheader is sticky.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/list-subheader/',
};
