export const userKeys = {
  all: ['users'] as const,
  byUsername: (username: string) => [...userKeys.all, username] as const,
};
