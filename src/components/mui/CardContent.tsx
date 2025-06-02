import type { Component } from '@builder.io/sdk';
import MuiCardContent from '@mui/material/CardContent';
import type { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';

function CardContent(props: MuiCardContentProps) {
  return <MuiCardContent {...props}>{props.children}</MuiCardContent>;
}

export default CardContent;

export const config: Component = {
  name: 'CardContent',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'component',
      type: 'text',
      helperText:
        'The component used for the root node. Either a string to use a HTML element or a component.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/card-content/',
};
