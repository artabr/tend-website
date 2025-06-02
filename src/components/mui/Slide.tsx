import type { Component } from '@builder.io/sdk';
import MuiSlide from '@mui/material/Slide';
import type { SlideProps as MuiSlideProps } from '@mui/material/Slide';

function Slide(props: MuiSlideProps) {
  return <MuiSlide {...props}>{props.children}</MuiSlide>;
}

export default Slide;

export const config: Component = {
  name: 'Slide',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'in',
      type: 'boolean',
      helperText: 'If true, the component will transition in.',
    },
    {
      name: 'direction',
      type: 'text',
      enum: ['left', 'right', 'up', 'down'],
      defaultValue: 'down',
      helperText: 'Direction the child node enters from.',
    },
    {
      name: 'timeout',
      type: 'number',
      helperText: 'Duration of the transition, in ms.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/slide/',
};
