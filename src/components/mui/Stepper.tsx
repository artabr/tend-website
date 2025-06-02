import type { Component } from '@builder.io/sdk';
import MuiStepper from '@mui/material/Stepper';
import type { StepperProps as MuiStepperProps } from '@mui/material/Stepper';

function Stepper(props: MuiStepperProps) {
  return <MuiStepper {...props}>{props.children}</MuiStepper>;
}

export default Stepper;

export const config: Component = {
  name: 'Stepper',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'activeStep',
      type: 'number',
      helperText: 'Set the active step (zero-based index).',
    },
    {
      name: 'alternativeLabel',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the stepper will use alternative label style.',
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      helperText: 'The stepper orientation.',
    },
    {
      name: 'nonLinear',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the stepper will not enforce linear step order.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/stepper/',
};
