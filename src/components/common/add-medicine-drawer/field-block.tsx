import { createComponent } from '@/utils/create-component';
import { FormTitle } from './formt-title';

interface t {
	children: React.ReactNode;
	title: string;
	button?: React.ReactNode;
}

export const FieldBlock = createComponent<t>(({ children, title, button }) => {
	return (
		<>
			<div className='flex flex-col space-y-2 px-4'>
				<div className='flex justify-between align-top'>
					<FormTitle title={title} />
					{button}
				</div>
				{children}
			</div>
		</>
	);
});
