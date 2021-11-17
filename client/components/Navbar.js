import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <span className={styles.language}>en</span>
                    <div className={styles.searchContainer}>
                        <input className={styles.searchInput} type="text" />
                        <SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                </div>
                <div className={styles.center}>
                    <h1 className={styles.logoText}>boringshop</h1>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.link}>
                        <Link href="/sign-in">
                            <a>sign in</a>
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/sign-up">
                            <a>sign up</a>
                        </Link>
                    </li>
                    <li className={styles.cartLink}>
                        <Link href="/blog/hello-world">
                            <Badge badgeContent={4} color="error" >
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
