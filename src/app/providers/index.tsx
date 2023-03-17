import { WithQueryClient } from '@app/providers/with-query-client';

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <WithQueryClient>{children}</WithQueryClient>;
};
