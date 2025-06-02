import type { Component } from '@builder.io/sdk';
import MuiStep from '@mui/material/Step';
import type { StepProps as MuiStepProps } from '@mui/material/Step';

function Step(props: MuiStepProps) {
  return <MuiStep {...props}>{props.children}</MuiStep>;
}

export default Step;

export const config: Component = {
  name: 'Step',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'active',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the step is active.',
    },
    {
      name: 'completed',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the step is completed.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the step is disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step/',
};
