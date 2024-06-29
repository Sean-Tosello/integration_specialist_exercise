import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.Container}>
        <a href="https://www.talkfurther.com/" target="_blank"><img src="/further-header.png" alt="Further Logo" /></a>
    </div>
  );
}