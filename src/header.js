import React from 'react'
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoMdStar } from "react-icons/io";

const header = () => {
    return (
        <div className='header'>
            <div className="header-section1">
                <div className="contactD">
                    <ImPhone /> Phone: +918100136780    <IoMail />info@xyz.com
                </div>
                <div className="socialD">
                    <FaLinkedinIn />  <TfiYoutube />
                </div>
            </div>
            <div className="header-line"></div>
            <div className="header-section2">
                <div className="header-start">
                    <div className="star-icon">
                        <IoMdStar className='svg1'/><IoMdStar className='svg2'/>
                    </div>
                    <div >
                        <span className="start-name1" >STAR</span>
                        <div >
                            <span className="start-name2">Capital Advisoe</span>
                        </div>
                    </div>
                </div>
                <div className="header-list">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Our Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default header
