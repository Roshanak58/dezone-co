import { IoCallOutline } from "react-icons/io5";

import styles from "./Footer.module.css";

function Footer() {
  return (
     <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>شرکت مهندسی دزون</h3>
        <p>تهران، انتهای همت غرب شهرک گلستان، خیابان بنفشه، پلاک 53</p>
        {/* <IoCallOutline /> */}
        <p>📞 021-44700011</p>
      </div>
     <div className={styles.leftSec}>
      <p>Developed by R.Ahmadpour</p>
      <p>📞0912****173</p>
     </div>
    </footer>
  )
}

export default Footer