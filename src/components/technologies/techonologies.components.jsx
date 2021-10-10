import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faCheck, faCogs} from "@fortawesome/free-solid-svg-icons";

import './technologies.styles.css';

const TechnologyServices = () => {
  return (
    <div className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Design</h3>
              <p>I approach each project individually and always focus on the result.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCheck} size="2x" /></div>

              <h3>Software Testing</h3>
              <p>Your potential clients well see your services or product on Facebook</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size="2x" /></div>

              <h3>Software Architecture and Design</h3>
              <p>Your service or product will appear at the top of the Google search</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TechnologyServices;
