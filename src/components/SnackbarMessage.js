import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function SnackbarMessage({ open, onClose, message, severity = 'info' }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      TransitionComponent={TransitionUp}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarMessage;
