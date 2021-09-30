import classes from './Popup.module.css';
const Popup = (props) => {
    return <div className={classes.Popup}>
                <h2>{props.message}</h2>
                <button onClick={props.clicked}>OK</button>
           </div>
}

export default Popup;