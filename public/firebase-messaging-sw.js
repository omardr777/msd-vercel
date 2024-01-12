importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
const firebaseConfig = {
	apiKey: 'AIzaSyABYGBmyM4jr2kjrV_1Y1vJVypSsh1XTEo',
	authDomain: 'msd-fcm.firebaseapp.com',
	projectId: 'msd-fcm',
	storageBucket: 'msd-fcm.appspot.com',
	messagingSenderId: '69727283597',
	appId: '1:69727283597:web:c2c0824f0eec527f8df5c4',
};
firebase.initializeApp(firebaseConfig);
const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
        self.registration.showNotification(title, { body, icon: image || '' , sound: 'notification.mp3'});
    });
}