import React from "react";
import { Link } from "react-router-dom";

const HoverCard = () => {
  return (
  <>
      <div className="card-container">
        {/* Music Festival Card */}
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Feel the <span>rhythm</span> of the night!
            </h3>
            <p className="card-hover__text">
              Join the biggest music festival of the year with live bands,
              DJs, food trucks, and electric vibes under the stars.
            </p>
            <a href="#" className="card-hover__link">
              <span><Link to={'/register'} style={{textDecoration:'none',color:'green'}}>Book Tickets</Link></span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Early <span>access</span> saves <span>30%</span>!
            </h4>
          </div>
          <img
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2025/03/27202501/events-in-april-delhi-1600x900.jpg"
            alt="Music Festival"
            width="100%"
          />
        </div>
  
        {/* Art Exhibition Card */}
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Discover <span>art</span> that speaks!
            </h3>
            <p className="card-hover__text">
              Explore the elegance of modern and classic art pieces in
              a breathtaking exhibition filled with creativity and expression.
            </p>
            <a href="#" className="card-hover__link">
              <span><Link to={'/register'} style={{textDecoration:'none',color:'green'}}>Explore Gallery</Link></span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Entry <span>free</span> for <span>students</span>!
            </h4>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*Ihefiu8N2ujlD7V6"
            alt="Art Exhibition"
          />
        </div>
  
        {/* Tech Conference Card */}
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Join the <span>Tech Conference 2025</span>!
            </h3>
            <p className="card-hover__text">
              Dive into innovation with tech leaders, workshops, and new
              product showcases. Stay ahead with future tech trends!
            </p>
            <a href="#" className="card-hover__link">
              <span><Link to={'/register'} style={{textDecoration:'none',color:'green'}}>Join Us</Link></span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Get <span>access</span> with <span>free trial</span>!
            </h4>
          </div>
          <img
            src="https://blog.novanet.no/content/images/thumbnail/6759819d5431cce63c3d0eff_DSC2277-p-2000-20-1--1.jpg"
            alt="Tech Conference"
          />
        </div>
      </div>
  </>
  );
};

export default HoverCard;
