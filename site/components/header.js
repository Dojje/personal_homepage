import styles from '../styles/home.module.scss'

const Header = () => {
  return (
    <div className={styles.header} >
      <a href="/">
        <h2>Dojjes personal homepage</h2>
      </a>
      <div>
        { /*
        TODO Fix links for header
        <a href="/blog">
        blog
        </a>
        <a href="/contact">
          contact
        </a>
        */}
      </div>
    </div>
  )
}
export default Header;
