import type { Component } from '@builder.io/sdk';
import MuiTab from '@mui/material/Tab';
import type { TabProps as MuiTabProps } from '@mui/material/Tab';

function Tab(props: MuiTabProps) {
  return <MuiTab {...props} />;
}

export default Tab;

export const config: Component = {
  name: 'Tab',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'label',
      type: 'string',
      helperText: 'The label element.',
    },
    {
      name: 'icon',
      type: 'string',
      helperText: 'The icon element.',
    },
    {
      name: 'value',
      type: 'string',
      helperText: 'You can provide your own value.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/tab/',
};
