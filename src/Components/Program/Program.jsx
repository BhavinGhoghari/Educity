import React from "react";
import "./Program.css";
import program1 from "../Photos/program-1.png";
import program2 from "../Photos/program-2.png";
import program3 from "../Photos/program-3.png";
import programicon1 from "../Photos/program-icon-1.png";
import programicon2 from "../Photos/program-icon-2.png";
import programicon3 from "../Photos/program-icon-3.png";

const Program = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program1} alt=" " />
          <div className="caption">
            <img src={programicon1} alt="" />
            <p>Graduaction Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt=" " />
          <div className="caption">
            <img src={programicon2} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt=" " />
          <div className="caption">
            <img src={programicon3} alt="" />
            <p>Post Graduaction Degree</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
