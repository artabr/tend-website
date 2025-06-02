import type { Component } from '@builder.io/sdk';
import MuiPagination from '@mui/material/Pagination';
import type { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';

function Pagination(props: MuiPaginationProps) {
  return <MuiPagination {...props} />;
}

export default Pagination;

export const config: Component = {
  name: 'Pagination',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'count', type: 'number', helperText: 'Total number of pages.' },
    { name: 'page', type: 'number', helperText: 'Current page.' },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'secondary', 'standard'],
      defaultValue: 'standard',
      helperText: 'The color of the component.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      helperText: 'The size of the component.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['text', 'outlined'],
      defaultValue: 'text',
      helperText: 'The variant to use.',
    },
    {
      name: 'shape',
      type: 'text',
      enum: ['circular', 'rounded'],
      defaultValue: 'circular',
      helperText: 'The shape of the component.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/pagination/',
};
