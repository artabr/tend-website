import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface HeroSubheadlineProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export function HeroSubheadline({
  text,
  linkText,
  linkHref,
}: HeroSubheadlineProps) {
  return (
    <Typography
      className="HeroSubheadline-root"
      variant="subtitle1"
      sx={{ color: '#333333', fontSize: '28px', lineHeight: '24px' }}
    >
      {text}{' '}
      <Link
        className="HeroSubheadline-link"
        href={linkHref}
        sx={{
          color: 'primary.main',
          fontWeight: 500,
          textDecoration: 'underline',
          '&:hover': { color: 'primary.dark' },
        }}
      >
        {linkText}
      </Link>
    </Typography>
  );
}
