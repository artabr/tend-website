import type { Component } from '@builder.io/sdk';
import MuiInput from '@mui/material/Input';
import type { InputProps as MuiInputProps } from '@mui/material/Input';

function Input(props: MuiInputProps) {
  return <MuiInput {...props} />;
}

export default Input;

export const config: Component = {
  name: 'Input',
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
  docsLink: 'https://mui.com/material-ui/api/input/',
};
