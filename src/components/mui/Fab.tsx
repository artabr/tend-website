import type { Component } from '@builder.io/sdk';
import MuiFab from '@mui/material/Fab';
import type { FabProps as MuiFabProps } from '@mui/material/Fab';

function Fab(props: MuiFabProps) {
  return <MuiFab {...props}>{props.children}</MuiFab>;
}

export default Fab;

export const config: Component = {
  name: 'Fab',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: [
        'default',
        'primary',
        'secondary',
        'inherit',
        'success',
        'error',
        'info',
        'warning',
      ],
      defaultValue: 'default',
      helperText: 'The color of the component.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'large',
      helperText: 'The size of the component.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['circular', 'extended'],
      defaultValue: 'circular',
      helperText: 'The variant to use.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-floating-action-button/',
};
