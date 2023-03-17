import { queryClient } from '@shared/lib/query-client';
import { QueryClientProvider } from 'react-query';

export const WithQueryClient: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
