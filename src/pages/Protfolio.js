import React from "react";
import demo from "../assets/img-13.jpg";
import ProtfolioGrid from "../components/utility/ProtfolioGrid";
import SectionHead from "../components/utility/SectionHead";

const Protfolio = () => {
  return (
    <div className="protfolio_section py-5">
      <div className="container">
        <SectionHead
          title="Recent Work"
          text="Welcome and open yourself to your truest love"
        />
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <ProtfolioGrid
              protfolio_img={demo}
              title="First Project"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est accusantium molestiae atque quibusdam, amet itaque eum?"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <ProtfolioGrid
              protfolio_img={demo}
              title="Second Project"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est accusantium molestiae atque quibusdam, amet itaque eum?"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <ProtfolioGrid
              protfolio_img={demo}
              title="Second Project"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est accusantium molestiae atque quibusdam, amet itaque eum?"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <ProtfolioGrid
              protfolio_img={demo}
              title="Second Project"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est accusantium molestiae atque quibusdam, amet itaque eum?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
