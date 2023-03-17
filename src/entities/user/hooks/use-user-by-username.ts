import { userKeys } from '@entities/user/query-keys';
import { githubApi } from '@shared/api';
import { useQuery } from 'react-query';

export const useUserByUsername = (username: string) => {
  const query = useQuery(userKeys.byUsername(username), () =>
    githubApi.getUser(username),
  );

  return query;
};
