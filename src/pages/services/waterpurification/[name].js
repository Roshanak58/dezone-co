import { useRouter } from "next/router";

import styles from "@/pages/services/treatment.module.css";

function Index() {
  const router = useRouter();
  const type = router.query.name;
  return (
    <div>
      {type === "IndustrialWaterTreatment" && (
        <div className={styles.picbackg}>
          {/* <div className={styles.pageHeight}> */}
            <div className={styles.textServices}>
              <div className={styles.alignBack}>
                <h2>تصفیه آب های صنعتی:</h2></div>
                <p>
                  شرکت مهندسی دزون بهترین راه حل های قابل دسترس برای تصفیه آب
                  های صنعتی با بالاترین کیفیت را ارائه می دهد.
                </p>
                <h2>مراحل و فرآیندهای تصفیه آب های صنعتی شامل:</h2>
              
              <div className={styles.balanceDiv}>
                <div>
                  <ul>
                    <li className={styles.boldLi}> پیش تصفیه:</li>
                    <li className={styles.otherLi}>
                      آشغالگیری در محل تأمین آب{" "}
                    </li>
                    <li className={styles.otherLi}>
                      فیلتراسیون کیسه ای و کاتریجی
                    </li>
                    <li className={styles.otherLi}>آشغالگیری آب خام </li>
                    <li className={styles.otherLi}>تنظیم PH </li>
                    <li className={styles.otherLi}>
                      {" "}
                      ته نشینی با بار سطحی بالا{" "}
                    </li>
                    <li className={styles.otherLi}>ته نشینی شیمیایی </li>
                    <li className={styles.otherLi}>سختی گیری </li>
                    <li className={styles.otherLi}>فیلتراسیون سریع </li>
                    <li className={styles.otherLi}>
                      میکرو، اولترا و نانو فیلتراسیون{" "}
                    </li>
                  </ul>
                  <ul>
                    <li className={styles.boldLi}>تصفیه بیولوژیکی :</li>
                    <li className={styles.otherLi}> تصفیه بی هوازی </li>
                    <li className={styles.otherLi}> تصفیه هوازی </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}>فرآیند حذف املاح :</li>
                    <li className={styles.otherLi}>فیلتراسیون غشایی</li>
                    <li className={styles.otherLi}>تبادل یونی </li>
                    <li className={styles.otherLi}>اسمز معکوس</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}>گند زدایی:</li>
                    <li className={styles.otherLi}> کلریناسیون گازی </li>
                    <li className={styles.otherLi}>
                      {" "}
                      سیستم های تولید کلر در محل{" "}
                    </li>
                    <li className={styles.otherLi}>گند زدایی با ازن </li>
                    <li className={styles.otherLi}> اشعه ماوراء بنفش </li>
                  </ul>
                  <ul>
                    <li className={styles.boldLi}> بازیافت آب:</li>
                    <li className={styles.otherLi}> بازیافت آب بک واش</li>
                    <li className={styles.otherLi}>زلال سازی </li>
                    <li className={styles.otherLi}>فیلتراسیون چند لایه </li>
                    <li className={styles.otherLi}>فیلتراسیون غشایی </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={styles.boldLi}> تصفیه جامدات :</li>
                    <li className={styles.otherLi}>تغلیظ </li>
                    <li className={styles.anotherboldLi}>تغلیظ ثقلی </li>
                    <li className={styles.anotherboldLi}>تغلیظ مکانیکی </li>
                    <li className={styles.otherLi}>آبگیری </li>
                    <li className={styles.anotherboldLi}> فیلتر پرس </li>
                    <li className={styles.anotherboldLi}>بلت فیلتر پرس</li>
                    <li className={styles.anotherboldLi}>سانتریفوژ</li>
                    <li className={styles.otherLi}>واحد تزریق پلیمر</li>
                    <li className={styles.otherLi}>حذف بو </li>
                    <li className={styles.otherLi}>جذب سطحی توسط کربن فعال </li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      )}

      {type === "DrinkingWaterPurification" && (
        <div className={styles.picbackg}>
          <div className={styles.textServices}>
            <div className={styles.alignBack}>
              <h2>تصفیه آب آشامیدنی :</h2>
            </div>
            <p>
              شرکت مهندسی دزون قادر به ارائه مناسب ترین و اقتصادی ترین روشهای
              تصفیه آب آشامیدنی فارغ از منبع تأمین آب می باشد.
            </p>
            <ul>
              <li className={styles.otherLi}>تصفیه آب زیرزمینی و سطحی</li>
              <li className={styles.otherLi}>تصفیه آب دریا و آب شور </li>
            </ul>
            <h2>توانمندیهای شرکت دزون در تصفیه آب شامل مراحل ذیل می باشد: </h2>
            <div className={styles.balanceDiv}>
              <div>
                <ul>
                  <li className={styles.otherLi}>آشغالگیری </li>
                  <li className={styles.otherLi}>میکرواسترینر</li>
                  <li className={styles.otherLi}>حذف مواد ارگانیک</li>
                  <li className={styles.otherLi}>تهیه و تزریق مواد شیمیایی </li>
                  <li className={styles.otherLi}>انعقاد </li>
                  <li className={styles.otherLi}>لخته سازی</li>
                  <li className={styles.otherLi}>ته نشینی با بار سطحی بالا</li>
                  <li className={styles.otherLi}>حذف فلزات سنگین </li>
                  <li className={styles.otherLi}>فیلتراسیون سریع </li>
                  <li className={styles.otherLi}>فیلتراسیون غشایی</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className={styles.otherLi}>میکرو فیلتراسیون </li>
                  <li className={styles.otherLi}>اولترا فیلتراسیون </li>
                  <li className={styles.otherLi}>نانو فیلتراسیون </li>
                  <li className={styles.otherLi}>اسمز معکوس</li>
                  <li className={styles.otherLi}>سختی گیری</li>
                  <li className={styles.otherLi}>مبدلهای کاتیونی و آنیونی</li>
                  <li className={styles.otherLi}>گاز زدایی</li>
                  <li className={styles.otherLi}>
                    گند زدایی با کلر، ازن و سایر مواد شیمیایی و اشعه UV
                  </li>
                  <li className={styles.otherLi}>حذف بو و رنگ </li>
                  <li className={styles.otherLi}>تغلیظ لجن </li>
                  <li className={styles.otherLi}>آبگیری لجن </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
