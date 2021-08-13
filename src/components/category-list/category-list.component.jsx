import React from "react";
import { withRouter } from "react-router-dom";
import planetImage from "../../assets/planets.png";
import shipsImage from "../../assets/starships.jpg";
import "./category-list.styles.scss";

const CategoryList = ( {history, match} ) => (
    <div className="category-menu">
        <div className="menu-item" onClick={() => history.push(`${match.url}starships`)}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${shipsImage})`
                }}
            >
                <div className="content">
                    <h1 className="title">Starships</h1>                
                </div>

            </div>        
        </div>
        
        <div className="menu-item" className="menu-item" onClick={() => history.push(`${match.url}planets`)}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${planetImage})`
                }}
            >
                <div className="content">
                    <h1 className="title">Planets</h1>                
                </div>

            </div>        
        </div>        

    </div>
);

export default withRouter(CategoryList);