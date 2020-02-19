import * as React from 'react'

import {Beer} from '../../../interfaces'
import ImageNotAvailable from "../../../assets/image/imagenotavailable.png";

type Props = {
    data: Beer
}

const BeerImage: React.FunctionComponent<Props> = ({data}) => (
        <div>
            <img className="beer-card__image" src={data.image_url ? data.image_url : ImageNotAvailable} alt={data.name}/>
            <style jsx>{`
                .beer-card__image {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    max-height: 200px;
                }
        }
      `}</style>
        </div>
);

export default BeerImage