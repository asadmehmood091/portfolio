import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
    return (
        <Html lang="en">

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Asad Mehmood</title>
                <meta name="description"
                      content="Asad Mehmood - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."/>

                {/*These are need for PWA*/}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="Asad Mehmood"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="msapplication-tap-highlight" content="no"/>

                <meta name="theme-color" content="#000000"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <link rel="canonical" href="https://asadmehmood.info"/>
                <meta name="license" content="MIT License"/>
                <meta httpEquiv="content-language" content="en-us"/>

                <link rel="preconnect" href="https://asadmehmood.info"/>

                <link rel="dns-prefetch" href="https://asadmehmood.info"/>

                <meta name="author" content="Asad Mehmood"/>

                <link rel="alternate" hrefLang="en" href="https://asadmehmood.info"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="bingbot" content="index, follow"/>

                <link rel="apple-touch-icon" href="/img/logo_rounded.png"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg"/>
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="manifest" href="/manifest.json"/>


                <meta property="og:title" content="Asad Mehmood" key="title"/>
                <meta property="og:description"
                      content="Asad Mehmood - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/>


                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Asad Mehmood"/>
                <meta name="twitter:description"
                      content="Asad Mehmood - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/>
                <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/75434191?v=4"/>

                <meta name="twitter:domain" content="https://asadmehmood.info"/>


                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136'/>

                {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
                <meta name="keywords" content="
    Asad Mehmood, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Asad Mehmood Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Asad Mehmood Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Asad Mehmood Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Asad Mehmood DevOps, IT Portfolio, Web Developer Portfolio, Asad Mehmood Developer,
    Full Stack Engineer Asad Mehmood, Asad Mehmood Coding, Asad Mehmood IT,
    Asad Mehmood Full Stack Developer, Asad Mehmood Software Engineer, Asad Mehmood DevOps Engineer,
    Asad Mehmood Programming, Asad Mehmood Software Development, Asad Mehmood Coding Projects,
    Asad Mehmood Tech Portfolio, Asad Mehmood IT Portfolio, Asad Mehmood Software Engineer Portfolio,
    Asad Mehmood Web Developer Portfolio, Asad Mehmood DevOps Portfolio, Asad Mehmood Full Stack Engineer,
    Asad Mehmood Full Stack Developer Portfolio, Asad Mehmood Coding Portfolio, Asad Mehmood Programming Portfolio,
    Asad Mehmood Software Development Portfolio, Asad Mehmood Technology Projects,
    Asad Mehmood Computer Science, Asad Mehmood Cloud Computing, Asad Mehmood IT Professional,
    Asad Mehmood Technology Enthusiast, Asad Mehmood Computer Programmer, Asad Mehmood Code Portfolio,
    Asad Mehmood Technology Student, Asad Mehmood Software Architect,asad,asad portfolio,asad devops,asad devops engineer,
    asad devops portfolio,asad devops projects,asad devops specialist,asad devops professional,asad devops engineer portfolio,
    asad devops engineer projects,asad devops engineer specialist,asad devops engineer professional,asad devops engineer coding,
    asad devops engineer coding projects,asad devops engineer coding portfolio,asad devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"/>


                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Asad Mehmood",
          "url": "https://asadmehmood.info",
          "sameAs": [
            "https://github.com/asadmehmood091",
            "https://www.linkedin.com/in/asad-mehmoodbs",
          ]
        }`
                    }}
                />
                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://asadmehmood.info/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://asadmehmood.info/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "about",
              "item": "https://asadmehmood.info/about"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://asadmehmood.info/projects"
            }]
          }
        `
                }}/>

                {/*theme*/}
                <Script id="theme.util.jsx" strategy="beforeInteractive">
                    {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
                </Script>

                {/* Google Analytics */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"/>
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
