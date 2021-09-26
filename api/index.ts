import axios from 'axios';
import { IMenuItem } from '../@types/menu.type';

export class API {
	static async findPage(category: number): Promise<IMenuItem[]> {
		const { data } = await axios.post<IMenuItem[]>(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
			firstCategory: category,
		});

		return data;
	}
	static async getPageByAlias(alias: string): Promise<any> {
		const { data } = await axios.get(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`);

		return data;
	}
	static async findProduct(category: string): Promise<any> {
		const { data } = await axios.post(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
			category,
			limit: 10
		});

		return data;
	}
}