import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType: React.SetStateAction<string>) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: () => cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;