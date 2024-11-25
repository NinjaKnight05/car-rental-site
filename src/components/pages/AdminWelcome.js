import { Link } from "react-router-dom";
import carvideo from "../../Movie/carvideo.mp4";
// import { namedQuery } from "firebase/firestore";

export default function Home() {
  return (
    <div className="admin-welcome">
      <>
        <video src={carvideo} autoPlay loop muted className="video1" />
        <div className="banner_taital_main">
          {/* <h1 className="banner_taital">LuxRyRides</h1> */}
        </div>
      </>
    </div>
  );
}
