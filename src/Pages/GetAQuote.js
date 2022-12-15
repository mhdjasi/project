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

function GetAQuote({ type, name, see_all_btn }) {
    const [heading01, setHeading01] = React.useState('More than just a')
    const [heading02, setHeading02] = React.useState('Moving')
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
                    page="get-quote"
                />
                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default GetAQuote

