import ImageSlider from '../../components/ImageSlider/ImageSlider';
import classes from './WhatWeDo.module.css';

const Whatwedo = (props) => {
    
    const imageProperties = [{"image_details": "slide first","image":"/images/WhatWeDo/web/web1.jpg","category":"web"},
                             {"image_details": "slide second","image":"/images/WhatWeDo/mobile/mobile1.jpg","category":"mobile"}
                            ];
    const radioProperties = [{"id":0,"category":"Web App","checked": false},
                            {"id":1,"category":"Mobile App (Android & IOS)","checked": false}
                           ];

    const componentDescription = "descriptionOfWhatWeDo";

    const imageTimeInterval = 11000;

    const imageSlderLastIndex = 1;

    const images = imageProperties.map(imageDetail => {
        return <img src={process.env.PUBLIC_URL + imageDetail.image} alt={imageDetail.category} key={imageDetail.image} />
                
    });

    console.log("What we do");

    return <div className={classes.WhatWeDo} id={props.id}>
                <ImageSlider imageProperties={images} 
                radioProperties={radioProperties} 
                componentDescription={componentDescription} 
                imageSliderTimeInterval={imageTimeInterval}
                imageSlderLastIndex={imageSlderLastIndex}/>
           </div>

}

export default Whatwedo;