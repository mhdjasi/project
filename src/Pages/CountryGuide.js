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

function CountryGuide({ type, name, see_all_btn }) {
    const [heading01, setHeading01] = React.useState('Seamless Relocation')
    const [heading02, setHeading02] = React.useState('in Saudi Arabia')
    const [desc, setDesc] = React.useState('We are going to present you some of the several reasons as to why you should start a new life in Saudi Arabia and how to oraganize your relocation to this country.')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })

    const [data, setData] = React.useState([
        {
            h1: "Used Household Goods",
            h2: "and Personal Effects",
            subheading: [
                {
                    h1: "Documents Required",
                    points: [
                        "Passport copy with entry visa page",
                        "Original bill of lading (OBL) / air waybill (AWB)",
                        "Detailed and valued inventory",
                        "Packing list",
                        "Purchase receipts for electrical / electronic appliances",
                        "Certificate of insurance, if applicable",
                        "Letter of authorization attested by the Saudi Chamber of Commerce (for government employees, only the seal of the government agency is required)",
                        "Copies of residence permit (Iqama) / Saudi National’s ID (Bataqa)",
                        "Copy of diplomatic ID / passport (diplomats)",
                        "Customs duty and inspection exemption certificate from the Ministry of Foreign Affairs (diplomats)",
                    ]
                },
                {
                    h1: "Specific Information",
                    points: [
                        "All incoming shipments are subject to a rigorous full inspection.",
                        "The format for the letter of authorization should be provided by agent to the consignee upon arrival at the destination.",
                        "Items valued over SR 10,000.00 (approximately US$ 3,000.00) are subject to Customs duty and payment assessed on the cost, insurance and freight (CIF) value.",
                        "If purchase receipts for electrical / electronic appliances are unavailable, Customs authorities will assess the goods based on the local value of the items.",
                        "All containerized shipments must be on pallets or in lift vans; otherwise, the seaport authority will impose penalty for improper stowage.",
                        "The owner of the goods must be present in Saudi Arabia at the time of Customs clearance to clear the shipment.",
                        "The importation of prohibited items may be considered a smuggling attempt and may result in immediate confiscation, heavy penalties, fines, and/or imprisonment.",
                        "Diplomats must obtain the duty and inspection exemption certificate from the Ministry of Foreign Affairs; otherwise, the shipment will be subject to a physical inspection and duty payment.",

                    ]
                },
            ]
        },
        {
            h1: "Motor Vehicles",
            h2: "",
            subheading: [
                {
                    h1: "Documents Required",
                    points: [
                        "Title / car registration certificate",
                        "Saudi Arabian Standard Organization (SASO) conformity certificate from the country of origin",
                        "Police clearance / de-registrations from the country of origin",
                        "Proof of ownership (purchase invoice, etc.)",
                        "OBL",

                    ]
                },
                {
                    h1: "Specific Information",
                    points: [
                        "The Customs duty for cars is approximately 5% based on customs final assessed value.",
                        "Cars must be left-hand drive.",
                        "Only one car can be imported (foreigners).",
                        "Cars older than 5 years are not allowed for import into Saudi Arabia.",
                        "Personal items may not be left inside the car.",
                        "The SASO conformity certificate can be obtained in Saudi Arabia locally.",
                        "SASO may require replacement or conversion to some parts of the car to meet the SASO Standard at the owner of the goods’ expense.",
                        "The application for the SASO conformity certificate may be rejected, which may result in the export of the car back to origin of origin at the owner of the goods’ expense.",

                    ]
                },
            ]
        },
        {
            h1: "Restricted/Dutiable Items",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "Duties are applied as follows:",
                        "Electrical / electronic appliances  - 5%",
                        "Audiotapes, videotapes, CDs / DVDs   - 5%",
                        "Furniture  - 15%",
                        "All similar items manufactured in Saudi Arabia  5-15 %",
                        "Books and used clothing (reasonable quantities are exempt from duty payments)",
                        "The following items are subject to censorship, confiscation, or may result in penalties at the owner of the goods’ expense:",
                        "Exposed film, including prints, slides, etc.",
                        "Records, books, magazines, pictures, photos, other printed matters, etc.",
                        "Personal computers, audio/video CDs, diskettes, USBs, computer hard disks, printers, etc.",
                        "Mobile or cellular phones",
                        "Audio/video VHS/VCR/cassette tapes and phonograph recordings",
                        "Any items that store information",
                        "A penalty will be charged to the consignee for CD’s, VCR tapes and books confiscated after the censorship. (US$ 135.00 each for CD’s and VCR tapes; and US$ 14.00 each for books)",
                    ]
                }
            ]
        },
        {
            h1: "Prohibited Items",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "All games of chance (gambling paraphernalia) including chess sets, dice, backgammon and the likes",
                        "Animal skins in commercial amount",
                        "Weapons and firearms (real or ornamental, antiques, etc.) including guns, ammunition, fireworks, spears, etc.  (if imported, the owner of the goods will be subject to investigation that may result in fines and/or prison)",
                        "Military uniforms or military equipment of any sort",
                        "Alcoholic beverages or food products containing alcohol such as vanilla, flavouring extract, cooking wines, etc.",
                        "Books, wine making kits, or other items used in the preparation or manufacture of alcoholic drinks and beverages",
                        "Narcotics and unidentified medicines",
                        "Radio transmitter or communication equipment / devices (including receivers, VHF, Marine / police bands or walkie-talkies)",
                        "Stuffed animals (products of taxidermy), statues, figures,carving or objects depicting human or animal forms",
                        "Pornographic materials and literature, including fashion magazines with people wearing underwear or swimsuits",
                        "Any foodstuffs containing pork and related pork meat products, etc.",
                        "Any books pertaining to religions other than Islam",

                    ]
                }
            ]
        },
        {
            h1: "Pets",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "Note: Pets cannot be imported at this time.",
                    ]
                }
            ]
        },
        {
            h1: "Consignment Instructions",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "Recommended:  Contact the destination service to ensure all requirements have been met before import, especially for differences regarding air / sea shipments.",
                    ]
                }
            ]
        },
        {
            h1: "Taxes Applicable",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "Our Services are subject to Value Added Tax (VAT) of 15%.",
                    ]
                }
            ]
        },
        {
            h1: "Note",
            h2: "",
            subheading: [
                {
                    h1: "",
                    points: [
                        "If items subject to censorship are contained in the shipment, Customs Authority will remove them from the container for censorship or review. To reduce the time for clearance, these items must be packed separately for easy access and cartons must be marked clearly on the inventory or be sent by air. The delivery of censored articles may incur additional charges; contact agent for additional information.",
                    ]
                }
            ]
        },

    ])

    const downloadAsZip = () => {
        const filename = "test"
        alert("TEST")
        const urls = [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://cdn.pixabay.com/photo/2015/05/27/02/58/buddha-785863__340.jpg",
        ];

        if (!urls) return;

        const zip = new JSZip();
        const folder = zip.folder("files"); // folder name where all files will be placed in 

        urls.forEach((url) => {
            const blobPromise = fetch(url).then((r) => {
                if (r.status === 200) return r.blob();
                return Promise.reject(new Error(r.statusText));
            });
            const name = url.substring(url.lastIndexOf("/") + 1);
            folder.file(name, blobPromise);
        });

        zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, filename));

    }

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
                    page="country-guide"
                />

                {data.length > 0 && data.map((item, index) => {
                    return (
                        <section id="page-title" className="bg-transparent">
                            <div className="container clearfix ">
                                <div className='heading-medium color-primary-medium'>{item.h1}</div>
                                <div className='heading-medium color-primary-medium'>{item.h2}</div>
                                {item.subheading.length > 0 && item.subheading.map((subitem, subindex) => {
                                    return (
                                        <>
                                            <br />
                                            <div className='heading-small'>{subitem.h1}</div>
                                            {subitem.points.length > 0 && subitem.points.map((point, pointindex) => {
                                                return <div style={{ fontWeight: 500, fontSize: '18px' }} className='color-primary-medium normal-text-large xfooter-banner-desc '>
                                                    <i class="fa fa-arrow-right " aria-hidden="true"></i> &nbsp;
                                                    {point}
                                                </div>
                                            })}
                                            <br />

                                        </>

                                    )
                                })}


                            </div>
                        </section>
                    )
                })

                }




                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default CountryGuide


