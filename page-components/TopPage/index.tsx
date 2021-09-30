import { TopPageComponentProps } from './props.component';

export const TopPageComponent = ({ page, products}: TopPageComponentProps): JSX.Element => {
	return (
		<>
			{products?.length}
		</>
	);
}