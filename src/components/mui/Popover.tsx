import type { Component } from '@builder.io/sdk';
import MuiPopover from '@mui/material/Popover';
import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

function Popover(props: MuiPopoverProps) {
  return <MuiPopover {...props}>{props.children}</MuiPopover>;
}

export default Popover;

export const config: Component = {
  name: 'Popover',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the popover is open.',
    },
    {
      name: 'anchorEl',
      type: 'string',
      helperText: 'The DOM element used as the anchor.',
    },
    {
      name: 'onClose',
      type: 'event',
      helperText: 'Callback fired when the popover is closed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/popover/',
};
