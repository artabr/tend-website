import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { WhySectionHeading } from './WhySectionHeading';
import { WhyBlock } from './WhyBlock';
import { WhySectionDisclaimer } from './WhySectionDisclaimer';

interface WhyBlockData {
  title: string;
  description: string;
}

interface WhySectionProps {
  title: string;
  disclaimer: string;
  blocks: WhyBlockData[];
}

export function WhySection({ title, disclaimer, blocks }: WhySectionProps) {
  return (
    <Box
      className="WhySection-root"
      component="section"
      id="why"
      sx={{
        py: { xs: 6, md: 12.5 },
        px: { xs: 6, md: 10 },
        bgcolor: '#fbfcff',
      }}
    >
      <Container maxWidth="lg">
        <WhySectionHeading>{title}</WhySectionHeading>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {blocks.slice(0, 2).map((block) => (
            <Grid size={{ xs: 12, md: 6 }} key={block.title}>
              <WhyBlock title={block.title} description={block.description} />
            </Grid>
          ))}
        </Grid>

        {disclaimer && (
          <WhySectionDisclaimer>{disclaimer}</WhySectionDisclaimer>
        )}
      </Container>
    </Box>
  );
}
