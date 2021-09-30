import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HhSalaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
	title: string;
	salary: number;
	starFilled: 1 | 2 | 3
}