import type { Component } from '@builder.io/sdk';
import MuiListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import type { ListItemSecondaryActionProps as MuiListItemSecondaryActionProps } from '@mui/material/ListItemSecondaryAction';

function ListItemSecondaryAction(props: MuiListItemSecondaryActionProps) {
  return (
    <MuiListItemSecondaryAction {...props}>
      {props.children}
    </MuiListItemSecondaryAction>
  );
}

export default ListItemSecondaryAction;

export const config: Component = {
  name: 'ListItemSecondaryAction',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/list-item-secondary-action/',
};
