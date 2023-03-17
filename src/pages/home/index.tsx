import {
  Button,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { EXAMPLE_USERS } from '@pages/home/lib';
import { paths } from '@pages/paths';
import { useDisclosure, useInput } from '@shared/hooks';
import { MainTemplate } from '@shared/ui';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const {
    open: openSnackbar,
    close: closeSnackbar,
    isOpen: snackbarIsOpen,
  } = useDisclosure();
  const { value, onChange } = useInput('');

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!value) {
      openSnackbar();
      return;
    }

    navigate(paths.resume(value));
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
      <Button type="submit" variant="outlined">
        Generate
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={snackbarIsOpen}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message="Name must not be empty"
      />
    </Stack>
  );
};

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
