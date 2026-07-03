import Link from "next/link";
import styles from "./Aboutus.module.css"
import Image from "next/image";
import Certification from "../module/Certification";
import { useState } from "react";
function Aboutus() {
  const [qualification, setQualification] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [activity, setActivity] = useState(0);
   const RankingClick = () => {
    // setInfo(0);
    // setQc(0);
    // setQualification(0);
    setActivity(0);
    setRanking(1);
    // setActive(4);
  };
  const activityClick = () => {
    // setInfo(0);
    // setQc(0);
    // setQualification(0);
    setRanking(0);
    setActivity(1);
    // setActive(5);
  };
  return (
  <div>
      <div className={styles.balanceHeight}>
        <div className={styles.balanceDiv}>
          <Link href="/aboutus/info" className={styles.service}>
            <Image src="/images/info1.png" alt="Logo" width={100} height={100} />
            <p className={styles.serviceP}>اطلاعات کلی شرکت</p>
            <span className={styles.overlayText}>اطلاعات کلی شرکت</span>
          </Link>

          <Link href="/aboutus/QC" className={styles.service}>
            <Image src="/images/QC.png" alt="Logo" width={80} height={100} />
            <p className={styles.serviceP}>خط و مشی کیفی</p>
            <span className={styles.overlayText}>خط و مشی کیفی</span>
          </Link>

          <Link href="/aboutus/Qualification" className={styles.service}>
            <Image
              src="/images/Qualification1.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className={styles.serviceP}>گواهی صلاحیت پیمانکاری</p>
            <span className={styles.overlayText}>گواهی صلاحیت پیمانکاری</span>
          </Link>
          <Link href="/aboutus/ranking" className={styles.service}>
            <Image
              src="/images/Ranking3.png"
              alt="Logo"
              width={80}
              height={100}
              onClick={() => RankingClick()}
            />
            <p className={styles.serviceP}>رتبه بندی صلاحیت ها</p>
            <span className={styles.overlayText}>رتبه بندی صلاحیت ها</span>
          </Link>

          <Link href="/aboutus/activity" className={styles.service}>
            <Image
              src="/images/activity.png"
              alt="Logo"
              width={80}
              height={100}
              onClick={() => activityClick()}
            />
            <p className={styles.serviceP}>موضوع فعالیت </p>
            <span className={styles.overlayText}>موضوع فعالیت </span>
          </Link>
        </div>
      </div>
      {qualification === 1 && (
        <Certification
          qualification={qualification}
          setQualification={setQualification}
        />
      )}
    </div>)
}

export default Aboutus;
