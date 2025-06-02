import type { Component } from '@builder.io/sdk';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import type { BottomNavigationProps as MuiBottomNavigationProps } from '@mui/material/BottomNavigation';

function BottomNavigation(props: MuiBottomNavigationProps) {
  return <MuiBottomNavigation {...props}>{props.children}</MuiBottomNavigation>;
}

export default BottomNavigation;

export const config: Component = {
  name: 'BottomNavigation',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the currently selected BottomNavigationAction.',
    },
    {
      name: 'showLabels',
      type: 'boolean',
      defaultValue: false,
      helperText:
        'If true, all BottomNavigationActions will show their labels.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-bottom-navigation/',
};
