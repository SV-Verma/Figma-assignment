import React from 'react'
import core from './assits/core.png'

const WhyUs = () => {
  return (
    <div className='whyus'>
      <div className="whyus-main">
        <div className="whyus-container">
          <div className="whyus-text">
            <h4>WHY US</h4>
            <h3>Our
              <strong> core values </strong>
              guide
              everything we do
            </h3>
            <p>Built on a foundation of trust and expertise, our values shape the way we
              serve individuals, small businesses, and corporations.</p>
            <p>At SP, we believe in unwavering integrity, transparency, and client-centricity.
              Our commitment to excellence drives every aspect of our financial
              consultancy, ensuring that our clients receive trusted guidance tailored to their
              unique needs.</p>
              <div className="whyus-btn">
                <button>WORK WITH US</button>
              </div>
          </div>
          <div className="whyus-img">
            <img src={core} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyUs
