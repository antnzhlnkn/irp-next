import * as React from 'react'

import { Beer } from '../interfaces'

type ListDetailProps = {
  item: Beer
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: beer,
}) => (
  <div>
    <h1>{beer.name +`|` + beer.tagline}</h1>
    <img src={beer.image_url}/>
  </div>
)

export default ListDetail
