import { ReactElement } from 'react';
import { AnimatedIcon } from './animated-icon';

interface INavButtons {
	path: string;
	icon: (isSelected: boolean) => ReactElement; // Remove the (stroke: string) argument if not needed
}

export const navButtons: INavButtons[] = [
	{
		path: '/',
		// eslint-disable-next-line
		icon: () => {
			return <AnimatedIcon> </AnimatedIcon>;
		},
	},
	// Add more objects as needed
];
