import React from 'react'
import p2 from './assits/p2.svg fill.png'

const Mission = () => {
  return (
    <div className='mission'>
      <div className="mission-main">
        <div className="mission-container">
          <div className="mission-text">
            <span>Our mission is to transform the financial futures of our
              clients by delivering strategic financial guidance and
              personalized solutions. With a focus on integrity and
              client-centricity, we strive to be a trusted partner on
              their journey to financial success, fostering growth, and
              creating lasting value</span>
          </div>
          <div className="mission-img">
            <img src={p2} alt='p2'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
