import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

import { ProjData as projectdata } from "../../constants/ProjData";
import styles from "./Projects.module.css"

function Projects() {
    const activeItems = projectdata.filter((item) => item.Status === "active");
  const inactiveItems = projectdata.filter(
    (item) => item.Status === "Inactive",
  );
  const supplyItems = projectdata.filter((item) => item.supply === "1");
  const [aProjects, setAProjects] = useState(activeItems);
  const [iProjects, setIProjects] = useState(inactiveItems);
  const [sProjects, setSProjects] = useState(supplyItems);
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.ProjectImage}>
        <h3> پروژه های دزون در سراسر ایران</h3>
        <Image src="/images/map.jpg" alt="Logo" width={250} height={200} />
      </div>

      <div className={styles.projectSections}>
        {" "}
        {/* اضافه کردن این container */}
        <div className={styles.sectionColumn}>
          <p className={styles.projectP}>پروژه های فعال:</p>
          {aProjects.map((aproj) => (
            <div key={aproj.id} className={styles.divLink}>
              <p>◾</p>
              <Link
                href={{
                  pathname: `/projects/${aproj.id}`,
                }}
                className={styles.projectLink}
              >
                {aproj.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.sectionColumn}>
          <p className={styles.projectP}>پروژه های خاتمه یافته:</p>
          {iProjects.map((iproj) => (
            <div key={iproj.id} className={styles.divLink}>
              <p>◾</p>
              <Link
                href={{
                  pathname: `/projects/${iproj.id}`,
                }}
                className={styles.projectLink}
              >
                {iproj.name}
              </Link>
            </div>
          ))}
        </div>
        {/* <div className={styles.sectionColumn}>
      <p className={styles.projectP}>تامین تجهیزات شرکت مهندسی دزون ازسازندگان خارجی:</p>
      {sProjects.map((sproj) => (
        <div key={sproj.id} className={styles.divLink}>
          <p>◾</p>
          <Link
            href={{
              pathname: `/supplier/${sproj.id}`,
            }}
            className={styles.projectLink}>
            {sproj.name}
          </Link>
        </div>
      ))}
    </div> */}
      </div>
    </div>
  )
}

export default Projects