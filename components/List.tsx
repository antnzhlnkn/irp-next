import * as React from 'react'
import ListItem from './ListItem'
import { Beer } from '../interfaces'

type Props = {
  items: Beer[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <div className="content__list">
    {items.map(item => (
      <div key={item.id}>
        <ListItem data={item} />
      </div>
    ))}
    <style jsx>{`
          .content__list {
            display: flex;
            flex-wrap: wrap;
           }
        }
      `}</style>
  </div>
)

export default List
