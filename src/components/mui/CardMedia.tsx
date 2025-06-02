import type { Component } from '@builder.io/sdk';
import MuiCardMedia from '@mui/material/CardMedia';
import type { CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';

function CardMedia(props: MuiCardMediaProps) {
  return <MuiCardMedia {...props} />;
}

export default CardMedia;

export const config: Component = {
  name: 'CardMedia',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'component',
      type: 'text',
      helperText:
        'The component used for the root node. Either a string to use a HTML element or a component.',
    },
    {
      name: 'image',
      type: 'string',
      helperText: 'Image to display as background.',
    },
    {
      name: 'src',
      type: 'string',
      helperText: 'The image src attribute.',
    },
    {
      name: 'alt',
      type: 'string',
      helperText: 'The image alt attribute.',
    },
    {
      name: 'title',
      type: 'string',
      helperText: 'The title of the media.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/card-media/',
};
