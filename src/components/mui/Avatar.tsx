import type { Component } from '@builder.io/sdk';
import MuiAvatar from '@mui/material/Avatar';
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

function Avatar(props: MuiAvatarProps) {
  return <MuiAvatar {...props}>{props.children}</MuiAvatar>;
}

export default Avatar;

export const config: Component = {
  name: 'Avatar',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'alt',
      type: 'string',
      helperText: 'The alt text for the avatar image.',
    },
    {
      name: 'src',
      type: 'string',
      helperText: 'The image URL.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['circular', 'rounded', 'square'],
      defaultValue: 'circular',
      helperText: 'The shape of the avatar.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
    {
      name: 'imgProps',
      type: 'object',
      helperText:
        'Attributes applied to the img element if the component is used to display an image.',
      advanced: true,
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'A',
        },
      },
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-avatar/',
};
