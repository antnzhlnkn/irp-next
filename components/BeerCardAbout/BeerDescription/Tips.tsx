import * as React from 'react'

import {Beer} from '../../../interfaces'

type Props = {
    data: Beer
}

const Tips: React.FunctionComponent<Props> = ({data}) => (

    <div>
        <div className="beer-description__tips">{data.brewers_tips}</div>
        <style jsx>{`          
            .beer-description__tips {
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                margin: 10px 10px 10px;
                color: #4F4F4F;
            }
        }
      `}</style>
    </div>
);

export default Tips