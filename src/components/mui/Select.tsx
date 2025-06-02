import type { Component } from '@builder.io/sdk';
import MuiSelect from '@mui/material/Select';
import type { SelectProps as MuiSelectProps } from '@mui/material/Select';

function Select(props: MuiSelectProps) {
  return <MuiSelect {...props}>{props.children}</MuiSelect>;
}

export default Select;

export const config: Component = {
  name: 'Select',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'autoWidth',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the width is set automatically.',
    },
    {
      name: 'displayEmpty',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, a value is displayed even if it is empty.',
    },
    { name: 'label', type: 'string', helperText: 'The label content.' },
    {
      name: 'multiple',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, multiple values can be selected.',
    },
    {
      name: 'native',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component uses native select element.',
    },
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the select element.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/select/',
};
