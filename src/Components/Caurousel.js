import React from 'react'
import { Link } from 'react-router-dom';
// import fast from '../assets/images/herobanner/fast.png';
// import kochi from '../assets/images/herobanner/kochi.png';
// import usa from '../assets/images/herobanner/usa.png';

import fast from '../assets/images/herobanner/BG1.jpg';
import kochi from '../assets/images/herobanner/BG2.jpg';
import usa from '../assets/images/herobanner/BG3.jpg';




function Caurousel() {

    const [banner_data, setBanner_data] = React.useState([
        {
            "heading_1": "Direct Groupage",
            "heading_2": "To Europe, Usa, Canada",
            "heading_3": "Now send your goods to and from hassle free at best rates",
        },
        {
            "heading_1": "We Make Moving",
            "heading_2": "Fast & Easy",
            "heading_3": "ersonal and Commercial Relocation Services",
        },
        {
            "heading_1": "Groupage Services to",
            "heading_2": "Hyderabad, Kochi &  Chennai",
            "heading_3": "Providing customized and affordable Groupage Services to South India",
        },
    ]);


    return (
        <section id="page-title" className="page-title-dark page-title-center p-0 banner-area" >
            {/* <div className="content-wrap"> */}
            <div className="xcontainer clearfix">
                <div className="row col-mb-50 mb-0 " style={{ paddingLeft: "0px !important" }}>
                    <div className="col-lg-5 col-sm-12 col-md-12 d-flex align-items-center flex-grow-1 carousel-text banner-text cpb-0">
                        <div className="fslider " data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">
                            <div className="flexslider ">
                                <div className="slider-wrap ">

                                    <div className="slide">
                                        <div className='color-primary-medium banner_font'>
                                            We Make Moving
                                        </div>
                                        <div className='color-secondary banner_font' >
                                            Fast & Easy
                                        </div>
                                        <div className='color-primary-medium mt-4 banner_font_medium'>
                                            Personal and Commercial
                                        </div>
                                        <div className='color-primary-medium  banner_font_medium'>
                                            Relocation Services
                                        </div>


                                        <Link to="/contact-us" className='btn-contact-us btnprimary mt-4'>
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="slide">
                                        <div className='color-primary-medium banner_font'>
                                            Direct Groupage
                                        </div>
                                        <div className='color-secondary banner_font ' >
                                            To Europe, Usa, Canada
                                        </div>
                                        <div className='color-primary-medium mt-4 banner_font_medium'>
                                            Now send your goods to and from
                                        </div>
                                        <div className='color-primary-medium  banner_font_medium'>
                                            hassle free at best rates
                                        </div>
                                        <Link to="/contact-us" className='btn-contact-us btnprimary mt-4'>
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </div>


                                    <div className="slide">
                                        <div className='color-primary-medium banner_font' style={{ whiteSpace: 'nowrap', }}>
                                            Groupage Services to
                                        </div>
                                        <div className='color-secondary banner_font' style={{ whiteSpace: 'nowrap', }}>
                                            Hyderabad, Kochi &  Chennai
                                        </div>
                                        <div className='color-primary-medium mt-4 banner_font_medium'>
                                            Providing customized and affordable
                                            <br />
                                            Groupage Services to South India
                                        </div>
                                        <Link to="/contact-us" className='btn-contact-us btnprimary mt-4'>
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-12 flex-grow-1 carousel-image  cpb-0"  >
                        <div className="fslider" data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">
                            <div className="flexslider" style={{ overflow: "hidden" }}>
                                <div className="slider-wrap">
                                    <div className="slide"><img src={fast} alt="Page Title Image" className='' /></div>
                                    <div className="slide"><img src={usa} alt="Page Title Image" /></div>
                                    <div className="slide"><img src={kochi} alt="Page Title Image" /></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* </div> */}

        </section >
    )
}

export default Caurousel