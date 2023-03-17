import {
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

interface Props {
  children: React.ReactNode;
  title?: React.ReactNode;
  showSkeletonTitle?: boolean;
}

export const MainTemplate = ({ children, title, showSkeletonTitle }: Props) => {
  return (
    <Container sx={{ paddingTop: 3 }}>
      <Paper>
        <CardContent>
          <Stack spacing={3} divider={<Divider />}>
            <Typography variant="h4" sx={{ textTransform: 'upperCase' }}>
              {showSkeletonTitle ? <Skeleton width={240} /> : title}
            </Typography>
            <div>{children}</div>
          </Stack>
        </CardContent>
      </Paper>
    </Container>
  );
};
