import type { Component } from '@builder.io/sdk';
import MuiInputAdornment from '@mui/material/InputAdornment';
import type { InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material/InputAdornment';

function InputAdornment(props: MuiInputAdornmentProps) {
  return <MuiInputAdornment {...props}>{props.children}</MuiInputAdornment>;
}

export default InputAdornment;

export const config: Component = {
  name: 'InputAdornment',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'position',
      type: 'text',
      enum: ['start', 'end'],
      defaultValue: 'start',
      helperText: 'Position of the adornment.',
    },
    {
      name: 'disablePointerEvents',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, pointer events are disabled.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'outlined', 'filled'],
      defaultValue: 'standard',
      helperText: 'The variant to use.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/input-adornment/',
};
