import type { Component } from '@builder.io/sdk';
import MuiSpeedDialIcon from '@mui/material/SpeedDialIcon';
import type { SpeedDialIconProps as MuiSpeedDialIconProps } from '@mui/material/SpeedDialIcon';

function SpeedDialIcon(props: MuiSpeedDialIconProps) {
  return <MuiSpeedDialIcon {...props} />;
}

export default SpeedDialIcon;

export const config: Component = {
  name: 'SpeedDialIcon',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'openIcon',
      type: 'string',
      helperText: 'The icon to display in the open state.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/speed-dial-icon/',
};
