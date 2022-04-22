import React from 'react';
import './Footer.css'
import Logo from './Logo.svg';
import {BiPhoneCall} from 'react-icons/bi'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {RiFacebookCircleLine,RiLinkedinBoxLine,RiInstagramLine} from 'react-icons/ri'

function Footer() {
    return (
    <>
        <div className='FOOTER'>
            <div className='footer'>
                <div className='footer-content'>
                <div className='leftcontent'>
                    <div className='contact'>
                        <div className='contactus'>Contact US</div>
                        <div className='location'>
                            <div className='icons'><FaMapMarkerAlt/></div>
                                <div>
                                    Jaypee University Of Information Technology
                                        <br/>Waknaghat
                                        <br/>Himanchal Pradesh-173234
                                </div>
                        </div>
                        <div className='phone'>
                            <div className='icons'><BiPhoneCall/></div>
                            <div>
                                ADITYA SAXENA - President JYC
                                <br/>+91 75990 03687
                                <br/>RAVI SRIVASTAVA - Coordinator
                                <br/>Literary And Debating Club
                                <br/>+91 81748 80411
                            </div>
                        </div>
                    </div>

                    {/* <div className='contact'>
                        <div className='contactus'>CONTACT US</div>
                        <div className='location'>
                            <span className='icons-left'><FaMapMarkerAlt/></span>
                            <span className='location-content'>
                                Jaypee University Of Information Technology
                                <br/>Waknaghat, HP-173234
                                <br/>India
                                <br/>Phone: +91-xxxxxxxxxx
                                <br/>Email: xyz@gmail.com
                            </span>
                        </div>
                        <div className='phone'>
                            <span classname='icons-left'><BiPhoneCall/></span>
                            <span className='phone-content'>
                                ADITYA SAXENA - President JYC<br/>
                                +91 75990 03687<br/>
                                RAVI SRIVASTAVA - Coordinator<br/>
                                Literary And Debating Club<br/>
                                +91 81748 80411
                            </span>
                        </div>
                    </div> */}
                </div>
                <div className='mid-content'>
                    <div className='follow'>
                        <div className='follow-content'>
                            <div className='followuson'>FOLLOW US ON</div>

                            <div className='icons'>
                                <RiFacebookCircleLine/>
                                <RiLinkedinBoxLine/>
                                <RiInstagramLine/>
                            </div>
                        </div>


                    </div>

                    <div className='links'>
                        <div className='links-content'>
                            <div className='quicklinks'>QUICK LINKS</div>
                            <br></br>

                            <div className='qlinks'>
                                     - JUIT
                                <br/>- JYC
                                <br/>- LITERARY AND DEBATING CLUB
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                <img src={Logo} className='logo' alt="YP" />
            </div>
            <div class="copyright">Copyright @2022 All Rights Reserved   |   Managed by - Technical Sciences, Movies and Photography Club</div>

    </div>
    </>
    )
}

export default Footer;
