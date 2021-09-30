import classes from './CircleCard.module.css';

const CircleCard = (props) => {
  return <div className={classes.CircleCard}>
               <div className={classes.CircleCard_info}>
                     <p>{props.info}</p>
               </div>
         </div>
}

export default CircleCard;
