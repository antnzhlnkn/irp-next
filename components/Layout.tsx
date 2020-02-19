import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    title?: string
}

const Layout: React.FunctionComponent<Props> = ({
children,
title = 'IPR',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width height=device-height"/>
            <link href="https://fonts.googleapis.com/css?family=Exo&display=swap" rel="stylesheet"/>
        </Head>
        <header className="header">
            <nav>
                <div className="container__center">
                    <div className="header__title">
                        <Link href="/">
                            <a>Punk's beers</a>
                        </Link>
                    </div>
                    <div className="header__link-container">
                        <div className="header__link">
                            <Link href="/">
                                <a>all beers</a>
                            </Link>
                        </div>
                        <div className="header__link">
                            <Link href="/beers/random">
                                <a>get random</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        {children}
        <footer className="footer">
            <div className="container__center">
                <span className="header__title">© <a
                    href="https://github.com/antnzhlnkn">https://github.com/antnzhlnkn</a></span>
            </div>
        </footer>
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        a {
          text-decoration: none;
          color: white;
        }
        
        .container__center{
            max-width: 1600px;
            margin: auto;
            padding: 10px;
            flex-wrap: wrap;
            display: flex;
        }
        
        .header {
            background: #4F4F4F;
            min-height: 80px;
        }
        
        .header__title {
            font-family: Exo, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 64px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
            padding: 10px;
        }
        
        .header__link-container {
            display: flex;
            flex-wrap: wrap;
        }
        
        .header__link {
            font-family: Exo, sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 32px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 10px;
        }
        
        .header__link::before {
            padding: 10px;
            content: '';
            border-left: 3px solid #FFFFFF;
        }
        .footer {
            min-height: 100px;
            background: #4F4F4F;
        }
      `}</style>
    </div>
);

export default Layout
