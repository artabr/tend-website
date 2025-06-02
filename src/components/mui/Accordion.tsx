import type { Component } from '@builder.io/sdk';
import MuiAccordion from '@mui/material/Accordion';
import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';

function Accordion(props: MuiAccordionProps) {
  return <MuiAccordion {...props}>{props.children}</MuiAccordion>;
}

export default Accordion;

export const config: Component = {
  name: 'Accordion',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'expanded',
      type: 'boolean',
      helperText: 'If true, expands the accordion.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the accordion is disabled.',
    },
    {
      name: 'square',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, rounded corners are disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-accordion/',
};
