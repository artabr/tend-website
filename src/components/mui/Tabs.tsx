import type { Component } from '@builder.io/sdk';
import MuiTabs from '@mui/material/Tabs';
import type { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

function Tabs(props: MuiTabsProps) {
  return <MuiTabs {...props}>{props.children}</MuiTabs>;
}

export default Tabs;

export const config: Component = {
  name: 'Tabs',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the currently selected Tab.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'scrollable', 'fullWidth'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    {
      name: 'scrollButtons',
      type: 'text',
      enum: ['auto', 'desktop', 'on', 'off'],
      defaultValue: 'auto',
      helperText: 'Scroll button behavior.',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      helperText: 'The orientation of the tabs.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/tabs/',
};
