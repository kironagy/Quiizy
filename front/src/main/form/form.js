import Name from "./questions/name/name";
import { useContext, useState } from "react";
import { FormContext } from "./formProvider";
import Color from "./questions/color/color";
import Subject from "./questions/subject/subject";
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
import { sendData } from "../../backend/backend";
import { ErrorContext } from "./errorProvider/errorProvider";

const Form = () => {
  const [questions, setQuestions] = useContext(FormContext);
  const [data] = useContext(DataContext);
  const [, setError] = useContext(ErrorContext);
  const [temp, setTemp] = useState(false);
  const [number, setNumber] = useState(0);
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
          {temp ? (
            <span
              style={{
                transform: `translateX(${1100 - number * 100}%)`,
              }}
              className="styleD"
            >
              <h3 style={{ textAlign: "center", color: "white" }}>
                share link with your friends now!
              </h3>
              <p style={{ color: "white", textAlign: "center" }}>Test</p>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href={`http://localhost:3000/test/${data.name}`}
              >{`http://localhost:3000/test/${data.name}`}</a>
              <p style={{ color: "white", textAlign: "center" }}>Results</p>

              <a
                style={{ color: "white", textDecoration: "none" }}
                href={`http://localhost:3000/result/${data.name}`}
              >{`http://localhost:3000/result/${data.name}`}</a>
            </span>
          ) : (
            <></>
          )}
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
                    sendData(data).then((res) => {
                      if (res === "err") {
                        setError(["name"]);
                        setQuestions(0);
                        setNumber(0);
                        return;
                      }
                      setTemp(true);
                      setNumber(questions + 1);
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
};
export default Form;
