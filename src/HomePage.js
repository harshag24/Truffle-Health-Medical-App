import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BillContext } from "./App";
import { BillsWrapper, BillCard, StyledButton } from './styles';

function HomePage() {
  const { state, dispatch } = useContext(BillContext);

  return (
    <BillsWrapper>
      <h1>Home Page</h1>
      <StyledButton as={Link} to="/form">
        Add a New Bill
      </StyledButton>
      <br/>
      {state.bills.map((bill, i) => (
        <BillCard key={i}>
          <h2>{bill.patientName}</h2>
          <Link to={`/summary/${i}`}>View Bill</Link>
        </BillCard>
      ))}
    </BillsWrapper>
  );
}

export default HomePage;
