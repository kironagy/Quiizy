import { useContext, useState, useEffect } from "react";
import facebook from "./facebook.png";
import tiktok from "./tiktok.png";
import whatsapp from "./whatsapp.png";
import youtube from "./youtube.png";
import { ErrorContext } from "../../errorProvider/errorProvider";
import { DataContext } from "../../questionsProvider/questionsProvider";

const App = () => {
  const [data, setData] = useContext(DataContext);
  const [required, setRequired] = useState(false);
  const [error, setError] = useContext(ErrorContext);
  useEffect(() => {
    if (error.includes("app")) setRequired(true);
    else setRequired(false);
  }, [error]);
  return (
    <div className="subBody">
      <h5 style={{ textAlign: "center" }}>What app do you use most often?</h5>
      <span className="mt-3 d-flex align-items-center justify-content-between flex-row w-100 ">
        <div className="subCont" style={{ padding: 10 }}>
          <div
            className="optionsCont"
            onClick={() => {
              setError((errors) => {
                const temp = errors.filter((error) => {
                  return error !== "app";
                });
                return temp;
              });
            }}
          >
            <button
              className={
                data.app === "facebook"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, app: "facebook" };
                });
              }}
            >
              <img className="optionImg" src={facebook} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Facebook
              </h6>
            </button>
            <button
              className={
                data.app === "tiktok"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, app: "tiktok" };
                });
              }}
            >
              <img className="optionImg" src={tiktok} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Tiktok
              </h6>
            </button>
            <button
              className={
                data.app === "whatsapp"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, app: "whatsapp" };
                });
              }}
            >
              <img className="optionImg" src={whatsapp} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Whatsapp
              </h6>
            </button>
            <button
              className={
                data.app === "youtube"
                  ? "selected"
                  : `${required ? "required options" : "options"}`
              }
              onClick={() => {
                setData((data) => {
                  return { ...data, app: "youtube" };
                });
              }}
            >
              <img className="optionImg" src={youtube} alt="" />
              <h6 className="optionText" style={{ margin: 0 }}>
                Youtube
              </h6>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};
export default App;
