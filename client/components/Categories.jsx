import styles from '../styles/Categories.module.scss';
import CategoryItem from './CategoryItem';

const data = [
    {
        id: 1,
        img: 'https://www.alainclass.com/wp-content/uploads/2020/02/2015-Huracan-BLACK-BLUE-00880-16.jpg',
        title: 'sport cars',
    },
    {
        id: 2,
        img: 'https://www.cnet.com/a/img/6nht-Qw95hhHnj28YyM57QNXhac=/940x0/2021/04/26/757e9c36-5b8c-4ddd-b2af-c7a80ac9984e/2021-rolls-royce-wraith-black-badge-110.jpg',
        title: 'luxury cars',
    }
]

function Categories() {
    return (
        <div className={styles.container}>
            {data.map(item =>
                <CategoryItem key={item.id} item={item} />
            )}
        </div>
    )
}

export default Categories
