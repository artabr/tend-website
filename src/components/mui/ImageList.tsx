import type { Component } from '@builder.io/sdk';
import MuiImageList from '@mui/material/ImageList';
import type { ImageListProps as MuiImageListProps } from '@mui/material/ImageList';

function ImageList(props: MuiImageListProps) {
  return <MuiImageList {...props}>{props.children}</MuiImageList>;
}

export default ImageList;

export const config: Component = {
  name: 'ImageList',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'cols',
      type: 'number',
      defaultValue: 2,
      helperText: 'Number of columns.',
    },
    {
      name: 'rowHeight',
      type: 'number',
      defaultValue: 180,
      helperText: 'Height of each row.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['masonry', 'quilted', 'standard', 'woven'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    { name: 'gap', type: 'number', helperText: 'Gap between items.' },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-image-list/',
};
