import { ProductProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Button, Card, Rating, Tag } from '..';
import { priceRu, declOfNum } from '../../helpers';
import { IProductCharacteristic} from '../../@types';
import Image from 'next/image';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const domain = process.env.NEXT_PUBLIC_DOMAIN;
	return (
		<Card {...props} color="white" className={cn(styles.product, className)}>
			<div className={styles.logo}>
				<Image 
					quality={70} 
					layout="fixed"
					priority={false} 
					unoptimized={false} 
					loading="lazy" 
					width="70" 
					height="70"
					src={`https://${domain}${product.image}`} 
					alt={product.title} 
				/>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && <Tag color="green" size="s" className={styles.discount}>{priceRu(product.price - product.oldPrice)}</Tag>}
			 </div>
			<div className={styles.credit}>
				{priceRu(product.credit)}/<span className={styles.month}>мес</span>
			</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={styles.tags}>
				{product.categories.map(t => <Tag color="ghost" className={styles.category} size="s" key={t}>{t}</Tag>)}
			</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>кредит</div>
			<div className={styles.ratingTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
			<div className={cn(styles.hr, styles.hr2)}><hr className={styles.hrStyle}/></div>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>
				{product.characteristics.map(characteristics)}
			</div>
			<div className={styles.advBlock}>
				{
					product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущество</div>
						<div>{product.advantages}</div>
					</div>
				}
				{
					product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостаток</div>
						<div>{product.disadvantages}</div>
					</div>
				}
			</div>
			<div className={styles.hr}><hr className={styles.hrStyle}/></div>
			<div className={styles.actions}>
				<Button className={styles.actionButton} appearance="primary">Узнать подробнее</Button>
				<Button appearance="ghost" arrow={'right'}>Читать отзывы </Button>
			</div>
		</Card>
	);
};

function characteristics(c: IProductCharacteristic): JSX.Element {
	return (
		<div className={styles.characteristics} key={c.name}>
			<span className={styles.characteristicsName}>{c.name}</span>
			<span className={styles.characteristicsDoted}></span>
			<span className={styles.characteristicsValue}>{c.value}</span>
		</div>
	)
}