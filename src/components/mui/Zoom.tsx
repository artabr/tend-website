import type { Component } from '@builder.io/sdk';
import MuiZoom from '@mui/material/Zoom';
import type { ZoomProps as MuiZoomProps } from '@mui/material/Zoom';

function Zoom(props: MuiZoomProps) {
  return <MuiZoom {...props}>{props.children}</MuiZoom>;
}

export default Zoom;

export const config: Component = {
  name: 'Zoom',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'in',
      type: 'boolean',
      helperText: 'If true, the component will transition in.',
    },
    {
      name: 'timeout',
      type: 'number',
      helperText: 'Duration of the transition, in ms.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/zoom/',
};
