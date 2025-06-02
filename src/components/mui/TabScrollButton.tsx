import type { Component } from '@builder.io/sdk';
import MuiTabScrollButton from '@mui/material/TabScrollButton';
import type { TabScrollButtonProps as MuiTabScrollButtonProps } from '@mui/material/TabScrollButton';

function TabScrollButton(props: MuiTabScrollButtonProps) {
  return <MuiTabScrollButton {...props} />;
}

export default TabScrollButton;

export const config: Component = {
  name: 'TabScrollButton',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'direction',
      type: 'text',
      enum: ['left', 'right'],
      defaultValue: 'left',
      helperText: 'The direction the button should indicate.',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: true,
      helperText: 'If true, the button is visible.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/tab-scroll-button/',
};
