declare module "*.svg" {
	const content: React.FC<React.SVGAttributes<SVGAttributes>>;
	export default content;
}

interface StaticImageData {
	src: string
	height: number
	width: number
	blurDataURL?: string
}

declare module '*.png' {
	const content: StaticImageData;

	export default content;
}
declare module '*.jpg' {
	const content: StaticImageData;

	export default content;
}

declare module '*.jpeg' {
	const content: StaticImageData;

	export default content;
}

declare module '*.gif' {
	const content: StaticImageData;

	export default content;
}

declare module '*.webp' {
	const content: StaticImageData;

	export default content;
}

declare module '*.ico' {
	const content: StaticImageData;

	export default content;
}

declare module '*.bmp' {
	const content: StaticImageData;

	export default content;
}
