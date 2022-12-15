import React from 'react'
import { Link } from 'react-router-dom'
import goodluck_img from '../assets/images/misc/ct 3.png'

function FooterBanner() {
    return (
        <section id="content">
            <div className="content-wrap" style={{
                overflow: 'visible',
                zIndex: '1',
                padding: '0px',
                marginBottom: '-50px',
            }}>
                <div className="container clearfix d-flex justify-content-center mt-5">
                    <div className="row xcol-mb-50 mb-0 footer-banner"  >
                        <div className='footer-banner-text'>
                            <div className='footer_banner_font colorwhite'>Do you have a requirement ?</div>
                            <div className='xcolor-primary-medium  footer_banner_font_medium mt-3'>We provide better freight & service in the <br />kingodom of Saudi Arabia with our expertise</div>
                            <Link to={'/get-quote'} className='btn btnprimary mt-3 img-footer' placeholder=''
                                style={{ width: 'auto', height: "35px", borderRadius: '5px' }}
                            >Get a Quote</Link>
                        </div>
                        <img src={goodluck_img} alt="goodluck" className='footer-banner-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterBanner