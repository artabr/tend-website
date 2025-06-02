import type { Component } from '@builder.io/sdk';
import MuiStepButton from '@mui/material/StepButton';
import type { StepButtonProps as MuiStepButtonProps } from '@mui/material/StepButton';

function StepButton(props: MuiStepButtonProps) {
  return <MuiStepButton {...props}>{props.children}</MuiStepButton>;
}

export default StepButton;

export const config: Component = {
  name: 'StepButton',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'icon',
      type: 'string',
      helperText: 'Override the default icon.',
    },
    {
      name: 'optional',
      type: 'string',
      helperText: 'The optional node to display.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/step-button/',
};
