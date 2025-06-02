import type { Component } from '@builder.io/sdk';
import MuiLink from '@mui/material/Link';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';

function Link(props: MuiLinkProps) {
  return <MuiLink {...props}>{props.children}</MuiLink>;
}

export default Link;

export const config: Component = {
  name: 'Link',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    { name: 'href', type: 'string', helperText: 'The URL to link to.' },
    {
      name: 'color',
      type: 'text',
      enum: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      defaultValue: 'primary',
      helperText: 'The color of the link.',
    },
    {
      name: 'underline',
      type: 'text',
      enum: ['none', 'hover', 'always'],
      defaultValue: 'hover',
      helperText: 'When to show underline.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: [
        'inherit',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
        'subtitle1',
        'subtitle2',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
      defaultValue: 'inherit',
      helperText: 'Typography variant.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/link/',
};
