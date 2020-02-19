import * as React from 'react'

import {Beer} from '../../../interfaces'

type Props = {
    data: Beer
}

const BeerTitle: React.FunctionComponent<Props> = ({data}) => (
    <div>
        <div className="beer-card_title" title={data.name}>{data.name}</div>
        <style jsx>{`
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
        }
      `}</style>
    </div>
);

export default BeerTitle