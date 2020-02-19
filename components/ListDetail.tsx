import * as React from 'react'
import BeerCardAbout from "./BeerCardAbout/BeerCardAbout";
import BeerOther from "./BeerCardAbout/BeerOther";
import BeerDescription from "./BeerCardAbout/BeerDescription";

import {Beer} from '../interfaces'

type ListDetailProps = {
    item: Beer
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
    item: beer,
}) => (
    <div className="content">
        <div className="container__center">
            <div className="header__link-container">
                <div className="content__title">{beer.name}</div>
                <div className="content__title content__title_border">{beer.tagline}</div>
            </div>
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
            .container__center{
                max-width: 1600px;
                margin: auto;
                padding: 10px;
                flex-wrap: wrap;
                display: flex;
            }
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
