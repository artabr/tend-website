import type { Component } from '@builder.io/sdk';
import MuiImageListItem from '@mui/material/ImageListItem';
import type { ImageListItemProps as MuiImageListItemProps } from '@mui/material/ImageListItem';

function ImageListItem(props: MuiImageListItemProps) {
  return <MuiImageListItem {...props}>{props.children}</MuiImageListItem>;
}

export default ImageListItem;

export const config: Component = {
  name: 'ImageListItem',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'cols',
      type: 'number',
      helperText: 'Number of columns the item spans.',
    },
    {
      name: 'rows',
      type: 'number',
      helperText: 'Number of rows the item spans.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/image-list-item/',
};
