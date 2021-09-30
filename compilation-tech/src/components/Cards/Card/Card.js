import classes from './Card.module.css';

const Card = (props) => {

    return <div className={classes.Card}>
                 <div className={classes.card__header}>
                     <h2>{props.card_header}</h2>
                 </div>
                 <div className={classes.card__body}>
                     <p>{props.card_body}</p>
                 </div>
                 <div className={classes.card__footer}>
                     <a href={props.card_project} target="_blank">{props.card_button}</a>
                 </div>
           </div>
}

export default Card;