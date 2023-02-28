import { useContext, useState, useEffect } from "react";
import vanilla from "./vanilla.png";
import chocolate from "./chocolate.png";
import mango from "./mango.png";
import strawberry from "./strawberry.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Icecream = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("icecream")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>
        What is your favorite ice cream flavor?
      </h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "icecream";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.icecream === "vanilla"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, icecream: "vanilla" };
                });
              }}
            >
              <img className="optionImg" src={vanilla} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Vanilla
              </h6>
            </button>
            <button
              className={
                data.icecream === "chocolate"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, icecream: "chocolate" };
                });
              }}
            >
              <img className="optionImg" src={chocolate} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Chocolate
              </h6>
            </button>
            <button
              className={
                data.icecream === "mango"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, icecream: "mango" };
                });
              }}
            >
              <img className="optionImg" src={mango} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Mango
              </h6>
            </button>
            <button
              className={
                data.icecream === "strawberry"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, icecream: "strawberry" };
                });
              }}
            >
              <img className="optionImg" src={strawberry} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Strawberry
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Icecream;
