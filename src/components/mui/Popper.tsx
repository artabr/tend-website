import type { Component } from '@builder.io/sdk';
import MuiPopper from '@mui/material/Popper';
import type { PopperProps as MuiPopperProps } from '@mui/material/Popper';

function Popper(props: MuiPopperProps) {
  return <MuiPopper {...props}>{props.children}</MuiPopper>;
}

export default Popper;

export const config: Component = {
  name: 'Popper',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the popper is open.',
    },
    {
      name: 'anchorEl',
      type: 'string',
      helperText: 'The DOM element used as the anchor.',
    },
    {
      name: 'placement',
      type: 'text',
      enum: [
        'bottom',
        'top',
        'right',
        'left',
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
      defaultValue: 'bottom',
      helperText: 'Placement of the popper.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/popper/',
};
