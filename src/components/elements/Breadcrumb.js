"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";

function Breadcrumb() {
  const pathname = usePathname();

  // const parts = pathname.split("/").filter(Boolean);
  const parts = pathname?.split("/").filter(Boolean) || [];

  const titles = {
    "aboutus": "درباره ما",
    "contactus": "تماس با ما",
    "projects": "پروژه ها",
    "blog": "وبلاگ",
    "services": "خدمات",
    "urbanWasteWater":"تصفیه فاضلاب شهری",
    "IndustrialWastewater":"تصفیه فاضلاب صنعتی",
    "IndustrialWaterTreatment":"تصفیه آب های صنعتی",
    "DrinkingWaterPurification":"تصفیه آب آشامیدنی",
    "supplier":"تأمین قطعات",
    "info":" ",
    "QC":" ",
    "ranking":" ",
    "activity":" ",
    "qualification":" ",
    "engineerS":" ",
    "wstreatment":" ",
    "wtreatment":" ",
    "pstation":" ",
    "operation":" ",
    "afterSale":" ",
    "wastewatertreatment":"تصفیه فاضلاب ",
    "waterpurification":"تصفیه آب",
    "pictureP":" ",
    "dashboard":"داشبورد ",
    "AdminPrpjects":" ",
    "user":" ",
    "signin":" ",

    // ...
  };

  const isId = (str) => {
    if (/^\d+$/.test(str)) return true;
    if (/^[0-9a-fA-F-]{16,}$/.test(str)) return true;
    return false;
  };

  if (parts.length > 0 && isId(parts[parts.length - 1])) {
    parts.pop();
  }

  return (
    <nav className={styles.breadcrumb}>
      <Link href="/">خانه</Link>

      {parts.map((part, index) => {
        const href = "/" + parts.slice(0, index + 1).join("/");

        const title =
          titles[part] ??
          titles[part.toLowerCase()] ??
          decodeURIComponent(part);

        return (
          <span key={href}>
            <span className={styles.sep}> / </span>
            <Link href={href}>{title}</Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
