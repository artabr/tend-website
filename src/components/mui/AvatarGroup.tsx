import type { Component } from '@builder.io/sdk';
import MuiAvatarGroup from '@mui/material/AvatarGroup';
import type { AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material/AvatarGroup';

function AvatarGroup(props: MuiAvatarGroupProps) {
  return <MuiAvatarGroup {...props}>{props.children}</MuiAvatarGroup>;
}

export default AvatarGroup;

export const config: Component = {
  name: 'AvatarGroup',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'max',
      type: 'number',
      helperText: 'Max avatars to display before +x.',
    },
    { name: 'spacing', type: 'number', helperText: 'Spacing between avatars.' },
    { name: 'total', type: 'number', helperText: 'Total number of avatars.' },
    {
      name: 'variant',
      type: 'text',
      enum: ['circular', 'rounded', 'square'],
      defaultValue: 'circular',
      helperText: 'The shape of the avatars.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/avatar-group/',
};
