import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./DashboardLayout.module.css";
function DashboardLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };
  const asideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <aside ref={asideRef} className={styles.aside}>
        <p className={styles.asideUl}>« داشبورد »</p>

        <ul className={styles.asideUl}>
          <li>
            <a onClick={() => toggleMenu("projects")}>
              پروژه‌ها
              <span>{openMenu === "projects" ? " 🔼" : " 🔽"}</span>
            </a>

            <ul
              className={styles.subMenu}
              style={{
                display: openMenu === "projects" ? "block" : "none",
              }}
            >
              <li>
                <Link href="/Dashboard/AdminPrpjects">پروژه‌های فعال</Link>
              </li>
              <li>
                <Link href="/Dashboard/AdminPrpjects">پروژه‌های غیرفعال</Link>
              </li>
              <li>
                <Link href="/Dashboard/AdminPrpjects">
                  پروژه های تأمین قطعات
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={styles.asideUl}>
          <li>
            <a onClick={() => toggleMenu("user")}>
              کاربر
              <span>{openMenu === "user" ? " 🔼" : " 🔽"}</span>
            </a>

            <ul
              className={styles.subMenu}
              style={{
                display: openMenu === "user" ? "block" : "none",
              }}
            >
              <li className={styles.liSub}>
                <Link href="/Dashboard/user">کاربر جدید</Link>
              </li>

              <li className={styles.liSub}>
                <Link href="/Dashboard/user">ویرایش، حذف</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <main className={styles.section}>{children}</main>
    </div>
  );
}

export default DashboardLayout;
