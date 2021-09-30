import classes from './Innovation.module.css';

const Innovation = (props) => {

    console.log("Innovation");

    return <div className={classes.Innovation} id={props.id}>
                <h1>Innovation</h1>
                <div className={classes.Innovation__underline}></div>
                <div className={classes.DivOfImage}>
                    <img src="/images/Innovation/Innovation1.jpg" alt=""/>
                    <div className={classes.Innovation__Description}>
                        <h3>We solve everyday problems using digital transformation</h3>
                    </div>
                </div>
           </div>

}

export default Innovation;