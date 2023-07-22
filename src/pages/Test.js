import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';

const SkillSections = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Skills</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="text-center">
            <FaHtml5 size={64} color="#E34F26" />
            <p>HTML5</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="text-center">
            <FaCss3Alt size={64} color="#2965f1" />
            <p>CSS3</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="text-center">
            <FaJs size={64} color="#F7DF1E" />
            <p>JavaScript (ES6+)</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="text-center">
            <FaReact size={64} color="#61DAFB" />
            <p>React.js</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="text-center">
            <FaBootstrap size={64} color="#7952B3" />
            <p>Bootstrap</p>
          </div>
        </div>
        {/* Add more icons for other skills as needed */}
      </div>
    </div>
  );
};

export default SkillSections;
