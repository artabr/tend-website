import type { Component } from '@builder.io/sdk';
import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

function Box(props: MuiBoxProps) {
  return <MuiBox {...props}>{props.children}</MuiBox>;
}

export default Box;

export const config: Component = {
  name: 'Box',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'component',
      type: 'text',
      helperText: 'The component used for the root node.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-box/',
};
