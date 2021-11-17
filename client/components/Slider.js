import styles from '../styles/Slider.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SlideCard from './SlideCard';
import { useState } from 'react';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const data = [
        {
            id: 1,
            title: "sport cars",
            img: "https://www.mercedes-amg.com/content/global/en/vehicles/c-class/coupe/jcr:content/content/tabbedcontent_143413/tabs/tabbedentry_1/content/threeimagegallery_co/image1.media6.responsive_12col_16_9.1624894040905.jpeg",
            imgAlt: "mercedes c63 amg",
            description: "The best sport cars!",
            btnText: "check available sport cars"

        },
        {
            id: 2,
            title: "luxury cars",
            img: "https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/7067eefd-4b3c-4ffd-b84f-1b9527fd8c4e.jpg?source=next&fit=scale-down&quality=highest&width=1067",
            imgAlt: "rolls royce ghost",
            description: "The most luxury cars",
            btnText: "check available luxury cars"

        },
    ]

    let additionalStyles = {
        transform: `translateX(${slideIndex * -100}vw)`
    }

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : data.length - 1);
        } else {
            setSlideIndex(slideIndex < data.length - 1 ? slideIndex + 1 : 0);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowLeft}>
                <ArrowBackIosNewIcon onClick={() => handleClick('left')} />
            </div>
            <div className={styles.wrapper} style={additionalStyles}>
                {data.map((el) => {
                    return <SlideCard {...el} />
                })}

            </div>
            <div className={styles.arrowRight}>
                <ArrowForwardIosIcon onClick={() => handleClick('right')} />
            </div>
        </div>
    )
}
export default Slider;
