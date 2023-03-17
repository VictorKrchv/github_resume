import {
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
}

export const MainTemplate = ({ children, title }: Props) => {
  return (
    <Container sx={{ paddingTop: 3 }}>
      <Paper>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ textTransform: 'upperCase' }}>
              {title}
            </Typography>
            <Divider />
            <div>{children}</div>
          </Stack>
        </CardContent>
      </Paper>
    </Container>
  );
};
