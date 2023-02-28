import { useContext, useState, useEffect } from "react";
import phone from "./phone.png";
import book from "./book.png";
import { useParams } from "react-router-dom";

import knife from "./knife.png";
import torch from "./torch.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Takes = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  const { name } = useParams();

  useEffect(() => {
    if (error.includes("takes")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>
        What would {name} take for a desert island?
      </h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "takes";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.takes === "phone"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, takes: "phone" };
                });
              }}
            >
              <img className="optionImg" src={phone} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Phone
              </h6>
            </button>
            <button
              className={
                data.takes === "book"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, takes: "book" };
                });
              }}
            >
              <img className="optionImg" src={book} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Book
              </h6>
            </button>
            <button
              className={
                data.takes === "knife"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, takes: "knife" };
                });
              }}
            >
              <img className="optionImg" src={knife} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Knife
              </h6>
            </button>
            <button
              className={
                data.takes === "torch"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, takes: "torch" };
                });
              }}
            >
              <img className="optionImg" src={torch} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Torch
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Takes;
