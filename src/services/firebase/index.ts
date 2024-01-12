import { initializeApp } from '@firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyABYGBmyM4jr2kjrV_1Y1vJVypSsh1XTEo',
	authDomain: 'msd-fcm.firebaseapp.com',
	projectId: 'msd-fcm',
	storageBucket: 'msd-fcm.appspot.com',
	messagingSenderId: '69727283597',
	appId: '1:69727283597:web:c2c0824f0eec527f8df5c4',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
