import * as React from 'react'
import Description from "./Description";
import Tips from "./Tips";

import {Beer} from '../../../interfaces'

type Props = {
    data: Beer
}

const BeerDescription: React.FunctionComponent<Props> = ({data}) => (

    <div className="beer-description">
        <Description data={data}/>
        <hr/>
        <Tips data={data}/>
        <style jsx>{`          
            .beer-description {
                background: #FFFFFF;
                border-radius: 3px;
                margin: 10px;
                flex: 1;
                min-width: 300px;
            } 
            .beer-description hr {
                border: 3px solid rgba(79, 79, 79, 0.69);
                margin-top: 5%;
                margin-left: 10px;
                max-width: 170px;
            }
        }
      `}</style>
    </div>
);

export default BeerDescription