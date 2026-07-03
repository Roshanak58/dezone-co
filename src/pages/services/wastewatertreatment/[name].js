import { useRouter } from "next/router";

import styles from "@/pages/services/treatment.module.css";

function Index() {
  const router = useRouter();
  const type = router.query.name;
  return (
    <div>
      {type === "urbanWasteWater" && (
        <div className={styles.picbackg}>
          {/* <div className={styles.pageHeight}> */}
            <div className={styles.textServices}>
              <div className={styles.alignBack}>
                <h3>تصفیه فاضلاب شهری:</h3>

                <p>
                  شرکت مهندسی دزون با بهره مندی از به روزترین فن آوری های دنیا
                  قادر می باشد، راهکارهای مناسب و اقتصادی را برای پروژه های
                  تصفیه فاضلاب شهری ارائه نماید.
                </p>
                <h3>فرآیندهای تصفیه فاضلاب :</h3>
              </div>
              <div className={styles.balanceDiv}>
                <div>
                  <ul>
                    <li className={styles.boldLi}> تصفیه فیزیکی :</li>
                    <li className={styles.otherLi}>واحد آشغالگیری </li>
                    <li className={styles.otherLi}>
                      واحد دانه گیری و حذف روغن و چربی
                    </li>
                    <li className={styles.otherLi}>ته نشینی مقدماتی </li>
                  </ul>
                  <ul>
                    <li className={styles.boldLi}>تصفیه شیمیایی:</li>
                    <li className={styles.otherLi}> انعقاد </li>
                    <li className={styles.otherLi}> ته نشینی </li>
                    <li className={styles.otherLi}> خنثی سازی </li>
                    <li className={styles.otherLi}> تثبیت </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}> تصفیه بیولوژیکی :</li>
                    <li className={styles.otherLi}>تصفیه به روش رشد معلق</li>
                    <li className={styles.otherLi}>تصفیه به روش رشد چسبیده</li>
                    <li className={styles.otherLi}>اکسیداسیون بیولوژیک</li>
                    <li className={styles.otherLi}>
                      نیتریفیکاسیون و دنیتریفیکاسیون بیولوژیکی
                    </li>
                    <li className={styles.otherLi}>حذف بیولوژیکی فسفر</li>
                    <li className={styles.otherLi}>
                      تخمیر و اکسیداسیون بیهوازی
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}>تصفیه پیشرفته:</li>
                    <li className={styles.otherLi}> فیلتراسیون </li>
                    <li className={styles.otherLi}> جذب سطحی </li>
                    <li className={styles.otherLi}> عریان سازی </li>
                    <li className={styles.otherLi}> تقطیر </li>
                  </ul>
                  <ul>
                    <li className={styles.boldLi}> گند زدایی:</li>
                    <li className={styles.otherLi}> گند زدایی با کلر </li>
                    <li className={styles.otherLi}> گند زدایی با ازن </li>
                    <li className={styles.otherLi}>
                      {" "}
                      گند زدایی با سایر مواد شیمیایی{" "}
                    </li>
                    <li className={styles.otherLi}> گند زدایی با UV </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}> تصفیه لجن بیولوژیکی :</li>
                    <li className={styles.otherLi}>تغلیظ</li>
                    <li className={styles.otherLi}>تثبیت</li>
                    <li className={styles.otherLi}>هضم بی هوازی </li>
                    <li className={styles.otherLi}> هضم هوازی </li>
                    <li className={styles.otherLi}>کمپوست</li>
                    <li className={styles.otherLi}>تزریق مواد شیمیایی</li>
                    <li className={styles.otherLi}>آبگیری</li>
                    <li className={styles.otherLi}>خشک کردن با حرارت</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      )}
      {type === "IndustrialWastewater" && (
        <div className={styles.aboutus}>
              <h3>تصفیه فاضلاب صنعتی : </h3>
          <p>
            شرکت مهندسی دزون بهترین راه حل های ممکن را برای تصفیه فاضلاب صنعتی و
            استفاده مجدد از پساب تصفیه شده در صنایع مختلف به خصوص صنعت خودرو،
            صنایع غذایی، شیمیایی و پتروشیمی، نساجی، لبنیات، کشتارگاه ها و صنعت
            پلاستیک ارائه می نماید. خدمات ما شامل، آنالیز فاضلاب، مطالعات پایلوت
            برای بکارگیری روش های موثر و اقتصادی تصفیه فاضلاب، طراحی پایه و
            تفصیلی، کمک و یاری مشتریان برای اخذ تأییدیه از سازمان حفاظت محیط
            زیست، تهیه و تأمین تجهیزات لازم و راه اندازی و بهره برداری از پروژه
            می باشد.
          </p>
        </div>
      )}
    </div>
  );
}

export default Index;
