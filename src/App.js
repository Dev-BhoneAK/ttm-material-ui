import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Container from '@mui/material/Container';

import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

export default function App() {
    const queryClient = new QueryClient();
    return (
        <AppTheme>
            <Container maxWidth="md" sx={{ px: { xs: 0 } }}>
                <QueryClientProvider client={queryClient}>
                    <AppRoutes />
                </QueryClientProvider>
            </Container>
        </AppTheme>
    );
}
