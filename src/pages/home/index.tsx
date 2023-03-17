import {
  Button,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { paths } from '@pages/paths';
import { useInput } from '@shared/hooks';
import { MainTemplate } from '@shared/ui';
import { FormEvent } from 'react';
import { Link as NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <MainTemplate title="My github resume">
      <Stack spacing={3}>
        <InputSection />
        <ExampleUsersSection />
      </Stack>
    </MainTemplate>
  );
};

const InputSection = () => {
  const { value, onChange } = useInput('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Stack spacing={2} direction="row" component="form" onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        placeholder="Enter your GitHub username and click on generate"
        variant="outlined"
      />
      <Button variant="outlined">Generate</Button>
    </Stack>
  );
};

interface ExampleUser {
  name: string;
  username: string;
}

const EXAMPLE_USERS: ExampleUser[] = [
  {
    name: 'Max Howell',
    username: 'mxcl',
  },
  {
    name: 'Chris Wanstrath',
    username: 'defunkt',
  },
  {
    name: 'Victor Korchevoi',
    username: 'VictorKrchv',
  },
];

const ExampleUsersSection = () => {
  return (
    <div>
      <Typography variant="subtitle1">See some popular users</Typography>
      {EXAMPLE_USERS.map(({ name, username }, index) => {
        return (
          <Link component={NavLink} to={paths.resume(username)}>
            {index !== EXAMPLE_USERS.length - 1 ? `${name}, ` : name}
          </Link>
        );
      })}
    </div>
  );
};
