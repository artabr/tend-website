import type { Component } from '@builder.io/sdk';
import MuiTooltip from '@mui/material/Tooltip';
import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

function Tooltip(props: MuiTooltipProps) {
  return <MuiTooltip {...props}>{props.children}</MuiTooltip>;
}

export default Tooltip;

export const config: Component = {
  name: 'Tooltip',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'title',
      type: 'string',
      helperText: 'Tooltip title.',
    },
    {
      name: 'placement',
      type: 'text',
      enum: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
      defaultValue: 'bottom',
      helperText: 'Placement of the tooltip.',
    },
    {
      name: 'arrow',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, adds an arrow to the tooltip.',
    },
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the tooltip is shown.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/tooltip/',
};
