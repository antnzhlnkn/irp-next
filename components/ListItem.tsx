import * as React from 'react'
import Link from 'next/link'

import {Beer} from '../interfaces'

type Props = {
    data: Beer
}

const ListItem: React.FunctionComponent<Props> = ({data}) => (
    <Link href="/beers/[id]" as={`/beers/${data.id}`}>
        <div className="beer-card">
            <div className="beer-card_title">{data.name}</div>
            <div className="beer-card__image-wrapper">
                <img className="beer-card__image" src={data.image_url} alt={data.name}/>
            </div>
            <div className="beer-card__tagline" title={data.tagline}>{data.tagline}</div>
            <style jsx>{`
                .beer-card {
                    height: 350px;
                    width: 225px;
                    background: #FFFFFF;
                    border-radius: 4px;
                    margin: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .beer-card_title {
                    font-family: Exo, sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    color: #000000;
                    margin: 10px;
                }
                .beer-card__tagline {
                    font-family: Exo, sans-serif;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    color: #000000;
                    margin: 10px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                .beer-card__image {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    max-height: 200px;
                }
        }
      `}</style>
        </div>
    </Link>
);

export default ListItem
