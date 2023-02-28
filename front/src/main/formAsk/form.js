import Name from "./questions/name/name";
import { useContext, useState, useLayoutEffect } from "react";
import { FormContext } from "./formProvider";
import Color from "./questions/color/color";
import { useNavigate, useParams } from "react-router-dom";
import Subject from "./questions/subject/subject";
import "./form.css";
import Takes from "./questions/takes/take";
import Season from "./questions/season/season";
import Drinks from "./questions/drinks/drinks";
import Person from "./questions/person/person";
import App from "./questions/app/app";
import Movies from "./questions/movies/movies";
import Travel from "./questions/travel/travel";
import Icecream from "./questions/icecream/icecream";
import { DataContext } from "./questionsProvider/questionsProvider";
import checking from "./checking";
import { answer, check } from "../../backend/backend";
import { ErrorContext } from "./errorProvider/errorProvider";

const Form = () => {
  const [questions, setQuestions] = useContext(FormContext);
  const [data] = useContext(DataContext);
  const { name } = useParams();
  const navigate = useNavigate();
  const [, setError] = useContext(ErrorContext);
  const [number, setNumber] = useState(0);
  const [exist, setExist] = useState(false);
  useLayoutEffect(() => {
    check(name).then((data) => {
      if (data.data.result) {
        setExist(true);
      } else {
        navigate("/");
      }
    });
  }, []);
  if (exist) {
    return (
      <div className="formBody">
        <div className="form">
          {number > 0 && number < 11 ? (
            <p className="counter">{number}/10</p>
          ) : (
            <></>
          )}
          <div className="qCont">
            <span
              style={{
                transform: `translateX(${0 - number * 100}%)`,
              }}
              className="style"
            >
              <Name />
            </span>

            <span
              style={{
                transform: `translateX(${100 - number * 100}%)`,
              }}
              className="style"
            >
              <Subject />
            </span>
            <span
              style={{
                transform: `translateX(${200 - number * 100}%)`,
              }}
              className="style"
            >
              <Takes />
            </span>
            <span
              style={{
                transform: `translateX(${300 - number * 100}%)`,
              }}
              className="style"
            >
              <Color />
            </span>
            <span
              style={{
                transform: `translateX(${400 - number * 100}%)`,
              }}
              className="style"
            >
              <Season />
            </span>
            <span
              style={{
                transform: `translateX(${500 - number * 100}%)`,
              }}
              className="style"
            >
              <Drinks />
            </span>
            <span
              style={{
                transform: `translateX(${600 - number * 100}%)`,
              }}
              className="style"
            >
              <Person />
            </span>
            <span
              style={{
                transform: `translateX(${700 - number * 100}%)`,
              }}
              className="style"
            >
              <App />
            </span>
            <span
              style={{
                transform: `translateX(${800 - number * 100}%)`,
              }}
              className="style"
            >
              <Movies />
            </span>
            <span
              style={{
                transform: `translateX(${900 - number * 100}%)`,
              }}
              className="style"
            >
              <Travel />
            </span>
            <span
              style={{
                transform: `translateX(${1000 - number * 100}%)`,
              }}
              className="style"
            >
              <Icecream />
            </span>
          </div>
          {number < 11 ? (
            <span className="controllerCont">
              <button
                className="PrevQuestion"
                onClick={() => {
                  if (questions === 0) return;
                  setQuestions((questions) => {
                    return questions - 1;
                  });
                  setNumber(questions - 1);
                }}
              >
                Prev
              </button>
              <button
                className="nextQuestion"
                onClick={() => {
                  if (questions === 10) {
                    const errors = checking(data);

                    setError(errors);
                    if (errors?.length === 0) {
                      answer(data, name).then(() => {
                        navigate(`/result/${name}`);
                      });
                    }
                    return;
                  }
                  setQuestions((questions) => {
                    return questions + 1;
                  });
                  setNumber(questions + 1);
                }}
              >
                Next
              </button>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Form;
