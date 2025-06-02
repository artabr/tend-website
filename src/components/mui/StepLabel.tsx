import type { Component } from '@builder.io/sdk';
import MuiStepLabel from '@mui/material/StepLabel';
import type { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

function StepLabel(props: MuiStepLabelProps) {
  return <MuiStepLabel {...props}>{props.children}</MuiStepLabel>;
}

export default StepLabel;

export const config: Component = {
  name: 'StepLabel',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'optional',
      type: 'string',
      helperText: 'The optional node to display.',
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the label is in an error state.',
    },
    {
      name: 'icon',
      type: 'string',
      helperText: 'Override the default icon.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step-label/',
};
