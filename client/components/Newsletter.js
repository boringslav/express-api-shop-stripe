import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; import styles from '../styles/Newsletter.module.scss';



const Newsletter = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Newsletter</h1>
            <div className={styles.description}>Get timely updates from your favorite products.</div>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput} type="text" name="email" id='email' placeholder="Enter your email..." />
                <button>
                    <EmailOutlinedIcon />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;