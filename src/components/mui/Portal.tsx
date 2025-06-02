import type { Component } from '@builder.io/sdk';
import MuiPortal from '@mui/material/Portal';
import type { PortalProps as MuiPortalProps } from '@mui/material/Portal';

function Portal(props: MuiPortalProps) {
  return <MuiPortal {...props}>{props.children}</MuiPortal>;
}

export default Portal;

export const config: Component = {
  name: 'Portal',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'container',
      type: 'string',
      helperText: 'The container to render the children into.',
    },
    {
      name: 'disablePortal',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables portal behavior.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/portal/',
};
