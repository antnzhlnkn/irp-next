import * as React from 'react'

import {Beer} from '../../interfaces'

type Props = {
    data: Beer
}

const BeerAbv: React.FunctionComponent<Props> = ({data}) => (
    <div className="beer-card__abv-container">
        <div className="beer-card__abv">{data.abv}%</div>
        <style jsx>{`
            .beer-card__abv-container {
                display: flex;
                justify-content: flex-end;
                position: absolute;
                top: 8px;
                right: 8px;
            }
            .beer-card__abv {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Exo, sans-serif;
                color: #FFFFFF;
                font-size: 16px;
                line-height: 21px;
            }
        }
      `}</style>
    </div>
);

export default BeerAbv