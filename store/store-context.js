"use client";
import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_EXPANDED: "SET_EXPANDED", // Can be "main" or "projects" add more here...
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_EXPANDED: {
      return { ...state, expanded: action.payload.expanded };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    expanded: {
      blissfulBlues: 0,
      chasingRed: 0,
      craftingFarmhouse: 0,
      curatingWarmth: 0,
      monochromic: 0,
      refiningClassics: 0,
    },
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
