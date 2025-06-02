import type { Component } from '@builder.io/sdk';
import MuiOutlinedInput from '@mui/material/OutlinedInput';
import type { OutlinedInputProps as MuiOutlinedInputProps } from '@mui/material/OutlinedInput';

function OutlinedInput(props: MuiOutlinedInputProps) {
  return <MuiOutlinedInput {...props} />;
}

export default OutlinedInput;

export const config: Component = {
  name: 'OutlinedInput',
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
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the input takes up the full width.',
    },
    {
      name: 'notched',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the outline is notched.',
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
  docsLink: 'https://mui.com/material-ui/api/outlined-input/',
};
