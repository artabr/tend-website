import type { Component } from '@builder.io/sdk';
import MuiCardActions from '@mui/material/CardActions';
import type { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';

function CardActions(props: MuiCardActionsProps) {
  return <MuiCardActions {...props}>{props.children}</MuiCardActions>;
}

export default CardActions;

export const config: Component = {
  name: 'CardActions',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disableSpacing',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, spacing between action buttons is removed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/card-actions/',
};
