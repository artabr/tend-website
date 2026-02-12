import Box from '@mui/material/Box';

export function WaitlistForm() {
  return (
    <Box className="WaitlistForm-root" sx={{ width: '100%', maxWidth: '400px' }}>
      <Box id="brevo-form-container" className="brevo-form" />
    </Box>
  );
}
