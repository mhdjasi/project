import React from 'react'
import Header from '../Components/Header'
import Topbar from '../Components/Topbar'
import TwoColumOne from '../Components/TwoColumOne'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import Footer from '../Components/Footer'
import FooterBanner from '../Components/FooterBanner'
import ServiceList from '../Components/Services'

function Services() {
    const [heading01, setHeading01] = React.useState('Big or Small,')
    const [heading02, setHeading02] = React.useState('we handle it all')
    const [desc, setDesc] = React.useState('We deliver more than your expectations by offering complete logistics solutions')
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
                    button={button}
                    page="services"
                />

                {/* <RibbonBanner />
                <Services type="" name="Our Services" see_all_btn={false} />
                <RibbonBannerMembership />
                <Services type="customer" name="Customer Feedback" see_all_btn={false} /> */}

                <ServiceList type="" name="Our Services" see_all_btn={false} />

                <FooterBanner />
                <Footer />
                            </div >
            {/* end */}
        </div >
    )
}

export default Services