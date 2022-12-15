import React from 'react'
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
import care_img from "../assets/images/about_us/Rectangle 154.png";
import JSZip from "jszip";
import { saveAs } from 'file-saver';


const customerFeedback = [
    {
        "country": "Jeddah",
        "address": "King Khalid Road, Al-Baghaduya AL Sharqiyah",
        "mobile": "+966 59692 9917",
    },
    {
        "country": "Riyadh",
        "address": "Hanin Ibh Ishaq Street, Al Futhra, Riyadh 12632",
        "mobile": "+966 58297 1155",
    },
    {
        "country": "Dammam",
        "address": "Al Amir Muhammed Ibn Fahad Road, Ar Rabi, Dammam 32241-56900",
        "mobile": "+966 58182 9256",
    },

]
function ContactUs({ type, name, see_all_btn }) {
    const [heading01, setHeading01] = React.useState('Contact Us')
    const [heading02, setHeading02] = React.useState('')
    const [desc, setDesc] = React.useState('Get in touch and let us know how we can help')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })

    

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
                    // button={button}
                    page="contact-us"
                />

                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="row col-mb-50 mb-0 xbg-primary">
                                {customerFeedback.map((item, index) => {
                                    return <AddressCard item={item} />
                                })}
                            </div>
                        </div>
                    </div>
                </section>




                {/* <RibbonBanner />
            <Services type="" name="Our Services" see_all_btn={false} />
            <RibbonBannerMembership />
            <Services type="customer" name="Customer Feedback" see_all_btn={false} /> */}


                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default ContactUs

const AddressCard = ({ item }) => {
    return (<div className="col-12 col-sm-6 col-md-6 col-lg-4 " >
        <div className="address-card" style={{ height: 'auto' }} >
            {/* <div className="team-image">
                <img src="demos/medical/images/doctors/1.jpg" className='service-card ' style={{ height: '300px' }} alt="Dr. John Doe" />
            </div> */}
            <div className=" ">
                <div className=" " >
                    <div style={{ display: 'flex' }}>
                        {/* <img src={item.profile_pic} /> */}

                        <div
                            style={{

                                display: 'flex',
                                flex: 1,
                                justifyContent: 'center',
                                flexDirection: 'column',
                                // maxWidth: "300px",
                                minHeight: "150px",
                                // backgroundColor: "green",
                                // alignItems: "center",
                                textAlign: "center",

                            }}
                        >
                            <div className='customer-feedback-heading color-primary d-flex justify-content-center align-items-center' style={{ height: "50px" }}>{item.country}</div>

                            <div className='bgprimary color-secondary customer-feedback-desc d-flex flex-grow-1 pt-3' style={{ padding: '10px', }} >{item.address}</div>
                            <span className='bgprimary customer-feedback-desc ' style={{ borderRadius: "0px 0px 10px 10px ", paddingBottom: "20px", color:'#fff' }} >Mobile : {item.mobile}</span>

                        </div>
                    </div>
                    {/* <div style={{ marginTop: '5px' }}>
                        <span className='customer-feedback-desc ' >Mobile : {item.mobile}</span>
                    </div> */}


                </div>
            </div>
        </div>
    </div>
    )
}