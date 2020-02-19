import * as React from 'react'
import BeerCardAbout from "./BeerCardAbout/BeerCardAbout";
import BeerOther from "./BeerCardAbout/BeerOther";
import BeerDescription from "./BeerCardAbout/BeerDescription";
import BeerTitle from "./BeerCardAbout/BeerTitle";

import {Beer} from '../interfaces'

type ListDetailProps = {
    item: Beer
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
    item: beer,
}) => (
    <div className="content">
        <div className="container__center">
            <BeerTitle data={beer}/>
            <div className="beer-about">
                <BeerCardAbout data={beer}/>
                <BeerDescription data={beer}/>
                <BeerOther data={beer}/>
            </div>
        </div>
        <style jsx>{`
            .content {
                background: #E5E5E5;
                font-family: Exo, sans-serif;
            }     
            .beer-about {
                display: flex;
                flex-wrap: wrap;
            }        
            @media screen and (max-width: 812px) {
                .content__title, .beer-about, .beer-description, .beer-other {
                    width: 100%;
                    margin: 10px 0 0;
                }
}
      `}</style>
    </div>
);

export default ListDetail
