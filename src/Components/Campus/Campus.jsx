import React from "react";
import "./Campus.css";

import gallery_1 from "../Photos/gallery-1.png";
import gallery_2 from "../Photos/gallery-2.png";
import gallery_3 from "../Photos/gallery-3.png";
import gallery_4 from "../Photos/gallery-4.png";
import whiteArrow from "../Photos/white-arrow.png";

const Campus = () => {
  return (
    <>
      <div className="campus">
        <div className="gallery">
          <img src={gallery_1} />
          <img src={gallery_2} />
          <img src={gallery_3} />
          <img src={gallery_4} />
        </div>
        <button className="btn dark-btn">
          See More Here <img src={whiteArrow}></img>
        </button>
      </div>
    </>
  );
};

export default Campus;
