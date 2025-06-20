import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="banner">
         <div className="banner-animation">
           <div className="banner-image banner-image1">jh</div>
           <div className="banner-image banner-image2"></div>
         </div>
          <div className="banner-content">
             <h1>Unlimited Movies Tv Shows and More  </h1>
             <p>Watch Anywhere and cancle anytime </p>
             <div className="banner-btn">
                <div className="btn btn-play"> Get Started</div>
                <div className="btn btn-info"> Learn more</div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Banner