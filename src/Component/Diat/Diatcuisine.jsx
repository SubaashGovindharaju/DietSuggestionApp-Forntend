import { Link } from "react-router-dom";
// import style form './DiatRout.module.css';
import styles from "./Diatcuisine.module.css";

function Diatcuisine() {
  return (
    <div className="container">
      <div className= {`grid ${styles.imgLayout}`}>
        <div className={styles.imgweightloss}>
          <Link to="/diatcuisine/diat">
            <div className={styles.weightloss}>North Indian</div>
          </Link>
        </div>

        <div className={styles.imgweightgain}>
          <Link to="/diatcuisine/tamildiat">
            <div className={styles.weightgain}>Sount Indian</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Diatcuisine;
