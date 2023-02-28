import { useContext, useState, useEffect } from "react";
import action from "./action.png";
import fantasy from "./fantasy.png";
import horror from "./horror.png";
import romance from "./romance.png";
import { useParams } from "react-router-dom";

import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const Movies = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  const { name } = useParams();

  useEffect(() => {
    if (error.includes("movies")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>
        What type of movies does {name} like?
      </h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "movies";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.movies === "action"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, movies: "action" };
                });
              }}
            >
              <img className="optionImg" src={action} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Action
              </h6>
            </button>
            <button
              className={
                data.movies === "fantasy"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, movies: "fantasy" };
                });
              }}
            >
              <img className="optionImg" src={fantasy} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Fantasy
              </h6>
            </button>
            <button
              className={
                data.movies === "horror"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, movies: "horror" };
                });
              }}
            >
              <img className="optionImg" src={horror} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Horror
              </h6>
            </button>
            <button
              className={
                data.movies === "romance"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, movies: "romance" };
                });
              }}
            >
              <img className="optionImg" src={romance} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Romance
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Movies;
