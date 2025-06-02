import type { Component } from '@builder.io/sdk';
import MuiCardHeader from '@mui/material/CardHeader';
import type { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

function CardHeader(props: MuiCardHeaderProps) {
  return <MuiCardHeader {...props} />;
}

export default CardHeader;

export const config: Component = {
  name: 'CardHeader',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'avatar',
      type: 'string',
      helperText: 'The Avatar element to display.',
    },
    {
      name: 'action',
      type: 'string',
      helperText: 'The action to display in the card header.',
    },
    {
      name: 'title',
      type: 'string',
      helperText: 'The title to display.',
    },
    {
      name: 'subheader',
      type: 'string',
      helperText: 'The subheader to display.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/card-header/',
};
