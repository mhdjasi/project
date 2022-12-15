import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Topbar from '../Components/Topbar'
import TwoColumOne from '../Components/TwoColumOne'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import Footer from '../Components/Footer'
import FooterBanner from '../Components/FooterBanner'
import ServiceList from '../Components/Services'
import QuestionBanner from '../Components/QuestionBanner'
import RibbonBanner from '../Components/RibbonBanner'
import abtout_us_img from "../assets/images/about_us/Rectangle 11.png";
import efs_logo from "../assets/logo/efs_logo.png";
import bg_building from "../assets/images/ribbon-banners/image 17.png";


import p1 from '../assets/profile/Rectangle 171.png'
import p2 from '../assets/profile/Rectangle 171-1.png'
import p3 from '../assets/profile/Rectangle 171-2.png'
import household from '../assets/images/services/Rectangle 172-4.png'
import office_relocation from '../assets/images/services/Rectangle 172-2.png'
import mobility_service from '../assets/images/services/Rectangle 172-3.png'
import road_transportation from '../assets/images/services/Rectangle 173.png'
import packing_and_crafting from '../assets/images/services/Rectangle 172.png'
import groupage_services from '../assets/images/services/Rectangle 172-1.png'

import years_img from "../assets/images/about_us/Group 1053.png";
import industry_img from "../assets/images/about_us/Group 1054.png";
import packing_img from "../assets/images/about_us/Group 1056.png";
import care_img from "../assets/images/about_us/Group 1055.png";
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import axios from 'axios'
import icon_vision from '../assets/images/icons/Group 1048.png'
import icon_mission from '../assets/images/icons/Group 1050.png'
import icon from '../assets/images/icons/Group.png'



function About({ type, name, see_all_btn }) {
    const [heading01, setHeading01] = React.useState('More than just a')
    const [heading02, setHeading02] = React.useState('Moving company')
    const [desc, setDesc] = React.useState('Moving company that goes beyond simple relocation by ensuring quality services and reliability of our customers.')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })


    const [services, setServices] = React.useState([
        {
            "image": years_img,
            "heading": "7 YEARS OF EXPERIENCE",
            "description": "7 years of experience equates to thousands of hours perfecting our operational services, all you don't have worry about a thing"
        },
        {
            "image": industry_img,
            "heading": "PROVEN INDUSTRY EXPERTISE",
            "description": "A team of dedicated professionals with the know-how of getting it there at maximum efficiency."
        },
        {
            "image": packing_img,
            "heading": "PROFESSIONAL PACKING",
            "description": "We have a team of proficient carpenters, experienced supervisors & survey team."
        },
        {
            "image": care_img,
            "heading": "SPECIALIZED CARE",
            "description": "Wheather it's a one-of-a-kind antique of the finest of glassware, our content handling procedure rates best in class and the reasons are clear."
        },


    ])



    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />

                <TwoColumOne
                    heading01={heading01}
                    heading02={heading02}
                    desc={desc}
                    button={button}
                    page="about"
                />


                {/* <RibbonBanner />
            <Services type="" name="Our Services" see_all_btn={false} />
            <RibbonBannerMembership />
            <Services type="customer" name="Customer Feedback" see_all_btn={false} /> */}

                <div className="xsection row p-0 align-items-stretch dark topmargin-sm">
                    <div className="col-lg-12"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '5%',
                            marginTop: '5%',

                        }}
                    >
                        <div
                            className='xquestion_banner'
                            style={{
                                height: 'auto',
                                width: '80%',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div style={{
                                height: "500px",
                                backgroundSize: 'cover',
                                backgroundImage:
                                    `url("${abtout_us_img}")`,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                flexDirection: 'row',

                                borderRadius: '0px 0px 21px 21px',

                            }}>
                                <div
                                    className='bg-primary-light'
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        height: '130px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '0px 0px 20px 20px',

                                    }}
                                >
                                    <div
                                        className=' about_us_content'

                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div style={{ flex: 1, alignItems: 'flex-end', display: 'flex', justifyContent: "flex-end", alignItems: "flex-end", paddingRight: '20px' }}>
                                            <img height={60} src={efs_logo} />
                                        </div>
                                        <div style={{ flex: 2 }}>Cargotrack is the sister company of EFS Logistics company, and specializes in moving personal effects</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xsection row p-0 align-items-stretch dark topmargin-sm">
                    <div className="col-lg-12"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '5%',
                        }}
                    >
                        <div className='about_us_content' style={{ textAlign: "center", width: '75%', }}>
                            In 2017, Cargotrack born as a sister company of EFS Logistics. Cargo track company is dedicated to handle the personal effects and specialized Services like home relocation,
                            office relocation, groupie service, packing, storage, road transport, vehicle transportation and mobility services. Now cargo track has become a major relocation
                            company based at Jeddah and has it branches at Riyadh & Dammam.
                        </div>
                    </div>
                </div>


                {/* background-image: url(./images/ribbon-banners/Group 1002.png); */}

                <div className="section-about mt-0">
                    <div className="container clearfix" >
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix ">
                                    <div className="fbox-content">


                                        <div><img src={icon_vision} height="50" /> </div>
                                        <h5 className="m-0 text-color heading-medium ">Vision</h5>
                                        <div style={{ fontSize: '16px' }}>To establish ourself as market leaders by providing best customised relocation services</div>
                                        <div className="d-block d-md-block d-lg-none bottommargin" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                                    <div className="fbox-content">
                                        <div>
                                            <img src={icon_mission} height="50" />

                                        </div>
                                        <h5 className="m-0 text-color heading-medium ">Mission</h5>
                                        <div style={{ fontSize: '16px' }}>To providing easy relocation service experience with complete customer focus at affordable price</div>
                                        <div className="d-block d-md-block d-lg-none bottommargin" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <>
                    {/* begin */}


                    <section id="page-title" className="bg-transparent">
                        <div className="container clearfix "
                            style={{
                                // display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                // flexDirection: 'column',
                            }}
                        >
                            <div className='banner_font' >
                                <img src={icon} height="50" style={{ marginRight: '10px' }} />
                                Why Choose Us</div>
                            <div style={{ minWidth: '300px', maxWidth: '500px', }}>
                                We understand that finding a reliable logistics partner to take care of your business with so many options can be a challenge. Here are a few reasons that set us apart from the crowd.
                            </div>

                            {see_all_btn && <button className="btn-see-all ">See all </button>}

                        </div>
                    </section>
                    <section id="content">
                        <div className="content-wrap">
                            <div className="container clearfix">
                                <div className="row col-mb-50 mb-0 xbg-primary">
                                    {services.map((service, index) => {
                                        return <ServiceCard service={service} />
                                    })}

                                </div>
                            </div>


                        </div>
                    </section>


                    {/* end */}
                </>



                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default About


const ServiceCard = ({ service }) => {

    return (<div className="col-sm-6 col-lg-6 " style={{
        padding: "0px 30px 30px 30px",
    }}>
        <div className="xteam service-card d-flex " >
            <div className="team-image" style={{ height: "auto", width: "300px", }}>
                <img src={service.image} className='service-card ' style={{ width: "100%" }} alt="image" />
            </div>
            <div className="team-desc  " style={{ width: "500px", }}>
                <div className="xteam-title p-4" >
                    <span className='service-heading'>{service.heading}</span>
                    <br />
                    <span className='service-desc' >
                        {service.description}
                    </span>
                </div>
            </div>
        </div>
    </div>

    )
}
