import type { Component } from '@builder.io/sdk';
import MuiRadioGroup from '@mui/material/RadioGroup';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

function RadioGroup(props: MuiRadioGroupProps) {
  return <MuiRadioGroup {...props}>{props.children}</MuiRadioGroup>;
}

export default RadioGroup;

export const config: Component = {
  name: 'RadioGroup',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'row',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Display group in a row.',
    },
    {
      name: 'name',
      type: 'string',
      helperText: 'Name attribute of the group.',
    },
    {
      name: 'value',
      type: 'string',
      helperText: 'Value of the selected radio.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/radio-group/',
};
