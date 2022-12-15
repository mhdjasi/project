import React, { useEffect } from 'react'
import Header from './Header'
import Topbar from './Topbar'
import TwoColumOne from './TwoColumOne'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import Footer from './Footer'
import FooterBanner from './FooterBanner'
import ServiceList from './Services'
import QuestionBanner from './QuestionBanner'
import RibbonBanner from './RibbonBanner'
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
import { useParams } from 'react-router-dom'


import background from '../assets/images/services/Rectangle 172-3.png'



function SingleService({ type, name, see_all_btn }) {

    const id = useParams().id

    const [heading01, setHeading01] = React.useState('More than just a')
    const [heading02, setHeading02] = React.useState('Moving')
    const [desc, setDesc] = React.useState('Moving company that goes beyond simple relocation by ensuring quality services and reliability of our customers.')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })


    const [services, setServices] = React.useState([
        {
            "id": 1,
            "heading": "Household Goods Relocations",
            "content": "When there is a complex and time-consuming procedure of home relocation in front of you, planning it in the right manner can assure you a secure and organised shifting. Creating ahouse relocation plan in a haphazard manner will compromise your belongings safety. As part of its home relocation service, Cargotrack disassembles furniture and electronic appliances, unmounts ACs and TVs, and packages fragile kitchen supplies such as crockery, cutlery, and chinaware using the best packaging materials. Our home relocation services don’t come to a conclusion until your household items are delivered to their required destination on time with complete safety.There are many reasons because of which people need to relocate their homes. They would want to move their household belongings safely. Hiring home relocation services would ensure an easier and smooth transition process.",
            "description": "The amount of work involved in Home relocation service is extensive and can prove stressful. Due to this, many people like to hire home shifting services from reputed movers and packers. Hiring a professional packing company like Cargotrack to relocate your home is a smart choice. Cargotrack has a long year of experience and expertise in carrying out domestic moves within the city and intercity.We utilise modern and advanced techniques to perform relocation tasks with great care. Our trustworthy packers and movers serve both local as well as long distant moves."
        },
        {
            "id": 2,
            "heading": "Office Relocation & Data Centre Migration",
            "content": "Cargotrack Office Move is a well-established service providing you with the benefit of our experience in this demanding field. We understand the need for planning, communication and close cooperation of your office move with all concerned parties. Timing is everything, and getting your office move right is critical to your business success With our skill and expertise, you can be assured of a smooth, efficient and well-planned execution of your office move We will design a detailed schedule of your move, tailored to your business requirements.Our team of skilled packers and handlers headed by experienced supervisors will be assigned. Depending on the size and complexity of your move, your coordinator can work with you to develop the best coding system for your requirements by packing your items and labelling them with color coding to identify their location and department.",
            "description": "The amount of work involved in Home relocation service is extensive and can prove stressful. Due to this, many people like to hire home shifting services from reputed movers and packers. Hiring a professional packing company like Cargotrack to relocate your home is a smart choice. Cargotrack has a long year of experience and expertise in carrying out domestic moves within the city and intercity.We utilise modern and advanced techniques to perform relocation tasks with great care. Our trustworthy packers and movers serve both local as well as long distant moves."
        },
        {
            "id": 3,
            "heading": "Mobility Services",
            "content": "Our open workspace platform integrates with industry-leading solutions. It uses modern digital workplace with advanced security capabilities. Cargotrack measures and optimises the employee digital experience to improve collaboration, productivity, and culture. We predictively and proactively secure and fix things before they break.  Through our services, we provide management and support for millions of devices, virtual desktops, and provide robust security and resilience.",
            "description": ""
        },
        {
            "id": 4,
            "heading": "Road Transportations",
            "content": "At Cargotrack, we use innovative technologies and have excellent personnel to offer you bespoke transport solutions whether you require FCL or LCL. You can take advantage of our fast transit times, reliable capacities, wide range of products, and unrivaled service quality. Our fleet of trucks ensures your daily transport needs are met quickly and cost-effectively. As a member of leading corporations with experienced customs agents, we provide the level of security you need for your economic success throughout Europe.            ",
            "description": ""
        },
        {
            "id": 5,
            "heading": "Packing & Crating",
            "content": "Once you decide which Packers and Movers service you need and you confirm your moving with us, your work is done, we will do the rest.With our  expertly trained professionals, we hold the highest standards of security among Packers and movers to ensure your belongings are safe and secure.  As an Eco Friendly packers and movers company, we are committed to using only 100% recyclable materials, energy-saving facilities, and engine-efficient fleet systems that emit less pollution.  Our wide range of moving options and customized moving services give you the convenience of having just what you need.We will reach your place at your time of convenience to pack all the items. Our packers and movers are well trained for this type of work, you can relax while they pack.All the packed items are then loaded into the transportation vehicle. Our Vehicles are well equipped to keep your items safe during transportation. Our packers and movers have done a good job so you can relax. ",
            "description": ""
        },
        {
            "id": 6,
            "heading": "Groupage Services",
            "content": "Groupage freight is a shipping method offered by Cargotrack that combines several smaller shipments into one full container when goods are transported in bundles to form a consolidated shipment. This shipping method is suitable for single pallets. For a larger pallet quantity, partial load shipment is generally the cheaper option. Groupage involves collecting general cargo from various shippers and combining it in the forwarder's warehouse. After delivery, they are separated again in the corresponding warehouses. Groupage freight is a widely used procedure in logistics because mixing the different shipments is particularly economical.",
            "description": ""
        },

        {
            "id": 7,
            "heading": "Storage Services",
            "content": "With our assured responsibility and care,it goes without saying that our self -storage units will keep your belongings with atmost safe,clean and dry space.We have included internal and external security for your belongings protection.Choosing Cargotrack will offer you storage space to your individual requirements, storage advisors to guide and to give estimation over your storage ,reliable charges based on the space and time you used,fully protected storage space.In your absence ,an authorised representative of you can access your storage.",
            "description": ""
        },
        {
            "id": 8,
            "heading": "Vehicle Relocations",
            "content": "Cargotrack is committed to helping you find the most reliable and affordable vehicle shipping services in your area. We offer a wide range of relocation and transport-related services, and our vehicle transport is one of our most popular services. With Cargotrack, you can be sure you're getting the best possible service at the best possible price.To provide you with the most straightforward quality automotive shipping service at your doorstep. Saudi Arabia's vehicle transport service has created a range of top moving companies and auto transport companies. You can choose the simplest service provider based on your real needs with the help of vehicle relocation services. Consider moving your vehicle and entire home goods from Saudi Arabia to another city.",
            "description": ""
        },




    ])

    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />
                {/* <h1>id :{id}</h1> */}

                {services.filter((service) => service.id == id).map((service) => (
                    // <TwoColumOne
                    //     heading01={`${id}:${service.heading}`}
                    //     heading02={""}
                    //     desc={service.content}
                    //     description={service.description}
                    //     button={button}
                    //     page="single-service"
                    // />
                    <>
                        <div className="xsection row p-0 align-items-stretch dark topmargin-sm"
                            style={{
                                height: 'auto',
                                marginBottom: '5%',
                            }} >
                            <div className="col-lg-6"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}
                            >
                                <div style={{ width: '80%', }}>

                                    <div className='banner_font  color-primary-medium'>{service.heading} </div>
                                    <div className='banner_font color-secondary'>{""}</div>
                                    <div className='banner_font color-primary-medium'></div>
                                    <div className='color-primary-medium banner_font_medium mt-4 '>{service.content}</div>


                                    {!service.description && <button className='btn btnprimary  mt-4'>{"Contact Us"}</button>}

                                </div>
                            </div>
                            <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                                style={{
                                    height: '70vh',
                                    // backgroundImage: `url(${background})`,
                                    // backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')`,
                                    // background: `url("images/misc/GET A QOUTE.png") center center no-repeat`,
                                    background: `url("/images/misc/SERVICES.png") center center no-repeat`,
                                    backgroundSize: 'contain', minHeight: 250,
                                }}
                            >

                                <div className="form-widget col-padding" data-loader="button">
                                </div>
                            </div>
                        </div >


                        {service.description && <div className="xsection row p-0 align-items-stretch dark topmargin-sm"
                            style={{
                                height: 'auto',
                                marginBottom: '5%',
                            }} >
                            <div className="col-lg-12"
                                style={{

                                    // display: 'flex',
                                    // flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: "6%",

                                }}
                            >
                                <div style={{ width: '80%', }}>

                                    <div className='banner_font  color-primary-medium'>{""} </div>
                                    <div className='banner_font color-secondary'>{""}</div>
                                    <div className='banner_font color-primary-medium'></div>
                                    <div className='color-primary-medium banner_font_medium mt-4 '>{service.description}</div>
                                    {service.description && <button className='btn btnprimary  mt-4'>{"Contact Us"}</button>}
                                    {/* <button className='btn btnprimary  mt-4'>{button.text}</button> */}
                                </div>
                            </div>
                            {/* <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                                style={{
                                    height: '70vh',
                                    background: `url("/images/misc/SERVICES.png") center center no-repeat`,
                                    backgroundSize: 'contain', minHeight: 250,
                                }}
                            >

                                <div className="form-widget col-padding" data-loader="button">
                                </div>
                            </div> */}
                        </div >}


                    </>

                ))
                }




                {/* <div className="xsection row p-0 align-items-stretch dark topmargin-sm"
                    style={{
                        height: 'auto',
                        marginBottom: '5%',
                    }} >
                    <div className="col-lg-6"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'

                        }}
                    >
                        <div style={{ width: '80%', }}>

                            <div className='banner_font  color-primary-medium'>{heading01} </div>
                            <div className='banner_font color-secondary'>{heading02}</div>
                            <div className='banner_font color-primary-medium'></div>
                            <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>

                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        </div>
                    </div>
                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            background: `url("/images/misc/SERVICES.png") center center no-repeat`,
                            backgroundSize: 'contain', minHeight: 250,
                        }}
                    >

                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </div > */}


                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default SingleService

