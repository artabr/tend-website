import type { Component } from '@builder.io/sdk';
import MuiSpeedDialAction from '@mui/material/SpeedDialAction';
import type { SpeedDialActionProps as MuiSpeedDialActionProps } from '@mui/material/SpeedDialAction';

function SpeedDialAction(props: MuiSpeedDialActionProps) {
  return <MuiSpeedDialAction {...props} />;
}

export default SpeedDialAction;

export const config: Component = {
  name: 'SpeedDialAction',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'icon',
      type: 'string',
      helperText: 'The icon to display.',
    },
    {
      name: 'tooltipTitle',
      type: 'string',
      helperText: 'The title of the tooltip.',
    },
    {
      name: 'tooltipOpen',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the tooltip is always open.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/speed-dial-action/',
};
