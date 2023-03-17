import { useUserByUsername } from '@entities/user';
import { Divider, Link, Skeleton, Stack, Typography } from '@mui/material';
import { paths } from '@pages/paths';
import { MainTemplate } from '@shared/ui';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { Link as NavLink } from 'react-router-dom';

export const ResumePage = () => {
  const { username } = useParams<{ username: string }>();

  const { data, isError } = useUserByUsername(username!);

  if (isError) {
    return <NotFound />;
  }

  if (!data) {
    return <MainTemplate showSkeletonTitle>Resume {username}</MainTemplate>;
  }

  const name = data.name || data.login;

  return (
    <MainTemplate title={data.name || data.login}>
      <Stack direction="column" spacing={2} divider={<Divider />}>
        <DescriptionSection label="Github profile">
          On GitHub since {format(new Date(data.created_at), 'yyyy')}, {name} is
          a {data.type} with {data.public_repos} public repositories and{' '}
          {data.followers} followers.
        </DescriptionSection>
        <DescriptionSection label="URL">
          <Link href={data.url}>{data.url}</Link>
        </DescriptionSection>
        <DescriptionSection label="BIO">{data.bio}</DescriptionSection>
      </Stack>
    </MainTemplate>
  );
};

const DescriptionSection = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="body2">{children}</Typography>
    </Stack>
  );
};

const NotFound = () => (
  <MainTemplate title="User not found">
    <Typography>
      The user you requested was not found. Please check your spelling and try
      again.
    </Typography>
    <Link component={NavLink} to={paths.home()}>
      Back to home page
    </Link>
  </MainTemplate>
);
