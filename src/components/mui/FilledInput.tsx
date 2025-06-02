import type { Component } from '@builder.io/sdk';
import MuiFilledInput from '@mui/material/FilledInput';
import type { FilledInputProps as MuiFilledInputProps } from '@mui/material/FilledInput';

function FilledInput(props: MuiFilledInputProps) {
  return <MuiFilledInput {...props} />;
}

export default FilledInput;

export const config: Component = {
  name: 'FilledInput',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
    },
    {
      name: 'disableUnderline',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, disables the underline.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the input takes up the full width.',
    },
    {
      name: 'hiddenLabel',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, label is hidden.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium'],
      defaultValue: 'medium',
      helperText: 'The size of the component.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/filled-input/',
};
