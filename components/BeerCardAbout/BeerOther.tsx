import * as React from 'react'

import {Beer} from '../../interfaces'

type Props = {
    data: Beer
}

const BeerOther: React.FunctionComponent<Props> = ({data}) => (
    <div className="beer-other-container">
        <div className="beer-other">
            {data.food_pairing.map((item) => <li>{item}</li>)}
        </div>
        <style jsx>{`
            .beer-other {
                margin: 10px;
                padding: 10px;
                min-height: 200px;
                background: #FFFFFF;
                border-radius: 3px;
            }
            .beer-other-container {
                flex-basis: 100%;
            }
        }
      `}</style>
    </div>
);

export default BeerOther