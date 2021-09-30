import { Link } from "react-scroll";
import classes from './NavigationItem.module.css';

const navigationItem = ( props ) => {
    
    return <div className={classes.NavigationItem}>
                <li>
                    <Link 
                        to={props.link}
                        onClick={props.closeSideDrawer}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={2000}
                    >{props.children}</Link>
                </li>
                
            </div>
            
}

export default navigationItem;