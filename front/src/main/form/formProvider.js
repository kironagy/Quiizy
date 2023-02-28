import { createContext, useState } from "react";
export const FormContext = createContext();
export const FormProvider = (props) => {
  const [question, setQuestion] = useState(0);
  return (
    <FormContext.Provider value={[question, setQuestion]}>
      {props.children}
    </FormContext.Provider>
  );
};
