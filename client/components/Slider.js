import styles from '../styles/Slider.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Slider() {
    return (
        <div className={styles.container}>
            <div className={styles.arrowLeft}>
                <ArrowBackIosNewIcon />
            </div>
            <div className={styles.wrapper}>

                <div className={styles.slide}>
                    <div className={styles.imgContainer}>
                        <img src="https://www.mercedes-amg.com/content/global/en/vehicles/c-class/coupe/jcr:content/content/tabbedcontent_143413/tabs/tabbedentry_1/content/threeimagegallery_co/image1.media6.responsive_12col_16_9.1624894040905.jpeg" alt="mercedes c63 amg" />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>sport cars</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quidem maiores mollitia exercitationem, cupiditate beatae officiis dolore odio provident eum aspernatur iste eligendi quibusdam, dolores perspiciatis accusantium in tempore! Rem est fugit exercitationem. Optio repudiandae maiores vero corporis fugit cumque. Voluptate nisi veniam consequuntur odit quia natus expedita ullam odio amet corporis, soluta, quod qui! Harum cumque rem dolores ea eaque temporibus nemo corrupti itaque nihil aliquid ut libero inventore, esse saepe reprehenderit perferendis, aperiam vitae. Vitae aliquam aliquid inventore voluptates nesciunt est cumque eveniet provident, dolor officiis explicabo consequuntur excepturi vero ipsum quas quos voluptatem iusto quaerat voluptate accusantium!</p>
                        <button>check available cars</button>
                    </div>
                </div>
            </div>

            <div className={styles.arrowRight}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}
export default Slider;
