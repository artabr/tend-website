import type { Component } from '@builder.io/sdk';
import MuiCardActionArea from '@mui/material/CardActionArea';
import type { CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material/CardActionArea';

function CardActionArea(props: MuiCardActionAreaProps) {
  return <MuiCardActionArea {...props}>{props.children}</MuiCardActionArea>;
}

export default CardActionArea;

export const config: Component = {
  name: 'CardActionArea',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'focusVisibleClassName',
      type: 'string',
      helperText: 'Class applied when the action area is focused.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/card-action-area/',
};
