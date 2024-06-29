import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Container}>
      <p>© 2024 Sean Tosello</p>
      <div className={styles.FurtherLink}>
        <p>Site Demo for </p>
        <a href="https://www.talkfurther.com/" target="_blank"><img src="/further-header.png"/></a>
      </div>
    </footer>
  );
}