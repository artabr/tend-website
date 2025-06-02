import type { Component } from '@builder.io/sdk';
import MuiImageListItemBar from '@mui/material/ImageListItemBar';
import type { ImageListItemBarProps as MuiImageListItemBarProps } from '@mui/material/ImageListItemBar';

function ImageListItemBar(props: MuiImageListItemBarProps) {
  return <MuiImageListItemBar {...props} />;
}

export default ImageListItemBar;

export const config: Component = {
  name: 'ImageListItemBar',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'title', type: 'string', helperText: 'Title to display.' },
    { name: 'subtitle', type: 'string', helperText: 'Subtitle to display.' },
    {
      name: 'position',
      type: 'text',
      enum: ['top', 'bottom'],
      defaultValue: 'bottom',
      helperText: 'Position of the bar.',
    },
    {
      name: 'actionIcon',
      type: 'string',
      helperText: 'Action icon to display.',
    },
    {
      name: 'actionPosition',
      type: 'text',
      enum: ['left', 'right'],
      defaultValue: 'right',
      helperText: 'Position of the action icon.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/image-list-item-bar/',
};
