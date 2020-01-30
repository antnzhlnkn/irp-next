import * as React from 'react'
import { NextPageContext } from 'next'

import { Beer } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  item?: Beer
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query
      const data = await sampleFetchWrapper(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      const item = Array.isArray(data) ? data[0] : data;
      console.log(item)
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { item, errors } = this.props
    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${
          item ? item.name : 'Beer Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    )
  }
}

export default InitialPropsDetail
