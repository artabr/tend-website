import type { Component } from '@builder.io/sdk';
import MuiBadge from '@mui/material/Badge';
import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

function Badge(props: MuiBadgeProps) {
  return <MuiBadge {...props}>{props.children}</MuiBadge>;
}

export default Badge;

export const config: Component = {
  name: 'Badge',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'badgeContent',
      type: 'string',
      helperText: 'The content rendered within the badge.',
    },
    {
      name: 'color',
      type: 'text',
      enum: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      defaultValue: 'default',
      helperText: 'The color of the badge.',
    },
    {
      name: 'max',
      type: 'number',
      helperText: 'Max count to show.',
    },
    {
      name: 'showZero',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Show badge when content is zero.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'dot'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    {
      name: 'invisible',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the badge is invisible.',
    },
    {
      name: 'anchorOrigin',
      type: 'object',
      helperText: 'The anchor position of the badge.',
      advanced: true,
    },
    {
      name: 'overlap',
      type: 'text',
      enum: ['rectangular', 'circular'],
      defaultValue: 'rectangular',
      helperText: 'The shape overlap.',
      advanced: true,
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'Badge',
        },
      },
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-badge/',
};
