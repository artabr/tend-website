import type { Component } from '@builder.io/sdk';
import MuiSpeedDial from '@mui/material/SpeedDial';
import type { SpeedDialProps as MuiSpeedDialProps } from '@mui/material/SpeedDial';

function SpeedDial(props: MuiSpeedDialProps) {
  return <MuiSpeedDial {...props}>{props.children}</MuiSpeedDial>;
}

export default SpeedDial;

export const config: Component = {
  name: 'SpeedDial',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'ariaLabel',
      type: 'string',
      helperText: 'The aria-label for the SpeedDial.',
    },
    {
      name: 'direction',
      type: 'text',
      enum: ['up', 'down', 'left', 'right'],
      defaultValue: 'up',
      helperText: 'The direction the actions open.',
    },
    {
      name: 'hidden',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the SpeedDial is hidden.',
    },
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the SpeedDial is open.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/speed-dial/',
};
