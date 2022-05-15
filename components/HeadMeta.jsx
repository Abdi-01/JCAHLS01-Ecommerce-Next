
import React from 'react';
import Head from 'next/head';

const HeadMeta = (props) => {

    return <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.img} key="ogimage" />

        {/* Library icon */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
    </Head>
}

export default HeadMeta;