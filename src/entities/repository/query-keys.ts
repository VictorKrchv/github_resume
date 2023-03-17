export const repositoriesKeys = {
  all: ['repositories'] as const,
  byUsername: (username: string) =>
    [...repositoriesKeys.all, username] as const,
};
