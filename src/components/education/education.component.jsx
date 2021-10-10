import React from "react";
import './education.styles.css'

const Education = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Education</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-now</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Education;
