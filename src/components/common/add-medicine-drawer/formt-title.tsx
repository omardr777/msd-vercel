import { createComponent } from '@/utils/create-component';

interface IFormTitle {
	title: string;
}

export const FormTitle = createComponent<IFormTitle>(({ title }) => {
	return (
		<>
			<p className='font-medium'>{`${title}:`}</p>
		</>
	);
});
