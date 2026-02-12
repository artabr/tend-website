import Stack from '@mui/material/Stack';
import { WhyBlockHeading } from './WhyBlockHeading';
import { WhyBlockDescription } from './WhyBlockDescription';

interface WhyBlockProps {
  title: string;
  description: string;
}

export function WhyBlock({ title, description }: WhyBlockProps) {
  return (
    <Stack className="WhyBlock-root" alignItems="flex-start" spacing={1}>
      <WhyBlockHeading>{title}</WhyBlockHeading>
      <WhyBlockDescription>{description}</WhyBlockDescription>
    </Stack>
  );
}
