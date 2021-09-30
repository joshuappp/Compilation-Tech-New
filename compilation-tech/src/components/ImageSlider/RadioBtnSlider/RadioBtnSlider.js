import classes from './RadioBtnSlider.module.css';
import RadioInput from './RadioInput/RadioInput';
const RadioBtnSlider = (props) => {

    const radioButtons = props.radioProperties.map(radioButton =>{
        return <RadioInput clicked={() =>props.selectImage(radioButton.id)} key={radioButton.id} radioStateChecked={radioButton.checked}/>
    });

    return <div className={classes.RadioBtnSlider}>
                 {radioButtons}
           </div>

}

export default RadioBtnSlider;