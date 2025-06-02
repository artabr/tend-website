import type { Component } from '@builder.io/sdk';
import MuiStepIcon from '@mui/material/StepIcon';
import type { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon';

function StepIcon(props: MuiStepIconProps) {
  return <MuiStepIcon {...props} />;
}

export default StepIcon;

export const config: Component = {
  name: 'StepIcon',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'icon',
      type: 'string',
      helperText: 'The icon node.',
    },
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
      name: 'error',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the step is in error state.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step-icon/',
};
