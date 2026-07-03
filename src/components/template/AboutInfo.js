import Image from "next/image"
import styles from "./AboutInfo.module.css"

function AboutInfo({ type }) {
  return (
     <div className={styles.about}>
      {type === "info" && (
        <div>
          <Image
            src="/images/info1.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.smallImage}
          />
          <h3 className={styles.aboutH3}>
            اطلاعات کلی و حقوقی شرکت مهندسی دزون{" "}
          </h3>
          <div className={styles.gridLi}>
            <ul>
              <li>محل ثبت: تهران</li>
              <li>کد اقتصادی شرکت: 411335193199</li>
              <li>کدپستی: 1494885961</li>
              <li>نوع شرکت: خصوصی</li>
              <li>شماره ثبت: 89320</li>
            </ul>
            <ul>
              <li>تاریخ ثبت: 27/12/1370</li>
              <li>شناسه ملی شرکت: 10101337068</li>
              <li>سرمایه ثبت شده: 428000000000 ريال</li>
              <li>سرمایه پرداخت شده: 428000000000 ريال</li>
            </ul>
          </div>
        </div>
      )}
      {type === "QC" && (
        <div>
          <Image
            src="/images/QC.png"
            alt="Logo"
            width={80}
            height={100}
            className={styles.smallImage}
          />
          <h3 className={styles.aboutH3}>خط مشی کیفی: </h3>
          <p></p>
          <p className={styles.textClass}>
            شرکت مهندسی دزون متعهد به اصل کیفیت و پیشرفت مستمر در این راه
            است.شرکت دزون با برنامه کنترل کیفی خود، ضامن خدمات ارائه شده جهت
            پاسخگویی به نیازهای مشتریان خواهد بود. هدف ما، ارائه به موقع، دقیق و
            کامل خدمات مورد نیاز براساس نیازهای واقعی مشتریان است.
          </p>
        </div>
      )}
      {type === "ranking" && (
        <div>
          <Image
            src="/images/Ranking3.png"
            alt="Logo"
            width={80}
            height={100}
            className={styles.smallImage}
          />
          <h3 className={styles.aboutH3}>
            رتبه بندی صلاحیت های شرکت مهندسی دزون{" "}
          </h3>
          <p></p>
          <div className={styles.gridLi}>
            <ul>
              <li>پایه یک رشته آب </li>
              <li> پایه دو رشته تاسیسات و تجهیزات </li>
            </ul>
          </div>
        </div>
      )}
      {type === "activity" && (
        <div>
          <Image
            src="/images/activity.png"
            alt="Logo"
            width={80}
            height={100}
            className={styles.smallImage}
          />
          <h3 className={styles.aboutH3}>موضوع فعالیت شرکت (طبق اساسنامه): </h3>
          <p></p>
          <p className={styles.textClass}>
            ارائه خدمات مهندسی اعم از طرح و اجرا در زمینه پروژه های ساختمان
            سازی، ارائه طرح و مشاوره و اجرا در زمینه نصب و راه اندازی تاسیسات و
            تجهیزات شامل تصفیه، انتقال و توزیع آب، جمع آوری، تصفیه و دفع فاضلاب،
            اخذ نمایندگی از داخل و خارج کشور و صادرات و واردات کلیه کالاهای مجاز
            بازرگانی{" "}
          </p>
        </div>
      )}
      {type === "Qualification" && (
        <div >
          <Image
            src="/images/Qualification1.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.smallImage}
          />
          <hr className={styles.hr}/>
          <Image
            src="/images/ContractorQualification.jpg"
            alt="Logo"
            width={400}
            height={600}
            className={styles.clsImage}
          />
        </div>
      )}
    </div>
  )
}

export default AboutInfo