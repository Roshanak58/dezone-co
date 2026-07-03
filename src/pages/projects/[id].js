import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import { ProjData as projectdata } from "../../constants/ProjData";
import { PictureData as pictures } from "../../constants/PicData";
import { ProcessStepData as ProcessData } from "../../constants/ProcessStepData";

import styles from "@/pages/projects/proj.module.css";

function Index({ servProject, picproj, processproj, numPic, id }) {
  const [project, setProject] = useState(servProject);
  const [pic, setPic] = useState(picproj);
  const [processStep, setProcessStep] = useState(processproj);
  const { data } = useSession();
  const renderProcess = (text) => {
  const parts = text.split(/([A-Za-z0-9-]+)/g);

  return parts.map((part, index) => {
    if (/^[A-Za-z0-9-]+$/.test(part)) {
      return (
        <span
          key={index}
          style={{
            fontFamily: "Arial, sans-serif",
            direction: "ltr",
            unicodeBidi: "isolate",
            color:"antiquewhite"
          }}
        >
          {part}
        </span>
      );
    }

    return part;
  });
};
  return (
    <div className={styles.projectAlign}>
      <div className={styles.profileData}>
        <div className={styles.ProjIdDiv}>
          <h3>پروژه:</h3>
          <p>{project?.name}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>کارفرما: </h3>
          <p>{project?.employer}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>مشاور:</h3>
          <p>{project?.consultant}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>پیمانکار:</h3>
          <p>{project?.contractor}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>نوع پیمان:</h3>
          <p>{project?.typeOfContract}</p>
        </div>
        {project?.capacity !== "none" ? (
          <div className={styles.ProjIdDiv}>
            <h3>ظرفیت:</h3>
            <div style={{ display: "flex" }}>
              <p>{project?.capacity}</p>
              {/* <a style={{ fontWeight: "bold" }}> متر مکعب در روز </a> */}
            </div>
          </div>
        ) : (
          <p></p>
        )}
        <div className={styles.ProjIdDiv}>
          <h3>موقعیت:</h3>
          <p>{project?.location}</p>
        </div>
        {project?.process !== "none" ? (
          <div className={styles.ProjIdDiv}>
            <h3>فرآیند:</h3>
            <p className={styles.tagP}>{renderProcess(project?.process)}</p>
          </div>
        ) : (
          <p></p>
        )}

        <div className={styles.ProjIdDiv}>
          <h3>وضعیت:</h3>
          {project?.Status === "active" ? <p>فعال</p> : <p>خاتمه یافته</p>}
        </div>

        {/* <div className={styles.processStep}> */}
        {project?.id === "10" ? (
          <h3 style={{ color: "#fff" }}>مشخصات طرح:</h3>
        ) : project.id === "32" ? (
          <h3 style={{ color: "#fff" }}>اجراء پروژه:</h3>
        ) : project.id === "27" ? (
          <h3> </h3>
        ) : (
          <h3 style={{ color: "#fff" }}>مراحل فرایند:</h3>
        )}

        <div className={styles.flexContainer}>
          {processStep.map((procS) => (
            <div key={procS.id}>
              <p> - </p>
              <p className={styles.alignText}>{procS?.processStep}</p>
            </div>
          ))}
        </div>
        {/* </div> */}
        {data?.user.level === "A" ? (
          <div className={styles.colorLink}>
            <Link href={{ pathname: `/projects/detailes/${id}` }}>ویرایش </Link>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div>
        <div className={styles.pictureProj}>
          {pic.map((pict) => (
            <div key={pict.id}>
              {/* <img src={pict.pic} alt="image" /> */}
              <Image
                className={styles.imgBorder}
                src={pict.pic}
                alt="Logo"
                width={350}
                height={200}
              />
            </div>
          ))}
        </div>
        <div className={styles.colorLink}>
          {numPic > 3 ? (
            <Link
              href={{
                pathname: `/projects/pictureP/${id}`,
              }}
            >
              مشاهده عکس های بیشتر...
            </Link>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
export async function getServerSideProps(context) {
  const { id } = context.params;

  // گرفتن محصول از API
  // const res = await fetch(`https://yourapi.com/products/${id}`);
  // const product = await res.json();
  const servProject = projectdata.find((pdata) => pdata.id === id);
  const ListPic = pictures.filter((pic) => pic.idProj === id);
  const numPic = ListPic.length;
  const picproj = ListPic.slice(0, 3);
  // const firstSixPics = picproj.slice(0, 6);
  const processproj = ProcessData.filter((proc) => proc.idProj === id);

  return {
    props: { servProject, picproj, processproj, numPic, id },
  };
}
