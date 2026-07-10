import styles from "@/components/template/Services.module.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import UrbanWastewater from "../module/UrbanWastewater ";
import { useRouter } from "next/router";

function Services() {
  const [supply, setSupply] = useState(0);
  const [wwtreatment, setWwtreatment] = useState(0);
  const [wtreatment, setWtreatment] = useState(0);
  const [pstation, setPstation] = useState(0);
  const [transferW, setTransferW] = useState(0);
  const [collectT, setColletcT] = useState(0);
  const [enginerS, setEnginerS] = useState(0);
  const [operation, setOperation] = useState(0);
  const [afterSale, setAfterSale] = useState(false);
  // const [urban, setUrban] = useState(0);
  const [active, setActive] = useState(null); // نگهداری index دکمه فعال

  const router = useRouter();
  const wwtreatmentClick = () => {
    setSupply(0);
    setWwtreatment(1);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(1);
  };
  const wtreatmentClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(1);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(2);
  };
  const pStationClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(1);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(3);
  };
  const transferWClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(1);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(4);
  };
  const collectTClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(1);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(5);
  };
  const enginerSClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(1);
    setAfterSale(0);
    setOperation(0);
    setActive(6);
  };
  const afterSaleClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(1);
    setOperation(0);
    setActive(7);
  };
  const oprationClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(1);
    setActive(8);
  };
  const urbanClick = () => {
    router.push("./services/urbanWasteWater");
  };
  const industryClick = () => {
    router.push("./services/IndustrialWastewater");
  };
  const industrywClick = () => {
    router.push("./services/IndustrialWaterTreatment");
  };
  const drinkwClick = () => {
    router.push("./services/DrinkingWaterPurification");
  };
  const supplyerClick = () => {
    setSupply(1);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(9);
    router.push("./supplier");
  };
  return (
    <div className={styles.backService}>
      <h2 className={styles.classH2}>خدمات شرکت مهندسی دزون: </h2>
      <div className={styles.balanceDiv}>
        
          <div className={styles.liClass}>
            <Link href="/services/engineerS" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/engineer.jpg"
                alt="Logo"
                width={100}
                height={105}
              />
              <p className={styles.serviceP}>خدمات مهندسی</p>
              {/* <span className={styles.overlayText}>خدمات مهندسی</span> */}
            </Link>

            <Link
              href="/services/wastewatertreatment"
              className={styles.service}
            >
              <Image
                className={styles.imgBorder}
                src="/images/sewage.jpg"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>تصفیه فاضلاب</p>
              {/* <span className={styles.overlayText}>تصفیه فاضلاب</span> */}
            </Link>
          </div>
          <div className={styles.liClass}>
            <Link href="/services/waterpurification" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/waterr.jpg"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>تصفیه آب</p>
              {/* <span className={styles.overlayText}>تصفیه آب</span> */}
            </Link>
            <Link href="/services/pstation" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/pumping.jpg"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>ایستگاه پمپاژ</p>
              {/* <span className={styles.overlayText}>ایستگاه پمپاژ</span> */}
            </Link>
          </div>
          <div className={styles.liClass}>
            <Link href="/services/operation" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/operation.jpg"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>بهره برداری و نگهداری</p>
              {/* <span className={styles.overlayText}>بهره برداری و نگهداری</span> */}
            </Link>
            <Link href="/services/afterSale" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/afterSalee.png"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>خدمات پس از فروش</p>
              {/* <span className={styles.overlayText}>خدمات پس از فروش</span> */}
            </Link>
            
          </div>
          <div className={styles.liClass}>
            <Link href="/supplier" className={styles.service}>
              <Image
                className={styles.imgBorder}
                src="/images/supplyer.jpg"
                alt="Logo"
                width={105}
                height={105}
              />
              <p className={styles.serviceP}>تأمین قطعات از سازندگان خارجی</p>
              {/* <span className={styles.overlayText}>
                تأمین قطعات از سازندگان خارجی
              </span> */}
            </Link>
          </div>
       
      </div>
    </div>
  );
}

export default Services;
