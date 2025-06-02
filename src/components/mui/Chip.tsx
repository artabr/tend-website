import type { Component } from '@builder.io/sdk';
import MuiChip from '@mui/material/Chip';
import type { ChipProps as MuiChipProps } from '@mui/material/Chip';

function Chip(props: MuiChipProps) {
  return <MuiChip {...props}>{props.children}</MuiChip>;
}

export default Chip;

export const config: Component = {
  name: 'Chip',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'label',
      type: 'string',
      helperText: 'The content of the chip.',
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
      helperText: 'The color of the chip.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['filled', 'outlined'],
      defaultValue: 'filled',
      helperText: 'The variant to use.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium'],
      defaultValue: 'medium',
      helperText: 'The size of the chip.',
    },
    {
      name: 'onDelete',
      type: 'event',
      helperText: 'Callback fired when the delete icon is clicked.',
    },
    {
      name: 'avatar',
      type: 'string',
      helperText: 'Element to display before the content.',
    },
    {
      name: 'icon',
      type: 'string',
      helperText: 'Icon element to display before the content.',
    },
    {
      name: 'deleteIcon',
      type: 'string',
      helperText: 'Delete icon element.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  defaultChildren: [],
  docsLink: 'https://mui.com/material-ui/react-chip/',
};
