import type { Component } from '@builder.io/sdk';
import MuiRating from '@mui/material/Rating';
import type { RatingProps as MuiRatingProps } from '@mui/material/Rating';

function Rating(props: MuiRatingProps) {
  return <MuiRating {...props} />;
}

export default Rating;

export const config: Component = {
  name: 'Rating',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'value', type: 'number', helperText: 'The rating value.' },
    {
      name: 'max',
      type: 'number',
      defaultValue: 5,
      helperText: 'Maximum rating value.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the rating is read-only.',
    },
    {
      name: 'precision',
      type: 'number',
      defaultValue: 1,
      helperText: 'The minimum increment value change.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      helperText: 'The size of the component.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/rating/',
};
