// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, NextScript, Main, DocumentContext, DocumentInitialProps } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
		const initialProps = await Document.getInitialProps(ctx);

		return {...initialProps};
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
					<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}