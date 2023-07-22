import React from 'react'
import '../style/skilblock.css'

const SkilBlock = (props) => {
    const{imagename,title}=props
  return (
    <div className="card custom-card text-center d-flex justify-content-center align-items-center" style={{ width:"260px", height:'280px' }}>
              <img
                className="img-fluid"
                src={imagename}
                alt={title}
              />
              <h4 className="card-title mt-2 text-white">{title}</h4>
              {/* <button type="button" className="btn custom-btn btn-success">
                Learn More
              </button> */}
            </div>
  )
}

export default SkilBlock