import { Link } from "react-router-dom";
// import style form './DiatRout.module.css';
import styles from "./DiatRout.module.css";

function DiatRout() {
  return (
    <div className="container" >
      <div className="grid grid-cols-2 gap-6"    style={{ height: 730 }}>
        <div className={styles.imgweightloss}>
          <Link to="/diatcuisine/diat/diatloss">
            <div className={styles.weightloss}>Weight Loss</div>
          </Link>
        </div>

        <div className={styles.imgweightgain}>
          <Link to="/diatcuisine/diat/diatgain">
          <div className={styles.weightgain}>Weight Gain</div>
          
          </Link>
        </div>
      </div>
      {/*       
<div className="grid grid-cols-2 hover:grid-cols-6">

  </div> */}
    </div>
    // <div className="flex justify-between">
    //   <div className="w-1/3 flex justify-center items-center">
    //     <Link to="/diat/diatloss">
    //       <img
    //         src='../src/assets/weightloss.jpg'
    //         alt="Weight Gain"
    //         className="cursor-pointer"
    //         style={{height:500}}
    //       />
    //     </Link>
    //   </div>
    //   <div className="w-1/3 flex justify-center items-center">
    //     <Link to="/diat/diatgain">
    //       <img
    //         src="../src/assets/weightgain.jpg"
    //         alt="Weight Loss"
    //         className="cursor-pointer"
    //       />
    //     </Link>
    //   </div>
    // </div>
  );
}

export default DiatRout;
