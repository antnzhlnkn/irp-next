import {NextPage} from 'next'

import Layout from '../components/Layout'
import List from '../components/List'
import {Beer} from '../interfaces'
import {sampleFetchWrapper} from '../utils/sample-api'
import * as React from "react";

type Props = {
    items: Beer[]
    pathname: string
}

const IndexPage: NextPage<Props> = ({items}) => (
    <Layout title="Beer list">
        <div className="content">
            <div className="container__center">
                <h1 className="content__title">
                    all beers:
                </h1>
                <List items={items}/>
            </div>
        </div>
        <style jsx>{`
            .content {
                background: #E5E5E5;
                font-family: Exo, sans-serif;
            }
            .container__center{
                max-width: 1600px;
                margin: auto;
                padding: 10px;
                flex-wrap: wrap;
                display: flex;
            }
            .content__title {
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 48px;
                text-transform: uppercase;
                color: #333333;
                margin-left: 10px;
                margin-top: 32px;
                margin-bottom: 36px;
            }
        }
      `}</style>
    </Layout>
);

IndexPage.getInitialProps = async ({pathname}) => {

    const items: Beer[] = await sampleFetchWrapper(
        'https://api.punkapi.com/v2/beers'
    );

    return {items, pathname}
};

export default IndexPage
