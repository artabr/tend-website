import type { Component } from '@builder.io/sdk';
import MuiFormHelperText from '@mui/material/FormHelperText';
import type { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText';

function FormHelperText(props: MuiFormHelperTextProps) {
  return <MuiFormHelperText {...props}>{props.children}</MuiFormHelperText>;
}

export default FormHelperText;

export const config: Component = {
  name: 'FormHelperText',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the helper text is disabled.',
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: false,
      helperText:
        'If true, the helper text should be displayed in an error state.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/form-helper-text/',
};
