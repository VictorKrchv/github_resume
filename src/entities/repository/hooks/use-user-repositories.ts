import { repositoriesKeys } from '@entities/repository/query-keys';
import { githubApi } from '@shared/api';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

// TODO: отрефакторить
export const useUserRepositories = (username: string) => {
  const query = useQuery(repositoriesKeys.byUsername(username), () =>
    githubApi.getRepositories(username),
  );

  const languagesStatistic = useMemo<[string, number][]>(() => {
    if (query.data && query.data.length > 0) {
      return Object.entries(
        query.data.reduce<any>((acc, rep) => {
          if (acc[rep.language]) {
            acc[rep.language] += 1;
          } else {
            acc[rep.language] = 1;
          }
          return acc;
        }, {}),
      ).map(([key, value]: any) => [key, value / query.data.length]);
    }

    return [];
  }, [query.data]);

  return { query, languagesStatistic };
};
