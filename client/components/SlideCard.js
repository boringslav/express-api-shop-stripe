import styles from '../styles/Slider.module.scss';

function SlideCard({ img, title, description, imgAlt, btnText }) {
    return (

        <>
            <div className={styles.slide}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={imgAlt} />
                </div>
                <div className={styles.infoContainer}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button>{btnText}</button>
                </div>
            </div>
        </>
    )
}

export default SlideCard
