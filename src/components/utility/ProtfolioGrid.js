import React from 'react'
import '../style/protfolio-grid.css'
const ProtfolioGrid = (props) => {
    const {protfolio_img,title,description}=props;
  return (
    <div>
        <div className="single-service">
                <img src={protfolio_img} alt='title'/>
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>{title}</h3>
                    <hr/>
                    <p>{description}</p>
                </div>
        </div>
    </div>
  )
}

export default ProtfolioGrid