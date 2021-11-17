import styles from '../styles/SignIn.module.scss';
function SignInForm() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>sign in</h1>
                <div className={styles.form}>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="enter your username" required />
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="enter your password" required />
                    <button>sign in</button>
                </div>


            </div>

        </div>
    )
}

export default SignInForm
