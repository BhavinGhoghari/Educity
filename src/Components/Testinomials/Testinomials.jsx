import React, { useRef } from "react";
import "./Testinomials.css";
import nextIcon from "../Photos/next-icon.png";
import backIcon from "../Photos/back-icon.png";
import user1 from "../Photos/user-1.png";
import user2 from "../Photos/user-2.png";
import user3 from "../Photos/user-3.png";
import user4 from "../Photos/user-4.png";

const Testinomials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      console.log("next");
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < -50) {
      tx += 25;
      console.log("perv");
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };
  return (
    <>
      <div className="testinomials">
        <img
          src={nextIcon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={backIcon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>Williom Jonson </h3>
                    <span>Edusity,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made.The Supportive
                  Community,state-of-the-art facilities,and commitment to
                  academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                    <h3>Williom Jonson</h3>
                    <span>Edusity,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made.The Supportive
                  Community,state-of-the-art facilities,and commitment to
                  academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                    <h3>Williom Jonson</h3>
                    <span>Edusity,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made.The Supportive
                  Community,state-of-the-art facilities,and commitment to
                  academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                    <h3>Williom Jonson</h3>
                    <span>Edusity,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made.The Supportive
                  Community,state-of-the-art facilities,and commitment to
                  academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testinomials;