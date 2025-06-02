import type { Component } from '@builder.io/sdk';
import MuiFade from '@mui/material/Fade';
import type { FadeProps as MuiFadeProps } from '@mui/material/Fade';

function Fade(props: MuiFadeProps) {
  return <MuiFade {...props}>{props.children}</MuiFade>;
}

export default Fade;

export const config: Component = {
  name: 'Fade',
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
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/fade/',
};
