import Image from "next/image";
import Link from "next/link";

import styles from "@/pages/services/treatment.module.css";

function Wastewatertreatment() {
  return (
    <div className={styles.infoLi}>
      <Image
        src="/images/sewage.jpg"
        alt="Logo"
        width={150}
        height={150}
        className={styles.smallImage}
      />
      <h3>تصفیه فاضلاب</h3>
      <p>
        در طول سال های گذشته، شرکت مهندسی دزون پروژه های متعدد کلید در دست در
        زمینه تصفیه فاضلاب انجام داده است. این پروژه ها در ابعاد مختلف تصفیه
        خانه های کوچک و بزرگ، صنعتی و شهری دسته بندی می شود.{" "}
      </p>
      <div className={styles.balanceItem}>
        <div>
          <Link href="/services/wastewatertreatment/urbanWasteWater">
          <Image
            className={styles.imgBorder}
            src="/images/urbanwastewater.png"
            alt="Logo"
            width={100}
            height={100}
          />

           <p> تصفیه فاضلاب شهری </p>
            
          </Link>
        </div>
        <div>
          <Link href="/services/wastewatertreatment/IndustrialWastewater">
            <Image
              className={styles.imgBorder}
              src="/images/industry.png"
              alt="Logo"
              width={100}
              height={100}
            />

            <p> تصفیه فاضلاب صنعتی</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Wastewatertreatment;
