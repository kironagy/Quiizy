import "./welcome.css";
import { useState } from "react";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
const Welcome = () => {
  const [animated, setAnimated] = useState("");
  return (
    <div className={`welCont ${animated}`}>
      <div className="curtain"></div>
      <h1
        style={{
          color: "#051367",
          fontSize: "max(3vw, 20px)",
          fontWeight: "bold",
          marginTop: "-100px",
          textAlign: "center",
        }}
      >
        Welcome to Quizzify
      </h1>
      <h6
        style={{
          fontSize: "max(1.5vw, 10px)",
          color: "rgb(5, 19, 103, .5)",
          marginTop: "-15px",
          textAlign: "center",
        }}
      >
        Do your friends really know you?
      </h6>
      <div
        className="startBtnCont"
        onClick={() => {
          setAnimated("animateWel");
        }}
      >
        <p className="startBtn">Find out</p>
        <IoIosArrowForward className="arrow" />
        <IoIosArrowForward className="arrow" />
      </div>
    </div>
  );
};
export default Welcome;
