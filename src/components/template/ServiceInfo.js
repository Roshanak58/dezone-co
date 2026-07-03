import Image from "next/image";
import styles from "./ServiceInfo.module.css";
function ServiceInfo({ type }) {
  console.log(type);
  return (
    <div className={styles.textServices}>
      {type === "pstation" && (
        <div className={styles.infoLi}>
          <Image
            className={styles.imgBorder}
            src="/images/pumping.jpg"
            alt="Logo"
            width={105}
            height={105}
          />
          <h3>ایستگاه پمپاژ</h3>
          <p>
            پروژه های کلید در دست اجرا شده توسط شرکت دزون در زمینه ایستگاههای
            پمپاژ آب و فاضلاب از تلمبه خانه های کوچک تا تلمبه خانه های بزرگ شهری
            را شامل می شوند. شرکت مهندسی دزون قادر است آخرین فن آوری ها در زمینه
            های ذیل را عرضه نماید
          </p>
          <p></p>
          <div className={styles.gridLi}>
            <ul>
              <li>ایستگاه های پمپاژ آب خام</li>
              <li> ایستگاه های بوستر پمپ</li>
              <li>ایستگاه های بالابر پساب</li>
              <li>ایستگاه های پمپاژ آتش نشانی </li>
              <li>ایستگاه های پمپاژ چرخش آب </li>
            </ul>
            <ul>
              <li>ایستگاههای پمپاژ چاههای عمیق </li>
              <li>ایستگاههای پمپاژ آبیاری </li>
              <li>ایستگاههای پمپاژ زهاب</li>
              <li>ایستگاههای پمپاژ لجن </li>
            </ul>
          </div>
        </div>
      )}
      {type === "engineerS" && (
        <div className={styles.infoLi}>
          <Image
            className={styles.imgBorder}
            src="/images/engineer.JPG"
            alt="Logo"
            width={100}
            height={105}
          />
          <h3>خدمات مهندسی</h3>
          <p>
            شرکت مهندسی دزون به عنوان پیمانکار متخصص EPC در صنعت آب و فاضلاب،
            خدمات مهندسی مختلفی را ارائه می دهد. که شامل:
          </p>
          <p></p>
          <div className={styles.gridLi}>
            <ul>
              <li>انجام مطالعات امکان سنجی و تشریح فرآیند</li>
              <li> طراحی مهندسی پایه فرآیند </li>
              <li>طراحی مهندسی تفصیلی با بهره گیری از نرم افزارهای مهندسی </li>
              <li>بهینه سازی فرآیند </li>
              <li>کنترل پیشرفته فرآیند </li>
            </ul>
            <ul>
              <li>مدیریت کامل پروژه </li>
              <li>ارتقاء پروژه های موجود </li>
              <li>رفع معایب فنی پروژه ها</li>
              <li>خدمات مهندسی خرید تجهیزات </li>
              <li>مطالعات پایلوت</li>
            </ul>
          </div>
        </div>
      )}
      {type === "operation" && (
        <div className={styles.infoLi}>
          <Image
            className={styles.imgBorder}
            src="/images/operation.jpg"
            alt="Logo"
            width={105}
            height={105}
          />
          <h3>بهره برداری و نگهداری</h3>
          <p>
            شرکت دزون آماده انعقاد قراردادهای تعمیر و نگهداری برای تضمین از
            عملکرد بهینه تصفیه خانه و تلمبه خانه مشتریان خود، می باشد.
          </p>
          <p>خدمات قابل ارائه شامل موارد ذیل می باشد: </p>
          <p></p>
          <div className={styles.gridLi}>
            <ul>
              <li>
                بهره برداری از پروژه و بهینه سازی فرآیند برای دستیابی به محصول
                با بالاترین کیفیت و کاهش مصرف انرژی{" "}
              </li>
              <li> مواد شیمیایی و مواد مصرفی </li>
              <li>تأمین لوازم یدکی و تعمیر و تعویض تجهیزات </li>
              <li>نگهداری پیشگیرانه و برنامه ریزی شده </li>
              <li>بازرسی و رفع عیب </li>
              <li>
                تهیه دستورالعمل های تعمیر و نگهداری و برگه های گزارش های دوره
                ای{" "}
              </li>
              <li>پیروی از استانداردها و دستورالعمل های ایمنی </li>
            </ul>
          </div>
        </div>
      )}
      {type === "afterSale" && (
        <div className={styles.infoLi}>
          <Image
            className={styles.imgBorder}
            src="/images/afterSale.png"
            alt="Logo"
            width={105}
            height={105}
          />
          <h3>خدمات پس از فروش</h3>
          <p>
            مشتریان ما می توانند از طریق برنامه های ما از خدمات پس از فروش،
            مشاوره و حل فنی مشکلاتشان بهره مند شوند.
          </p>
          <p>خدمات قابل ارائه شامل موارد ذیل می باشد: </p>
          <p></p>
          <div className={styles.gridLi}>
            <ul>
              <li>
                {" "}
                بهره برداری از پروژه و بهینه سازی فرآیند برای دست یابی به محصول
                با بالاترین کیفیت
              </li>
              <li>
                تهیه برنامه های نگهداری پیشگیرانه و کاهش در مصرف انرژی، مواد
                شیمیایی و مواد مصرفی{" "}
              </li>
              <li>برگزاری دوره های اختصاصی آموزشی بسته به نیاز مشتریان </li>
              <li>تأمین لوازم یدکی و تعمیر و تعویض تجهیزات </li>
              <li>مساعدت فنی در جهت رفع معایب موجود </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceInfo;
