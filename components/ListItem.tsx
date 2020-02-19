import * as React from 'react'
import Link from 'next/link'
import BeerCard from "./BeerCardList/BeerCard";

import {Beer} from '../interfaces'

type Props = {
    data: Beer
}

const ListItem: React.FunctionComponent<Props> = ({data}) => (
    <Link href="beers/[id]" as={`/beers/${data.id}`}>
        <div>
            <BeerCard data={data}/>
        </div>
    </Link>
);

export default ListItem
