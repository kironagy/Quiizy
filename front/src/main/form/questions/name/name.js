import { useContext, useState, useEffect } from "react";
import "./name.scss";
import { DataContext } from "../../questionsProvider/questionsProvider";
import name from "./name.png";
import { ErrorContext } from "../../errorProvider/errorProvider";

const Name = () => {
  const [error, setError] = useContext(ErrorContext);
  const [required, setRequired] = useState(false);
  const [data, setData] = useContext(DataContext);
  const ChangeInput = (e) => {
    setData((data) => {
      return { ...data, name: e.target.value.toLowerCase() };
    });
  };
  useEffect(() => {
    if (error.includes("name")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="Name">
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        <h5>What's your name?</h5>
        <img src={name}></img>
      </div>

      <input
        type="text"
        className={required ? "nameReq " : "option"}
        onClick={() => {
          setError((errors) => {
            const temp = errors.filter((error) => {
              return error !== "name";
            });
            return temp;
          });
        }}
        maxLength={35}
        placeholder="Your Name"
        onChange={ChangeInput}
      />
    </div>
  );
};
export default Name;
