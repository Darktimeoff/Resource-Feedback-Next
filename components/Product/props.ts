import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../@types';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProductModel
}