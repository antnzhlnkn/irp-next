import * as React from 'react'

import {Beer} from '../../interfaces'

type Props = {
    data: Beer
}

const BeerTitle: React.FunctionComponent<Props> = ({data}) => (
    <div className="header__link-container">
        <div className="content__title">{data.name}</div>
        <div className="content__title content__title_border">{data.tagline}</div>
        <style jsx>{`
           .content__title {
                display: flex;
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
                line-height: 48px;
                text-transform: uppercase;
                color: #333333;
                margin-top: 32px;
                margin-bottom: 36px;
            }
            .content__title_border {
                padding-left: 10px;
                margin-left: 0;
            }
            
           .content__title_border::before {
                padding: 10px;
                content: '';
                border-left: 3px solid #000000;
            }
      `}</style>
    </div>
);

export default BeerTitle