import Card from '../../components/Cards/Card/Card';
import classes from './OurWork.module.css';
const ourwork = (props) => {

    return <div className={classes.OurWork} id={props.id}>
               <h1 className={classes.OurWork__Header}>Some of Our Application We Built</h1>
               <div className={classes.OurWork__underline}></div>

               <div className={classes.OurWork__Content}>
                   <div className={classes.OurWork__Item}>
                        <Card card_header="Room Finder"
                              card_body="Help Room Owner To Find Tenant and Tenant To Find Room Quickly"
                              card_button="Go To Room Finder"
                              card_project="https://compilation-tech-roomfinder.web.app/"/>
                   </div>
                   <div className={classes.OurWork__Item}>
                        <Card card_header="House Finder"
                              card_body="Help House Owner To Find Buyer and Buyer To Find Better House"
                              card_button="Go To House Finder"
                              card_project="https://compilation-tech-housefinder.web.app/"/>
                   </div>
                   <div className={classes.OurWork__Item}>
                           <Card card_header="Car Finder"
                              card_body="Help Car Owner To Find Buyer and Buyer To Find Better Car"
                              card_button="Go To Car Finder"
                              card_project="https://compilation-tech-carfinder.web.app/"/>
                   </div>
               </div>
            
           </div>;
    

}

export default ourwork;