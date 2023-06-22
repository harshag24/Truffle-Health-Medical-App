import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import BillForm from "./BillForm";
import BillSummary from "./BillSummary";

export const BillContext = React.createContext();

const initialState = {
  bills: [],
  selectedBill: null
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BILLS":
      return { ...state, bills: action.payload };
    case "SET_SELECTED_BILL":
      return { ...state, selectedBill: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Simulating a fetch request
    const storedBills = localStorage.getItem("bills");
    if (storedBills) {
      dispatch({ type: "SET_BILLS", payload: JSON.parse(storedBills) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(state.bills));
  }, [state.bills]);

  return (
    <BillContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/form/:id?" component={BillForm} />
          <Route path="/summary/:id" component={BillSummary} />
        </Switch>
      </Router>
    </BillContext.Provider>
  );
}

export default App;
