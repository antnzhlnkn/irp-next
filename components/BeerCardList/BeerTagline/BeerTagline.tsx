import * as React from 'react'

import {Beer} from '../../../interfaces'

type Props = {
    data: Beer
}

const BeerTagline: React.FunctionComponent<Props> = ({data}) => (
    <div>
        <div className="beer-card__tagline" title={data.tagline}>{data.tagline}</div>
        <style jsx>{`
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
        }
      `}</style>
    </div>
);

export default BeerTagline