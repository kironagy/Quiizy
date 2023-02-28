import { useContext, useState, useEffect } from "react";
import cat from "./cat.png";
import dog from "./dog.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";
import { useParams } from "react-router-dom";

const Person = () => {
  const [data, setData] = useContext(DataContext);
  const { name } = useParams();

  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("person")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>Is {name} A Dog Or Cat Person?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "person";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.person === "cat"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, person: "cat" };
                });
              }}
            >
              <img className="optionImg" src={cat} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Cat
              </h6>
            </button>
            <button
              className={
                data.person === "dog"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, person: "dog" };
                });
              }}
            >
              <img className="optionImg" src={dog} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Dog
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Person;
