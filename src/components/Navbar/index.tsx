import styles from './index.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarHeading}><span>ExaMate.</span></div>
      <div className={styles.navbarLinks}>
        <ul>
          <li>Home</li>
          <li>Exam</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.navbarButton}>
       <a href="/signin"> <button>Log in</button></a>
       <a href="/signup"> <button>Sign up</button></a>
      </div>
    </div>
  )
}

export default Navbar