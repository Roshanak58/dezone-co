import styles from "../proj.module.css";
import { PictureData as pictures } from "../../../constants/PicData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Index({ picproj, projName, projId }) {
  const [pic, setPic] = useState(picproj);
  return (
    <div>
      <h3 className={styles.classh33}>
        {" "}
        عکس های پروژه{" "}
        <Link
          href={{
            pathname: `/projects/${projId}`,
          }}
          className={styles.colorLinkk}
        >
          {projName}
        </Link>
      </h3>
      <div className={styles.pictureProj}>
        {pic.map((pict) => (
          <div key={pict.id}>
            {/* <img src={pict.pic} alt="image" /> */}
            <Image
              className={styles.imgBorder}
              src={pict.pic}
              alt="Logo"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const picproj = pictures.filter((pic) => pic.idProj === id);
  const projName = picproj[0].name;
  const projId = picproj[0].idProj;
  return {
    props: { picproj, projName, projId },
  };
}
