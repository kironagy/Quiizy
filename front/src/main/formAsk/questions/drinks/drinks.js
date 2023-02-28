import { useContext, useState, useEffect } from "react";
import juice from "./juice.png";
import milk from "./milk.png";
import coffee from "./coffee.png";
import { useParams } from "react-router-dom";

import soda from "./soda.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Drinks = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const { name } = useParams();

  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("drinks")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>What's {name} favorite drink?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "drinks";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.drinks === "juice"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, drinks: "juice" };
                });
              }}
            >
              <img className="optionImg" src={juice} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Juice
              </h6>
            </button>
            <button
              className={
                data.drinks === "milk"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, drinks: "milk" };
                });
              }}
            >
              <img className="optionImg" src={milk} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Milk
              </h6>
            </button>
            <button
              className={
                data.drinks === "coffee"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, drinks: "coffee" };
                });
              }}
            >
              <img className="optionImg" src={coffee} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Coffee
              </h6>
            </button>
            <button
              className={
                data.drinks === "soda"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, drinks: "soda" };
                });
              }}
            >
              <img className="optionImg" src={soda} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Soda
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Drinks;
