import type { Component } from '@builder.io/sdk';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import type { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';

function AccordionSummary(props: MuiAccordionSummaryProps) {
  return <MuiAccordionSummary {...props}>{props.children}</MuiAccordionSummary>;
}

export default AccordionSummary;

export const config: Component = {
  name: 'AccordionSummary',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'expandIcon',
      type: 'string',
      helperText: 'The icon to display as the expand indicator.',
    },
    {
      name: 'aria-controls',
      type: 'string',
      helperText: 'The id of the region controlled by the accordion.',
    },
    {
      name: 'id',
      type: 'string',
      helperText: 'The id of the accordion summary.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/accordion-summary/',
};
