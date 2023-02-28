import Welcome from "./welcome/welcome";
import Start from "./start/start";
import Form from "./form/form";
import FormTest from "./formAsk/form";
import { DataProvider } from "./form/questionsProvider/questionsProvider";
import { DataProviderAsk } from "./formAsk/questionsProvider/questionsProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormProvider } from "./form/formProvider";
import { ErrorProvider } from "./form/errorProvider/errorProvider";
import { FormProviderAsk } from "./formAsk/formProvider";
import { ErrorProviderAsk } from "./formAsk/errorProvider/errorProvider";
import Result from "./result/result";

const Main = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FormProvider>
                <DataProvider>
                  <ErrorProvider>
                    <Welcome />
                    <Start />
                    <Form />
                  </ErrorProvider>
                </DataProvider>
              </FormProvider>
            }
          />
          <Route
            path="/test/:name"
            element={
              <FormProviderAsk>
                <DataProviderAsk>
                  <ErrorProviderAsk>
                    <Welcome />
                    <Start />
                    <FormTest />
                  </ErrorProviderAsk>
                </DataProviderAsk>
              </FormProviderAsk>
            }
          />
          <Route path="/result/:name" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Main;
