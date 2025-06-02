import type { Component } from '@builder.io/sdk';
import MuiGrid from '@mui/material/Grid';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';

function Grid(props: MuiGridProps) {
  return <MuiGrid {...props}>{props.children}</MuiGrid>;
}

export default Grid;

export const config: Component = {
  name: 'Grid',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'container',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component will have container behavior.',
    },
    {
      name: 'item',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component will have item behavior.',
    },
    { name: 'xs', type: 'number', helperText: 'Grid size for xs breakpoint.' },
    { name: 'sm', type: 'number', helperText: 'Grid size for sm breakpoint.' },
    { name: 'md', type: 'number', helperText: 'Grid size for md breakpoint.' },
    { name: 'lg', type: 'number', helperText: 'Grid size for lg breakpoint.' },
    { name: 'xl', type: 'number', helperText: 'Grid size for xl breakpoint.' },
    { name: 'spacing', type: 'number', helperText: 'Spacing between items.' },
    {
      name: 'direction',
      type: 'text',
      enum: ['row', 'row-reverse', 'column', 'column-reverse'],
      defaultValue: 'row',
      helperText: 'Flex direction.',
    },
    {
      name: 'wrap',
      type: 'text',
      enum: ['nowrap', 'wrap', 'wrap-reverse'],
      defaultValue: 'wrap',
      helperText: 'Flex wrap.',
    },
    {
      name: 'alignItems',
      type: 'text',
      enum: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      defaultValue: 'stretch',
      helperText: 'Align items.',
    },
    {
      name: 'justifyContent',
      type: 'text',
      enum: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      defaultValue: 'flex-start',
      helperText: 'Justify content.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-grid/',
};
