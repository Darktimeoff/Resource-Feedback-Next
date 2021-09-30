import { IProductModel, ITopPageModel, TopLevelCategory } from '../../@types';


export interface TopPageComponentProps {
	firstCategory: TopLevelCategory
	page: ITopPageModel
	products: IProductModel[]
}
