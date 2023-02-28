import { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProviderAsk = (props) => {
  const [data, setData] = useState({
    name: "",
    subject: "",
    takes: "",
    color: "",
    season: "",
    drinks: "",
    person: "",
    app: "",
    movies: "",
    travel: "",
    icecream: "",
  });
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
