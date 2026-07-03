import { ProjSupp as projectSupp } from "../../constants/ProjSupply";
import styles from "@/components/template/Supplier.module.css";

function Index({ projS, oneProj }) {
  const onePr = oneProj;
  return (
    <div className={styles.rightSection}>
      <div className={styles.projectAlign}>
        <div className={styles.profileData}>
          <div className={styles.ProjIdDiv}>
            <h3>پروژه:</h3>
            <p>{onePr.name}</p>
          </div>
          <div className={styles.ProjIdDiv}>
            <h3>کارفرما: </h3>
            <p>{onePr.employer}</p>
          </div>
          <div className={styles.ProjIdDiv}>
            <h3>مشاور:</h3>
            <p>{onePr.consultant}</p>
          </div>
        </div>
      </div>
      <div className={styles.centerItems}>
        <table className={styles.tableLine}>
          <thead>
            <tr>
              <th>نوع تجهیزات</th>
              <th>شرکت سازنده</th>
            </tr>
          </thead>

          <tbody>
            {projS.map((proS) => (
              <tr key={proS.id}>
                <td> {proS.materiel}</td>
                <td className={styles.tdLeft}>{proS.compan}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  const projS = projectSupp.filter((proj) => proj.idProj === id);
  const oneProj = projectSupp.find((pdata) => pdata.idProj === id);

  return {
    props: { projS, oneProj },
  };
}
