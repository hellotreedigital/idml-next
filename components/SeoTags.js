import Head from 'next/head';

export default function SeoTags(props) {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title key={props.title}>{props.title}</title>
            <meta name="title" content={props.title} key={props.title} />
            <meta name="description" content={props.description} />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} key={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} key={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.image} />



            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-BTVSZ6HJHD"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BTVSZ6HJHD');`,
                }}
            />

            <meta name="google-site-verification" content="fk70t976Le28xv3Fe9p6qFejKO_mv7LcVTvhuSO0LFU" />

        </Head>
    )
}