import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface ButtonItem {
  label: string;
  url: string;
}

interface FollowUsSectionProps {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

const TelegramIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const getIcon = (label: string) => {
  switch (label) {
    case 'Twitter':
      return '𝕏';
    case 'Telegram':
      return '✈️';
    case 'Bluesky':
      return '🦋';
    default:
      return null;
  }
};

export function FollowUsSection({
  title,
  description,
  buttons,
}: FollowUsSectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: 'slate.850',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            <Stack
              sx={{
                alignItems: { xs: 'center', md: 'flex-start' },
                flex: 1,
              }}
              spacing={2}
            >
              <Typography variant="h2" component="h2" sx={{ color: 'white' }}>
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'grey.400', maxWidth: 'sm' }}
              >
                {description}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                spacing={1.5}
                sx={{ mt: 1 }}
              >
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: 'grey.600',
                      color: 'white',
                      '&:hover': { bgcolor: 'grey.700' },
                    }}
                  >
                    {getIcon(button.label)} {button.label}
                  </Button>
                ))}
              </Stack>
            </Stack>

            <Box sx={{ color: '#42a5f5', opacity: 0.8 }}>
              <TelegramIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
