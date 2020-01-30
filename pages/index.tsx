import { NextPage } from 'next'

import Layout from '../components/Layout'
import List from '../components/List'
import { Beer } from '../interfaces'
import { sampleFetchWrapper } from '../utils/sample-api'
import * as React from "react";

type Props = {
    items: Beer[]
    pathname: string
}

const IndexPage: NextPage<Props> = ({ items }) => (
    <Layout title="Beer list">
        <div className="content">
            <h1>BEERS:</h1>
            <List items={items} />
        </div>
        <style jsx>{`
            .content {
                background: #E5E5E5;
                font-family: Exo, sans-serif;
            }
        }
      `}</style>
    </Layout>
);

IndexPage.getInitialProps = async ({ pathname }) => {

    const items: Beer[] = await sampleFetchWrapper(
        'https://api.punkapi.com/v2/beers'
    );

    return { items, pathname }
};

export default IndexPage
