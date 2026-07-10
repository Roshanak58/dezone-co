import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") router.replace("/dashboard");
  }, [status]);
  const services = [
    {
      title: "تامین تجهیزات",
      desc: "تامین تجهیزات با کیفیت از برندهای معتبر جهانی",
      icon: "/images/supplyer.png",
      link: "/supplier",
    },
    {
      title: "تصفیه آب",
      desc: "راهکارهای نوین برای تصفیه آب شرب و صنعتی",
      icon: "/images/waterTr.png",
      link: "/services/waterpurification",
    },
    {
      title: "تصفیه فاضلاب",
      desc: "طراحی و اجرای سیستم‌های تصفیه فاضلاب شهری و صنعتی",
      icon: "/images/wasteWT.png",
      link: "/services/wastewatertreatment",
    },
    {
      title: "خدمات و پشتیبانی",
      desc: "ارائه خدمات مهندسی و پشتیبانی در تمامی مراحل پروژه",
      icon: "/images/afterSales.png",
      link: "/services/afterSale",
    },
  ];
  return (
    <>
      <Head>
        <title>شرکت مهندسی دزون | تصفیه آب و فاضلاب</title>

        <meta
          name="description"
          content="طراحی، ساخت و تامین تجهیزات تصفیه آب و فاضلاب"
        />

        <meta name="keywords" content="تصفیه آب، تصفیه فاضلاب، تجهیزات تصفیه" />
      </Head>
      <div className="image-wrapper">
        <Image
          src="/images/watertraeat.PNG"
          alt="Wastewater treatment"
          width={1145}
          height={400}
          className="borderPic"
        />

        <div className="corner-cover">
          <div>
            <span className="eng-title">Dezone Engineering Company</span>

            {/* <p className="eng-subtitle">
            Municipal Utilities, Water & Wastewater Treatment
          </p> */}

            <h2>راهکارهای مهندسی </h2>
            <h2>بـرای آب پـاک و پایـدار</h2>
            <h3>طراحی، ساخت و تأمین قطعات و تجهیزات پروژه های آب و فاضلاب</h3>
            <h3>با فناوری روز دنیا</h3>
          </div>
          <div className="LinkSection">
            <Link href="/projects" className="LinkStyle">
              پروژه ها
            </Link>
            <Link href="/services" className="LinkStyle">
              {" "}
              خدمات ما
            </Link>
          </div>
        </div>
        {/* <div className="overlay"></div> */}

        <div className="services-grid">
          {services.map((item, index) => (
            <Link href={item.link} key={index} className="service-item">
              <Image src={item.icon} alt={item.title} width={60} height={60} />

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
