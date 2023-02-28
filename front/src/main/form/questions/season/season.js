import { useContext, useState, useEffect } from "react";
import spring from "./spring.png";
import winter from "./winter.png";
import autumn from "./autumn.png";
import summer from "./summer.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Season = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("season")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>What's your favorite season?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "season";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.season === "spring"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, season: "spring" };
                });
              }}
            >
              <img className="optionImg" src={spring} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Spring
              </h6>
            </button>
            <button
              className={
                data.season === "winter"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, season: "winter" };
                });
              }}
            >
              <img className="optionImg" src={winter} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Winter
              </h6>
            </button>
            <button
              className={
                data.season === "autumn"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, season: "autumn" };
                });
              }}
            >
              <img className="optionImg" src={autumn} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Autumn
              </h6>
            </button>
            <button
              className={
                data.season === "summer"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, season: "summer" };
                });
              }}
            >
              <img className="optionImg" src={summer} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Summer
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Season;
