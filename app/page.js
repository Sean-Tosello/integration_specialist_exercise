import "./globals.css";
import styles from "../styles/page.module.css";
import Form from "../components/form.js";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.Welcome}>
        <div className={styles.ImageContainer}>
          <img src="/further_element-3.png" alt="further element 3" />
        </div>
        <div className={styles.HeaderContainer}>
          <h1>Dream Further . . .</h1>
        </div>
        <div className={styles.SubHeaderContainer}>
          <h1>. . . Imagine the Possibilities</h1>
        </div>
      </div>
      <div className={styles.MobileWelcomeContainer}>
        <div className={styles.MobileHeaderContainer}>
          <h1>Dream Further . . .</h1>
        </div>
        <div className={styles.MobileSubHeaderContainer}>
          <h1>. . . Imagine the Possibilities</h1>
        </div>
        <div className={styles.MobileImageContainer}>
          <img src="/further_element-3.png" alt="further element 3" />
        </div>
      </div>
      <div className={styles.Form}>
        <Form />
      </div>
    </div>
  );
}
