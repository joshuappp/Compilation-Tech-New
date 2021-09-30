import classes from './RadioInput.module.css';
const RadioInput = (props) => {

    return <div className={classes.RadioInput} onClick={props.clicked}>
                <input type="radio" name="radio-btn"  checked={props.radioStateChecked} onChange={()=>{}}/>  
           </div>
}

export default RadioInput;