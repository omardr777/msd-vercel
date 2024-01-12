'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { createComponent } from '@/utils/create-component';

export const queryClient = new QueryClient();

interface IReactQueryProvider {
	children: React.ReactNode;
}

export const ReactQueryProvider = createComponent<IReactQueryProvider>(
	({ children }) => {
		return (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);
	}
);
