import Button from '@mui/material/Button';

interface FollowUsSocialLinkProps {
  label: string;
  url: string;
  icon: string | null;
}

export function FollowUsSocialLink({
  label,
  url,
  icon,
}: FollowUsSocialLinkProps) {
  return (
    <Button
      className="FollowUsSocialLink-root"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
      variant="outlined"
      sx={{
        borderRadius: '5px',
        border: 'none',
        bgcolor: '#ffffff',
        color: '#000000',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
        height: '55px',
        minWidth: '127px',
        '&:hover': { bgcolor: '#f5f5f5' },
      }}
    >
      {icon} {label}
    </Button>
  );
}
