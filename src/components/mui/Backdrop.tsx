import type { Component } from '@builder.io/sdk';
import MuiBackdrop from '@mui/material/Backdrop';
import type { BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';

function Backdrop(props: MuiBackdropProps) {
  return <MuiBackdrop {...props}>{props.children}</MuiBackdrop>;
}

export default Backdrop;

export const config: Component = {
  name: 'Backdrop',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the backdrop is open.',
    },
    {
      name: 'transitionDuration',
      type: 'number',
      helperText: 'The duration for the transition, in milliseconds.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-backdrop/',
};
