import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Innovation from '../Innovation/Innovation';
import OurWork from '../OurWork/OurWork';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const Layout = (props) => {

    console.log("renderLayout");

    return <div className={classes.Layout}>
                <Toolbar />
                <SideDrawer />
                <WhatWeDo id="home"/>
                <Innovation id="innovation"/>
                <OurWork id="ourwork"/>
                <AboutUs id="aboutus"/>
                <ContactUs id="contactus"/>
                {/* <main>{props.children}</main> */}
           </div>
    
}


export default Layout;