import React from 'react'
import footerContact from "../../api/footerApi.json";
import { NavLink } from 'react-router-dom'


import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footers = () => {

    const footerIcon = {
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>,
    };

  return (
    <div>
      <>
      <footer className='footer-section'>
        <div className='container grid grid-three-cols'>
            {footerContact.map((curData , index)=>{
                const {icon , title , details} = curData;
                return (
                    <div className='footer-contact' key={index}>
                        <div className='icon'>{footerIcon[icon]}</div>
                        <div className='footer-contact-text'>
                            <p>{title}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                );
            })}
        </div>
      </footer>

      <div className='copyright-area'>
        <div className='container'>
            <div className='grid grid-two-cols'>
                 <div className='copyright-text'>
                    <p>Copyright &copy; 2025 WorldAtlas. All Rights Reserved.
                    <NavLink to='https://www.linkedin.com/in/harnerohit-60397b220/' target='_blank'>
                    Rohit Harne
                    </NavLink>
                    </p>
                 </div>

                 <div className='footer-menu'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="https://www.instagram.com/a_harnerohit?igsh=bjFiOGR6d2Jydzdl" target='_blank'>
                            Social
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                 </div>

            </div>
        </div>
      </div>
      </>
    </div>
  )
}

export default Footers
