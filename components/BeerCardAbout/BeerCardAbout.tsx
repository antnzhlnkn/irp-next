import * as React from 'react'
import BeerImageAbout from "./BeerImageAbout";
import BeerAbv from "./BeerAbv";

import {Beer} from '../../interfaces'

type Props = {
    data: Beer
}

const BeerCardAbout: React.FunctionComponent<Props> = ({data}) => (
    <div className="beer-card">
        <BeerAbv data={data}/>
        <BeerImageAbout data={data}/>
        <style jsx>{`
            .beer-card {
                height: 350px;
                width: 225px;
                background: #FFFFFF;
                border-radius: 4px;
                margin: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;
            }
      `}</style>
    </div>
);

export default BeerCardAbout