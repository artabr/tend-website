import type { Component } from '@builder.io/sdk';
import MuiModal from '@mui/material/Modal';
import type { ModalProps as MuiModalProps } from '@mui/material/Modal';

function Modal(props: MuiModalProps) {
  return <MuiModal {...props}>{props.children}</MuiModal>;
}

export default Modal;

export const config: Component = {
  name: 'Modal',
  canHaveChildren: true,
  type: 'react',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      helperText: 'If true, the modal is open.',
    },
    {
      name: 'onClose',
      type: 'event',
      helperText: 'Callback fired when the modal is closed.',
    },
    {
      name: 'sx',
      type: 'object',
      helperText: 'The system prop for custom styles.',
      advanced: true,
    },
  ],
  docsLink: 'https://mui.com/material-ui/api/modal/',
};
