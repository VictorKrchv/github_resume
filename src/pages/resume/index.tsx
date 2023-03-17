import { githubApi } from '@shared/api';
import { MainTemplate } from '@shared/ui';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ResumePage = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    githubApi.getUser(username!).then(console.log);
  }, []);

  return <MainTemplate title={''}>Resume {username}</MainTemplate>;
};
