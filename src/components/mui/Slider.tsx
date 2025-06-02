import type { Component } from '@builder.io/sdk';
import MuiSlider from '@mui/material/Slider';
import type { SliderProps as MuiSliderProps } from '@mui/material/Slider';

function Slider(props: MuiSliderProps) {
  return <MuiSlider {...props} />;
}

export default Slider;

export const config: Component = {
  name: 'Slider',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    { name: 'value', type: 'number', helperText: 'The value of the slider.' },
    { name: 'min', type: 'number', helperText: 'Minimum value.' },
    { name: 'max', type: 'number', helperText: 'Maximum value.' },
    { name: 'step', type: 'number', helperText: 'Step value.' },
    {
      name: 'marks',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, marks are shown.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the component is disabled.',
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
  docsLink: 'https://mui.com/material-ui/api/slider/',
};
