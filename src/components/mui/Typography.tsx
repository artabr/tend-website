import type { Component } from '@builder.io/sdk';
import MuiTypography from '@mui/material/Typography';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

function Typography(props: MuiTypographyProps) {
  return <MuiTypography {...props}>{props.children}</MuiTypography>;
}

export default Typography;

export const config: Component = {
  name: 'Typography',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'variant',
      type: 'text',
      enum: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
      defaultValue: 'body1',
      helperText: 'The variant to use.',
    },
    {
      name: 'align',
      type: 'text',
      enum: ['inherit', 'left', 'center', 'right', 'justify'],
      defaultValue: 'inherit',
      helperText: 'Set the text-align.',
    },
    {
      name: 'color',
      type: 'text',
      enum: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      defaultValue: 'initial',
      helperText: 'The color of the component.',
    },
    {
      name: 'gutterBottom',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, adds bottom margin.',
    },
    {
      name: 'noWrap',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the text will not wrap.',
    },
    {
      name: 'paragraph',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the text will be a paragraph.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/typography/',
};
