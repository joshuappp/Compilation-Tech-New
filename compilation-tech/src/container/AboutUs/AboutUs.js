import classes from './AboutUs.module.css';
import CircleCard from '../../components/Cards/CircleCard/CircleCard';

const aboutus = (props) => {

    return <div className={classes.AboutUs} id={props.id}>
                <div className={classes.AboutUs__header}>
                    <h1>Why We Involves Our Self in Digital Transformation</h1>
                    <div className={classes.AboutUs__underline}></div>
                </div>
                <div className={classes.AboutUs_Description_Items}>
                    <div className={classes.AboutUs_Description_Item_1}>
                        <CircleCard info="We Play A Role In Innovation"/>
                    </div>
                    <div className={classes.AboutUs_Description_Item_2}>
                         <CircleCard info="We Make Things Affordable"/>
                    </div>
                    <div className={classes.AboutUs_Description_Item_3}>
                          <CircleCard info="Improve How We Do Things"/>
                    </div>
                </div>
                
           </div>;

}

export default aboutus;