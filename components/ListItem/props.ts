import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>,HTMLLIElement>{
	title: string;
	description: string;
}