import * as React from 'react'

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
                <div className="beer-card">
                    <div className="beer-card__abv-container">
                        <div className="beer-card__abv">{beer.abv}%</div>
                    </div>
                    <div className="beer-card__image-wrapper">
                        <img className="beer-card__image" src={beer.image_url} alt="beer name"/>
                    </div>
                </div>
                <div className="beer-description">
                    <div className="beer-description__title">{beer.description}</div>
                    <hr/>
                        <div className="beer-description__tips">{beer.brewers_tips}</div>
                </div>
                <div className="beer-other"></div>
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
            
            .beer-card__image {
                display: block;
                margin-left: auto;
                margin-right: auto;
                max-height: 300px;
            }
            
            .beer-card__abv {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Exo, sans-serif;
                color: #FFFFFF;
                font-size: 16px;
                line-height: 21px;
            }
            
            .beer-about {
                display: flex;
                flex-wrap: wrap;
            }
            
            .beer-description {
                background: #FFFFFF;
                border-radius: 3px;
                margin: 10px;
                flex: 1;
                min-width: 300px;
            }
            
            .beer-description__title {
                margin: 10px;
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                color: #000000;
            }
            
            .beer-description hr {
                border: 3px solid rgba(79, 79, 79, 0.69);
                margin-top: 5%;
                margin-left: 10px;
                max-width: 170px;
            }
            
            .beer-description__tips {
                font-family: Exo, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                margin: 10px 10px 10px;
                color: #4F4F4F;
            }
            
            .beer-other {
                margin: 10px;
                min-height: 200px;
                background: #FFFFFF;
                border-radius: 3px;
                flex-basis: 100%;
            }
            
            .beer-card__abv-container {
                display: flex;
                justify-content: flex-end;
                position: absolute;
                top: 8px;
                right: 8px;
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
