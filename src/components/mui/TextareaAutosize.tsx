import type { Component } from '@builder.io/sdk';
import MuiTextareaAutosize from '@mui/material/TextareaAutosize';
import type { TextareaAutosizeProps as MuiTextareaAutosizeProps } from '@mui/material/TextareaAutosize';

function TextareaAutosize(props: MuiTextareaAutosizeProps) {
  return <MuiTextareaAutosize {...props} />;
}

export default TextareaAutosize;

export const config: Component = {
  name: 'TextareaAutosize',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'minRows',
      type: 'number',
      helperText: 'Minimum number of rows to display.',
    },
    {
      name: 'maxRows',
      type: 'number',
      helperText: 'Maximum number of rows to display.',
    },
    {
      name: 'placeholder',
      type: 'string',
      helperText: 'Placeholder text.',
    },
    {
      name: 'value',
      type: 'string',
      helperText: 'The value of the textarea.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the textarea is disabled.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/textarea-autosize/',
};
