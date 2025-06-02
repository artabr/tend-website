import type { Component } from '@builder.io/sdk';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

function TextField(props: MuiTextFieldProps) {
  return <MuiTextField {...props} />;
}

export default TextField;

export const config: Component = {
  name: 'TextField',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'label',
      type: 'string',
      helperText: 'The label content.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['filled', 'outlined', 'standard'],
      defaultValue: 'outlined',
      helperText: 'The variant to use.',
    },
    {
      name: 'type',
      type: 'text',
      enum: ['text', 'number', 'password', 'email', 'search', 'tel', 'url'],
      defaultValue: 'text',
      helperText: 'Type of input element.',
    },
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the input element.',
    },
    {
      name: 'placeholder',
      type: 'string',
      helperText: 'Placeholder text.',
    },
    {
      name: 'multiline',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, a textarea element will be rendered.',
    },
    {
      name: 'rows',
      type: 'number',
      helperText: 'Number of rows to display when multiline is true.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the input will take up the full width.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the input is disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/text-field/',
};
