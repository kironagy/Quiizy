import { useContext, useState, useEffect } from "react";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";
import "./color.css";

const Color = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("color")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>What's your favorite color?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "color";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.color === "blue"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, color: "blue" };
                });
              }}
            >
              <div className="color" style={{ backgroundColor: "blue" }}></div>
              <h6 className="optionText" style={{ margin: 0 }}>
                Blue
              </h6>
            </button>
            <button
              className={
                data.color === "red"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, color: "red" };
                });
              }}
            >
              <div className="color" style={{ backgroundColor: "red" }}></div>
              <h6 className="optionText" style={{ margin: 0 }}>
                Red
              </h6>
            </button>
            <button
              className={
                data.color === "black"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, color: "black" };
                });
              }}
            >
              <div className="color" style={{ backgroundColor: "black" }}></div>
              <h6 className="optionText" style={{ margin: 0 }}>
                Black
              </h6>
            </button>
            <button
              className={
                data.color === "white"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, color: "white" };
                });
              }}
            >
              <div className="color"></div>

              <h6 className="optionText" style={{ margin: 0 }}>
                White
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Color;
