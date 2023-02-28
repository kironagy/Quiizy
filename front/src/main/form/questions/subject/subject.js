import { useContext, useState, useEffect } from "react";
import math from "./math.png";
import english from "./english.png";
import history from "./history.png";
import science from "./science.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import "./subject.css";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Subject = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("subject")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>
        What's your favorite school subject?
      </h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "subject";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.subject === "math"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, subject: "math" };
                });
              }}
            >
              <img className="optionImg" src={math} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Math
              </h6>
            </button>
            <button
              className={
                data.subject === "english"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, subject: "english" };
                });
              }}
            >
              <img className="optionImg" src={english} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                English
              </h6>
            </button>
            <button
              className={
                data.subject === "history"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, subject: "history" };
                });
              }}
            >
              <img className="optionImg" src={history} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                History
              </h6>
            </button>
            <button
              className={
                data.subject === "science"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, subject: "science" };
                });
              }}
            >
              <img className="optionImg" src={science} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Science
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Subject;
