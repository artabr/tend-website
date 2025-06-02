import type { Component } from '@builder.io/sdk';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import type { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';

function AccordionDetails(props: MuiAccordionDetailsProps) {
  return <MuiAccordionDetails {...props}>{props.children}</MuiAccordionDetails>;
}

export default AccordionDetails;

export const config: Component = {
  name: 'AccordionDetails',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/accordion-details/',
};
