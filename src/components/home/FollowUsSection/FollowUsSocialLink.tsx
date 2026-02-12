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
      color="primary"
    >
      {icon} {label}
    </Button>
  );
}
