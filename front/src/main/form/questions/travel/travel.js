import { useContext, useState, useEffect } from "react";
import car from "./car.png";
import plane from "./plane.png";
import ship from "./ship.png";
import train from "./train.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Travel = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("travel")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>How would you prefer to travel?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "travel";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.travel === "car"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, travel: "car" };
                });
              }}
            >
              <img className="optionImg" src={car} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Car
              </h6>
            </button>
            <button
              className={
                data.travel === "plane"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, travel: "plane" };
                });
              }}
            >
              <img className="optionImg" src={plane} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Plane
              </h6>
            </button>
            <button
              className={
                data.travel === "ship"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, travel: "ship" };
                });
              }}
            >
              <img className="optionImg" src={ship} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Ship
              </h6>
            </button>
            <button
              className={
                data.travel === "train"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, travel: "train" };
                });
              }}
            >
              <img className="optionImg" src={train} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Train
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Travel;
