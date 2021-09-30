import classes from './ImageSlider.module.css';
import RadioBtnSlider from './RadioBtnSlider/RadioBtnSlider';
import React, { useEffect,useState,useCallback } from 'react';
import DescriptionOfWhatWeDo from './DescriptionOfWhatWeDo/DescriptionOfWhatWeDo';

const ImageSlider = (props) => {

    const images = props.imageProperties;

    const radioProperties = props.radioProperties;

    const imageSliderTimeInterval = props.imageSliderTimeInterval;

    const imageSlderLastIndex = props.imageSlderLastIndex;

    let [counter,setCounter] = useState(0);



    const controlSlider = (id) => {
        setCounter(id);
    }

    const incrementCounter = useCallback(() =>{
        if(counter === imageSlderLastIndex){
            setCounter(0);
        }else{
            setCounter(counter+1);
        };
    },[counter,imageSlderLastIndex]);

    useEffect(() => {
            const timer = setTimeout(() => {
                incrementCounter();
            }, imageSliderTimeInterval);
            return () => clearTimeout(timer);
        
    }, [incrementCounter,imageSliderTimeInterval]);

    console.log("Hi There");

    let updateRatioProperties = radioProperties.map(radioProperty =>{
                              return radioProperty.id === counter ? {...radioProperty,checked: true} : radioProperty;
                              });

    const radioButtons = <RadioBtnSlider radioProperties={updateRatioProperties} selectImage={controlSlider}/> 

    const descriptionOfImageCategory= props.componentDescription;
    let decription = ""

    if(descriptionOfImageCategory === "descriptionOfWhatWeDo"){
        decription = <DescriptionOfWhatWeDo radioButtonsProperties={radioProperties} counterImage={counter}/>
    }
    
    return <div className={classes.ImageSlider}>
                <div className={classes.DivOfImages}>
                    {images[counter]}
                </div>
                {decription}
                {radioButtons}
           </div>
    
}

export default ImageSlider;