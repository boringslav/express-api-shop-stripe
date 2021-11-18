import styles from '../styles/Categories.module.scss';
function CategoryItem({ item }) {
    return (
        <div className={styles.categoryContainer}>
            <img className={styles.categoryImg} src={item.img} />
            <div className={styles.categoryInfo}>
                <h1 className={styles.categoryTitle}>{item.title}</h1>
                <button>shop now</button>
            </div>
        </div>
    )
}

export default CategoryItem
