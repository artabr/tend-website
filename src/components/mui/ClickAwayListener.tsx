import type { Component } from '@builder.io/sdk';
import MuiClickAwayListener from '@mui/material/ClickAwayListener';
import type { ClickAwayListenerProps as MuiClickAwayListenerProps } from '@mui/material/ClickAwayListener';

function ClickAwayListener(props: MuiClickAwayListenerProps) {
  return (
    <MuiClickAwayListener {...props}>{props.children}</MuiClickAwayListener>
  );
}

export default ClickAwayListener;

export const config: Component = {
  name: 'ClickAwayListener',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'onClickAway',
      type: 'event',
      helperText: 'Callback fired when a "click away" event is detected.',
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/click-away-listener/',
};
