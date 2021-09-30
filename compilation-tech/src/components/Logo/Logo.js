import classes from './Logo.module.css';
import compilationTechLogo from '../../assets/logo.png';
const logo = (props) => (
    <div className={classes.Logo} onClick={props.clicked}>
        <img src={compilationTechLogo} alt="Compilation Logo" />
    </div>
);

export default logo;