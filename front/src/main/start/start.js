import { useState } from "react";
import "./start.css";
const Start = () => {
  const [animate, setAnimate] = useState("");

  return (
    <div className={`startCont ${animate}`}>
      <div className="instructionsCont">
        <h1 className="startHead">Friendship Quiz - Test Your Bond!</h1>
        <ul className="startList">
          <li>Answer questions about yourself.</li>
          <li>Your quiz link will be created.</li>
          <li>Send link to your friends.</li>
          <li>Come back to see their results.</li>
        </ul>
        <button
          className="instrBtn"
          onClick={() => {
            setAnimate("startContAnimate");
          }}
        >
          Start It Now
        </button>
      </div>
    </div>
  );
};
export default Start;
