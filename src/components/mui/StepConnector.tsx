import type { Component } from '@builder.io/sdk';
import MuiStepConnector from '@mui/material/StepConnector';
import type { StepConnectorProps as MuiStepConnectorProps } from '@mui/material/StepConnector';

function StepConnector(props: MuiStepConnectorProps) {
  return <MuiStepConnector {...props} />;
}

export default StepConnector;

export const config: Component = {
  name: 'StepConnector',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step-connector/',
};
