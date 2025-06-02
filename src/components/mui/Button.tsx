import type { Component } from '@builder.io/sdk';
import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import * as MuiIcons from '@mui/icons-material';

function getIconComponent(iconName?: string) {
  if (!iconName) return null;
  const Icon = (MuiIcons as any)[iconName];
  return Icon ? <Icon /> : null;
}

function Button(
  props: MuiButtonProps & { startIcon?: string; endIcon?: string }
) {
  return (
    <MuiButton
      {...props}
      startIcon={getIconComponent(props.startIcon)}
      endIcon={getIconComponent(props.endIcon)}
    >
      {props.children}
    </MuiButton>
  );
}

export default Button;

export const config: Component = {
  name: 'Button',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: [
        'inherit',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
      defaultValue: 'primary',
      helperText: 'The color of the button.',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
      helperText: 'The variant to use.',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      helperText: 'The size of the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the button will be disabled.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
      helperText:
        'If true, the button will take up the full width of its container.',
    },
    {
      name: 'href',
      type: 'text',
      helperText: 'The URL to link to when the button is clicked.',
      advanced: true,
    },
    {
      name: 'startIcon',
      type: 'string',
      helperText:
        'Name of the MUI icon to display before the children (e.g., Add, Delete).',
      advanced: true,
    },
    {
      name: 'endIcon',
      type: 'string',
      helperText:
        'Name of the MUI icon to display after the children (e.g., ArrowForward, Send).',
      advanced: true,
    },
    {
      name: 'disableElevation',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, no elevation is used.',
      advanced: true,
    },
    {
      name: 'disableFocusRipple',
      type: 'boolean',
      defaultValue: false,
      helperText: 'If true, the keyboard focus ripple is disabled.',
      advanced: true,
    },
    {
      name: 'tabIndex',
      type: 'number',
      helperText: 'The tabIndex of the button.',
      advanced: true,
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'Button',
        },
      },
    },
  ],
  docsLink: 'https://mui.com/material-ui/react-button/',
};
