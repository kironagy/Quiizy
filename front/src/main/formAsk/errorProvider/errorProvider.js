import { createContext, useState } from "react";
export const ErrorContext = createContext();
export const ErrorProviderAsk = (props) => {
  const [Errors, setErrors] = useState([]);
  return (
    <ErrorContext.Provider value={[Errors, setErrors]}>
      {props.children}
    </ErrorContext.Provider>
  );
};
