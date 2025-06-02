import type { Component } from '@builder.io/sdk';
import MuiPaginationItem from '@mui/material/PaginationItem';
import type { PaginationItemProps as MuiPaginationItemProps } from '@mui/material/PaginationItem';

function PaginationItem(props: MuiPaginationItemProps) {
  return <MuiPaginationItem {...props} />;
}

export default PaginationItem;

export const config: Component = {
  name: 'PaginationItem',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'page', type: 'number', helperText: 'The page number.' },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the item is selected.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the item is disabled.',
    },
    {
      name: 'type',
      type: 'text',
      enum: [
        'page',
        'first',
        'last',
        'next',
        'previous',
        'start-ellipsis',
        'end-ellipsis',
      ],
      defaultValue: 'page',
      helperText: 'The type of pagination item.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/pagination-item/',
};
