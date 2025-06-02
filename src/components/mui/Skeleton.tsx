import type { Component } from '@builder.io/sdk';
import MuiSkeleton from '@mui/material/Skeleton';
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

function Skeleton(props: MuiSkeletonProps) {
  return <MuiSkeleton {...props} />;
}

export default Skeleton;

export const config: Component = {
  name: 'Skeleton',
  canHaveChildren: false,
  type: 'react',
  inputs: [
    {
      name: 'animation',
      type: 'text',
      enum: [
        { label: 'pulse', value: 'pulse' },
        { label: 'wave', value: 'wave' },
        { label: 'false', value: false },
      ],
      defaultValue: 'pulse',
      helperText: 'The animation type.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['text', 'rectangular', 'rounded', 'circular'],
      defaultValue: 'text',
      helperText: 'The variant to use.',
    },
    { name: 'width', type: 'number', helperText: 'Width of the skeleton.' },
    { name: 'height', type: 'number', helperText: 'Height of the skeleton.' },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/skeleton/',
};
