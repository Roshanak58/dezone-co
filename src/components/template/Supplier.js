import Link from "next/link";
import styles from "./Supplier.module.css"
import { ProjData as projectdata } from "../../constants/ProjData";

function Supplier() {
  const sProjects = projectdata.filter((item) => item.supply === "1");
  return (
    <div className={styles.suppBack}>
      <div className={styles.suppalign}>
        <p className={styles.projectP}>
          تامین تجهیزات شرکت مهندسی دزون ازسازندگان خارجی:
        </p>
        {sProjects.map((sproj) => (
          <div key={sproj.id} className={styles.divLink}>
            <p>◾</p>
            <Link
              href={{
                pathname: `/supplier/${sproj.id}`,
              }}
              className={styles.projectLink}
            >
              {sproj.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supplier;
