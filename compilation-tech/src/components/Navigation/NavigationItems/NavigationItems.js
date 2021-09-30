import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
   return <div className={classes.NavigationItems}>
               <ul>
                    <NavigationItem link="home" exact closeSideDrawer={props.clicked}>What we do</NavigationItem>
                    <NavigationItem link="innovation" exact={null} closeSideDrawer={props.clicked}>Innovation</NavigationItem>
                    <NavigationItem link="ourwork" exact={null} closeSideDrawer={props.clicked}>Our work</NavigationItem>
                    <NavigationItem link="aboutus" exact={null} closeSideDrawer={props.clicked}>About Us</NavigationItem>
                    <NavigationItem link="contactus" exact={null} closeSideDrawer={props.clicked}>Contact Us</NavigationItem>
               </ul>
          </div>
}

export default navigationItems;