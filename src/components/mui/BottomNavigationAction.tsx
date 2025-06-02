import type { Component } from '@builder.io/sdk';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import type { BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@mui/material/BottomNavigationAction';

function BottomNavigationAction(props: MuiBottomNavigationActionProps) {
  return <MuiBottomNavigationAction {...props} />;
}

export default BottomNavigationAction;

export const config: Component = {
  name: 'BottomNavigationAction',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'label', type: 'string', helperText: 'Label for the action.' },
    { name: 'value', type: 'string', helperText: 'Value of the action.' },
    { name: 'icon', type: 'string', helperText: 'Icon to display.' },
    {
      name: 'showLabel',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Show label even when not selected.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/bottom-navigation-action/',
};
