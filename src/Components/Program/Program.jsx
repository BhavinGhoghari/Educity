import React from "react";
import "./Program.css";
import program1 from "../Photos/program-1.png";
import program2 from "../Photos/program-2.png";
import program3 from "../Photos/program-3.png";
import programIcon1 from "../Photos/program-icon-1.png";
import programIcon2 from "../Photos/program-icon-2.png";
import programIcon3 from "../Photos/program-icon-3.png";

const Program = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program1} alt=" " />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt=" " />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt=" " />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Post Graduation Degree</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
