import Head from "next/head";
import React from "react";

export default function TitleAboutMe() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
            <meta
                name="description"
                content="Explore a collection of AboutMe by Asad Mehmood, showcasing a range of technology and development endeavors."
            />

            {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
            <meta
                name="keywords"
                content="Muhammad Haroon Arshad,AsadMehmood Projects,AboutMe,asad, Full Stack Engineer, Developer, Software, Web Development, Coding, Portfolio"
            />
            <title>AsadMehmood Projects</title>
        </Head>
    );
}