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
    <Box
      component="section"
      id="why"
      sx={{
        py: { xs: 6, md: 12.5 },
        px: { xs: 6, md: 10 },
        bgcolor: '#fbfcff',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
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
                <Typography variant="h4" component="h3">
                  {block.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '18px',
                    lineHeight: '32px',
                    color: '#000000',
                  }}
                >
                  {block.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {disclaimer && (
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              mt: 4,
              maxWidth: '42rem',
              mx: 'auto',
              display: 'block',
              fontSize: '18px',
              color: '#000000',
            }}
          >
            {disclaimer}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
