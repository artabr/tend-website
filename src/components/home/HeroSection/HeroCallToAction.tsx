import Button from '@mui/material/Button';

interface HeroCallToActionProps {
  children: string;
  href: string;
}

export function HeroCallToAction({ children, href }: HeroCallToActionProps) {
  return (
    <Button
      className="HeroCallToAction-root"
      href={href}
      variant="contained"
      size="large"
      sx={{
        bgcolor: '#a71677',
        color: 'white',
        px: 4,
        borderRadius: '10px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
        height: '54px',
        '&:hover': { bgcolor: '#8a1262' },
      }}
    >
      {children}
    </Button>
  );
}
