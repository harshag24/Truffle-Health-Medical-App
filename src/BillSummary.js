import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BillContext } from "./App";
import { StyledButton, SummaryWrapper } from './styles';

function BillSummary() {
  const { state, dispatch } = useContext(BillContext);
  const { id } = useParams();

  useEffect(() => {
    if (state.bills[id]) {
      dispatch({ type: "SET_SELECTED_BILL", payload: state.bills[id] });
    }
  }, [state.bills, dispatch, id]);

  if (!state.selectedBill) return <div>No bill selected</div>;

  const { patientName, address, hospitalName, dateOfService, billAmount, billImage } = state.selectedBill;

  const handleDelete = () => {
    const updatedBills = [...state.bills];
    updatedBills.splice(id, 1);
    dispatch({ type: "SET_BILLS", payload: updatedBills });
  };

  return (
    <SummaryWrapper>
      <div>
        <h1>Bill Summary</h1>
        <p>Patient Name: {patientName}</p>
        <p>Address: {address}</p>
        <p>Hospital Name: {hospitalName}</p>
        <p>Date of Service: {dateOfService}</p>
        <p>Bill Amount: ${billAmount}</p>
        <img src={billImage} alt="Bill" />

        <div className="button-group">
          <StyledButton as={Link} to={`/form/${id}`}>Edit Bill</StyledButton>
          <StyledButton onClick={handleDelete} as={Link} to="/">Delete Bill</StyledButton>
          <StyledButton as={Link} to="/">Home</StyledButton>
        </div>
      </div>
    </SummaryWrapper>
  );
}

export default BillSummary;
