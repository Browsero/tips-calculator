import { createContext, useContext, useReducer, } from "react";

const DataContext = createContext();

function dataReducer(state, action) {
  switch (action.type) {
    case "updateBill": {
      return {
        bill: action.amount,
        tipAmount: state.tipAmount,
        numberOfPeople: state.numberOfPeople,
      };
    }
    case "updateTipAmount": {
      return {
        bill: state.bill,
        tipAmount: action.amount,
        numberOfPeople: state.numberOfPeople,
      };
    }
    case "updateNumberOfPeople": {
      return {
        bill: state.bill,
        tipAmount: state.tipAmount,
        numberOfPeople: action.amount,
      };
    }
    case "reset": {
      return {
        bill: 0.0,
        tipAmount: 1,
        numberOfPeople: 0.0,
      };
    }
    default: {
      throw new Error(`Unhandled action typee: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    bill: 0.0,
    tipAmount: 0.0,
    numberOfPeople: 0.0,
  });
  const value = { state, dispatch };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export { DataProvider, useData, DataContext };
