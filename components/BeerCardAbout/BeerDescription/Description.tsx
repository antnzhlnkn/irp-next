import * as React from 'react'

import {Beer} from '../../../interfaces'

type Props = {
    data: Beer
}

const Description: React.FunctionComponent<Props> = ({data}) => (

    <div>
        <div className="beer-description__title">{data.description}</div>
        <style jsx>{`          
            .beer-description__title {
                margin: 10px;
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                color: #000000;
            }
        }
      `}</style>
    </div>
);

export default Description