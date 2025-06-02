import type { Component } from '@builder.io/sdk';
import MuiCollapse from '@mui/material/Collapse';
import type { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse';

function Collapse(props: MuiCollapseProps) {
  return <MuiCollapse {...props}>{props.children}</MuiCollapse>;
}

export default Collapse;

export const config: Component = {
  name: 'Collapse',
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
      name: 'collapsedSize',
      type: 'number',
      helperText: 'The height of the container when collapsed.',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'vertical',
      helperText: 'The transition orientation.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-collapse/',
};
