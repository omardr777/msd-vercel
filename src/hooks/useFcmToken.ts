import { useEffect, useState } from 'react';
import { getMessaging, getToken } from '@firebase/messaging';
import firebase from '@/services/firebase';
import { toast } from 'sonner';

const useFcmToken = () => {
	const [token, setToken] = useState('');
	const [notificationPermissionStatus, setNotificationPermissionStatus] =
		useState('');

	useEffect(() => {
		const retrieveToken = async () => {
			try {
				if (
					typeof window !== 'undefined' &&
					'serviceWorker' in navigator
				) {
					const messaging = getMessaging(firebase);

					// Retrieve the notification permission status
					const permission = await Notification.requestPermission();
					setNotificationPermissionStatus(permission);

					// Check if permission is granted before retrieving the token
					if (permission === 'granted') {
						const currentToken = await getToken(messaging, {
							vapidKey:
								'BApTdt2-VkvIGS6LovYbbXaIA138NMFYgyUNiSB15iSpBp1kj4Dwn9E6WdzrZq-q-d5FJWGD-O_no9UylW-NRCc',
						});
						if (currentToken) {
							setToken(currentToken);
						} else {
							console.log(
								'No registration token available. Request permission to generate one.'
							);
							toast('Give us permision');
						}
					}
				}
			} catch (error) {
				console.log('An error occurred while retrieving token:', error);
			}
		};

		retrieveToken();
	}, []);

	return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
