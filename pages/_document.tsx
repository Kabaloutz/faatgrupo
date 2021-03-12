import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                    <link href="https://code.jquery.com/jquery-1.11.0.min.js" />
                    <link href="https://code.jquery.com/jquery-migrate-1.2.1.min.js" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css" rel="stylesheet" />
                    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;