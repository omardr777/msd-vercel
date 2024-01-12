import { createComponent } from '@/utils/create-component';

interface IFlex extends React.HtmlHTMLAttributes<HTMLDivElement> {
	dir?: 'row' | 'column';
}

export const Flex = createComponent<IFlex>((props) => {
	const { dir = 'row', ...rest } = props;
	return (
		<div
			className={`flex ${dir === 'row' ? ' ' : 'flex-col'}`}
			{...rest}
		></div>
	);
});
