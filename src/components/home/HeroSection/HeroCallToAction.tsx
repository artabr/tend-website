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
      color="primary"
    >
      {children}
    </Button>
  );
}
