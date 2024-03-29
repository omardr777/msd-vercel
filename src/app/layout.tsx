import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/common/navbar'
import { ReactQueryProvider } from '@/components/providers/react-query';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MSD',
	description: 'Generated by create next app',
	appleWebApp: true,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactQueryProvider>
			<html lang='en'>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=no'
				/>
				<body className={rubik.className}>
					<div>
						<ScrollArea>{children}</ScrollArea>
					</div>
					<Navbar />
					<Toaster position='top-right' duration={5000} />
				</body>
			</html>
		</ReactQueryProvider>
	);
}
