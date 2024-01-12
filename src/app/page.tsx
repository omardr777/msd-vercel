// TODO: need changing later, maybe?
'use client';

import { Meds } from '@/components/common/medicine-card/med-list';
import { Card, CardHeader } from '@/components/ui/card';
import useFcmToken from '@/hooks/useFcmToken';
import firebaseApp from '@/services/firebase';
import { getMessaging, onMessage } from '@firebase/messaging';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Home() {
	const { fcmToken, notificationPermissionStatus } = useFcmToken();
	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			console.log('wowow');
			const messaging = getMessaging(firebaseApp);
			const unsub = onMessage(messaging, ({ notification }) => {
				console.log(notification);
				toast(notification?.title, { description: notification?.body });
			});
			return () => {
				unsub(); // Unsubscribe from the onMessage event
			};
		}
	}, []);
	if (notificationPermissionStatus) {
		toast('Give us permision');
	}
	if (fcmToken) {
		console.log(fcmToken);
		toast(fcmToken);
	}
	return (
		<main className='flex flex-col p-5'>
			<Card className='mb-4 bg-gradient-to-r from-primary via-primary-m to-primary-e text-white'>
				<CardHeader>Welcom Omar!</CardHeader>
			</Card>
			<div className='flex flex-col space-y-2'>
				<Meds />
			</div>
		</main>
	);
}
