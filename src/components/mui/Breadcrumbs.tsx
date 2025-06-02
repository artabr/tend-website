import type { Component } from '@builder.io/sdk';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';

function Breadcrumbs(props: MuiBreadcrumbsProps) {
  return <MuiBreadcrumbs {...props}>{props.children}</MuiBreadcrumbs>;
}

export default Breadcrumbs;

export const config: Component = {
  name: 'Breadcrumbs',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    { name: 'separator', type: 'string', helperText: 'Custom separator.' },
    {
      name: 'maxItems',
      type: 'number',
      helperText: 'Maximum number of breadcrumbs to display.',
    },
    {
      name: 'itemsBeforeCollapse',
      type: 'number',
      helperText: 'Breadcrumbs before collapse.',
    },
    {
      name: 'itemsAfterCollapse',
      type: 'number',
      helperText: 'Breadcrumbs after collapse.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-breadcrumbs/',
};
