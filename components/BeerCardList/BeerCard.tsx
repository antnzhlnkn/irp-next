import * as React from 'react'
import BeerTitle from "./BeerTitle/BeerTitle";
import BeerTagline from "./BeerTagline/BeerTagline"
import BeerImage from "./BeerImage/BeerImage";

import {Beer} from '../../interfaces'

type Props = {
    data: Beer
}

const BeerCard: React.FunctionComponent<Props> = ({data}) => (
    <div className="beer-card">
        <BeerTitle data={data}/>
        <BeerImage data={data}/>
        <BeerTagline data={data}/>
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
        }
      `}</style>
    </div>
);

export default BeerCard