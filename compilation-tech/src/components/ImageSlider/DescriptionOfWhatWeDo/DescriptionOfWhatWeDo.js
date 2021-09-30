import classes from './DescriptionOfWhatWeDo.module.css';

const DescriptionOfImageCategory = (props) => {
    
    let  descriptionOfImageCategory= null;
    const radioProperties = props.radioButtonsProperties;
    const counter = props.counterImage;

    if(counter === 0){
        descriptionOfImageCategory =  <h1 className={classes.CategoryId_0}>{radioProperties[counter].category}</h1>
    }else if(counter === 1){
        descriptionOfImageCategory =  <h1 className={classes.CategoryId_1}>{radioProperties[counter].category}</h1>
    }else if(counter === 2){
        descriptionOfImageCategory =  <h1 className={classes.CategoryId_2}>{radioProperties[counter].category}</h1>
    }

    return <div className={classes.DescriptionOfWhatWeDo}>
                  {descriptionOfImageCategory}
          </div>;
}

export default DescriptionOfImageCategory;