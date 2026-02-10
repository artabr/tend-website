import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface WhyBlock {
  title: string;
  description: string;
}

interface WhySectionProps {
  title: string;
  disclaimer: string;
  blocks: WhyBlock[];
}

export function WhySection({ title, disclaimer, blocks }: WhySectionProps) {
  return (
    <Box component="section" id="why" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 600,
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {blocks.slice(0, 2).map((block) => (
            <Grid size={{ xs: 12, md: 6 }} key={block.title}>
              <Stack alignItems="flex-start" spacing={1}>
                <Typography
                  component="h3"
                  sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                  {block.title}
                </Typography>
                <Typography
                  sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
                >
                  {block.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {disclaimer && (
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'text.disabled',
              textAlign: 'center',
              mt: 4,
              maxWidth: '42rem',
              mx: 'auto',
            }}
          >
            {disclaimer}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
