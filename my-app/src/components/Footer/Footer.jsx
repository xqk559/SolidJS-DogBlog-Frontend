import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div class={styles.Footer}>
        DogBlog © {currentYear}
    </div>
  )
}

export default Footer;