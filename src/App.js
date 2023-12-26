import * as React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AppTheme>
                <AppRoutes />
            </AppTheme>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
