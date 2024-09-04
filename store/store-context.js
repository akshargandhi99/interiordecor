"use client";
import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_HOME_TITLE: "SET_HOME_TITLE", // Can be "main" or "projects" add more here...
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_HOME_TITLE: {
      return { ...state, homeTitle: action.payload.homeTitle };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    homeTitle: 0,
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
