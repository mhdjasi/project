import React from 'react'
import logo from "../assets/images/logo/logo-white.png";

import fb from "../assets/images/icons/fb965.png";
import insta from "../assets/images/icons/insta964.png";
import utube from "../assets/images/icons/utub963.png";
import whatsapp from "../assets/images/icons/whatsapp966.png";
import linkedin from "../assets/images/icons/ln962.png";
import { Link, useNavigate } from 'react-router-dom';

const socialIcon = [
    { icon: fb, url: 'https://www.facebook.com/cargotrackco?mibextid=LQQJ4d' },
    { icon: insta, url: 'https://instagram.com/cargotrack.sa?igshid=YmMyMTA2M2Y=' },
    { icon: linkedin, url: 'https://www.linkedin.com/company/cargotrackmovers/' },
    { icon: whatsapp, url: 'https://wa.me/966569197864?text=Hi%20There!%20' },
]

function Footer() {
    const navigate = useNavigate()
    return (
        <footer id="footer" style={{ backgroundColor: '#012b39', color: 'white', borderTop: '2px solid rgba(0,0,0,0.06)' }}>
            <div className="container"
                style={{ borderBottom: '0px solid rgba(0,0,0,0.06)' }}
            >
                <div className="footer-widgets-wrap">
                    <div className="row gutter-50 col-mb-50 mt-3">

                        <div className="col-md-4">
                            <div className="widget">
                                <div className="row col-mb-30">

                                    <div className="col-lg-12">
                                        <div className="footer-big-contacts">
                                            <img src={logo} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget subscribe-widget clearfix">
                                <div className="row col-mb-30">
                                    <div className="col-sm-12 col-md-12 col-lg-12 clearfix">
                                        <p href="#">
                                            <small style={{ display: 'block', marginTop: 3 }}>
                                                <strong>Jeddah | Riyadh | Dammam
                                                </strong>
                                                {/* <br /> */}

                                                <div className='d-flex justify-content-start align-items-md-center '>
                                                    Connect with us :
                                                    {socialIcon.map(item =>
                                                        <a href={item.url} >
                                                            <img src={item.icon} height="30" className='p-1 footer_social_icons' />
                                                        </a>
                                                    )}


                                                </div>

                                            </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="widget clearfix">
                                {/* <div className="widget-subscribe-form-result" /> */}
                                {/* <div className="line line-sm" /> */}
                                <div className="row col-mb-30">
                                    <div className="col-lg-3 col-6 xwidget_links">
                                        <h5 className='clr-white'>SITEMAP</h5>
                                        <div className='footer_text'>Home</div>
                                        <div className='footer_text'>About</div>
                                        <div className='footer_text'>Services</div>
                                        <div className='footer_text'>Gallery</div>
                                    </div>
                                    <div className="col-lg-4 col-6 xwidget_links">
                                        <h5 className='clr-white'>QUICK START</h5>
                                        <div onClick={() => navigate('/get-quote')} className='footer_text'>Get a Quote</div>
                                        <div className='footer_text'>Track Shipment</div>
                                        <div className='footer_text'>Customer feedback</div>
                                        <div className='footer_text'>Contact Us</div>
                                    </div>
                                    <div className="col-lg-5 col-6 xwidget_links">
                                        <h5 className='clr-white'>SERVICES</h5>
                                        <div className='footer_text'>Household Goods Relocation</div>
                                        <div className='footer_text'>Road Transportations</div>
                                        <div className='footer_text'>Vehicle Relocation</div>
                                        <div className='footer_text'>Storage Services</div>
                                        <div className='footer_text'>Mobility Services</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights" className="bg-transparent">
                <div className="container clearfix">
                    <div className="row col-mb-30">
                        <div className="col-md-4 text-center text-md-start">
                            Copyrights © 1996-2020 <br />
                            <div ><a className='clr-white' href="#">CargoTrackLtd All Rights Reserved.</a>
                            </div>
                        </div>
                        <div className="col-md-8 text-center text-md-start">
                            <div className="row col-mb-30">
                                <div className="col-lg-4 col-6 xwidget_links">
                                    <div>Privacy Policy</div>
                                    <div>Disclaimer</div>
                                </div>
                                <div className="col-lg-5 col-6 xwidget_links">
                                    <div>Terms Of Use</div>
                                    <div>Standard Trading Agreement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer