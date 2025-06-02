import type { Component } from '@builder.io/sdk';
import MuiStepContent from '@mui/material/StepContent';
import type { StepContentProps as MuiStepContentProps } from '@mui/material/StepContent';

function StepContent(props: MuiStepContentProps) {
  return <MuiStepContent {...props}>{props.children}</MuiStepContent>;
}

export default StepContent;

export const config: Component = {
  name: 'StepContent',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'TransitionComponent',
      type: 'string',
      helperText: 'The component used for the transition.',
    },
    {
      name: 'transitionDuration',
      type: 'number',
      helperText: 'The duration for the transition, in ms.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step-content/',
};
