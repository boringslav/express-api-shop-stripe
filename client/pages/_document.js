import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>

                <Head>
                    <meta charSet='UTF-8' />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;