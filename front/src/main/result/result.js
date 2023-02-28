import { useState, useLayoutEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { easeQuadInOut } from "d3-ease";
import "./result.css";
import AnimatedProgressProvider from "./provider";
import { scores, check } from "../../backend/backend";
const Result = () => {
  const navigate = useNavigate();
  const [exist, setExist] = useState(false);
  const { name } = useParams();
  const [people, setPeople] = useState();
  useLayoutEffect(() => {
    check(name).then((data) => {
      if (data.data.result) {
        scores(name).then((data) => {
          setPeople(data.data.scores);
        });
        setExist(true);
      } else {
        navigate("/");
      }
    });
  }, []);
  if (exist) {
    return (
      <div className="scoresBody">
        <h1 style={{ marginBottom: 30, textAlign: "center" }}>
          {name}'s results
        </h1>

        <div className="scores">
          {people ? (
            <>
              {people.length > 0 ? (
                <>
                  {people.map((person) => {
                    var { who, score } = person;
                    score = score * 10;
                    return (
                      <div key={who} className="scoreCont">
                        <h5 style={{ marginRight: "auto" }}>{who}</h5>
                        <div style={{ width: 50, height: 50 }}>
                          <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={score}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat={false}
                          >
                            {(value) => {
                              const roundedValue = Math.round(value);
                              return (
                                <CircularProgressbar
                                  value={value}
                                  text={`${roundedValue}%`}
                                  styles={buildStyles({
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgb(5, 19, 103, ${
                                      value / 100 + 0.2
                                    } )`,
                                    textColor: "rgb(5, 19, 103)",
                                    trailColor: "#DFF6FF",
                                  })}
                                />
                              );
                            }}
                          </AnimatedProgressProvider>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="d-flex flex-column ">
                  <h3 style={{ textAlign: "center", color: "rgb(5, 19, 103)" }}>
                    No results yet!
                  </h3>
                  <button
                    className="btn btn-outline-primary mt-2"
                    onClick={() => {
                      navigate(`/test/${name}`);
                    }}
                  >
                    Start test
                  </button>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div style={{ width: "90%" }} className="d-flex">
          <button
            className="homeBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Result;
