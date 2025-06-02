import type { Component } from '@builder.io/sdk';
import MuiAccordionActions from '@mui/material/AccordionActions';
import type { AccordionActionsProps as MuiAccordionActionsProps } from '@mui/material/AccordionActions';

function AccordionActions(props: MuiAccordionActionsProps) {
  return <MuiAccordionActions {...props}>{props.children}</MuiAccordionActions>;
}

export default AccordionActions;

export const config: Component = {
  name: 'AccordionActions',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disableSpacing',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, spacing between actions is removed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/accordion-actions/',
};
