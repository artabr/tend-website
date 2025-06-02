import type { Component } from '@builder.io/sdk';
import MuiCard from '@mui/material/Card';
import type { CardProps as MuiCardProps } from '@mui/material/Card';

function Card(props: MuiCardProps) {
  return <MuiCard {...props}>{props.children}</MuiCard>;
}

export default Card;

export const config: Component = {
  name: 'Card',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'elevation',
      type: 'number',
      defaultValue: 1,
      helperText: 'Shadow depth, accepts values between 0 and 24.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['elevation', 'outlined'],
      defaultValue: 'elevation',
      helperText: 'The variant to use.',
    },
    {
      name: 'raised',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the card will use raised styling.',
    },
    {
      name: 'square',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, rounded corners are disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'CardContent',
        options: {
          children: [
            {
              '@type': '@builder.io/sdk:Element',
              component: {
                name: 'Text',
                options: {
                  text: 'This is sample text',
                },
              },
            },
          ],
        },
      },
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-card/',
};
