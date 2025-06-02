import type { Component } from '@builder.io/sdk';
import MuiContainer from '@mui/material/Container';
import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

function Container(props: MuiContainerProps) {
  return <MuiContainer {...props}>{props.children}</MuiContainer>;
}

export default Container;

export const config: Component = {
  name: 'Container',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'maxWidth',
      type: 'text',
      enum: [
        { label: 'xs', value: 'xs' },
        { label: 'sm', value: 'sm' },
        { label: 'md', value: 'md' },
        { label: 'lg', value: 'lg' },
        { label: 'xl', value: 'xl' },
        { label: 'false', value: false },
      ],
      defaultValue: 'lg',
      helperText: 'The max-width of the container.',
    },
    {
      name: 'fixed',
      type: 'boolean',
      defaultValue: false,
      helperText:
        'If true, sets maxWidth to match the min-width of the current breakpoint.',
    },
    {
      name: 'disableGutters',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables the default left and right padding.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-container/',
};
