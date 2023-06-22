import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { BillContext } from "./App";
import { FormWrapper, StyledInput, StyledButton, Label, InputWrapper, Error } from './styles';

function BillForm() {
  const { state, dispatch } = useContext(BillContext);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { id } = useParams();
  const [isEditMode, setEditMode] = useState(false);
  const history = useHistory();
  const [formDetails, setFormDetails] = useState({
    patientName: "",
    address: "",
    hospitalName: "",
    dateOfService: "",
    billAmount: "",
    billImage: null
  });

  useEffect(() => {
    if (id) {
      const bill = state.bills[id];
      if (bill) {
        for (let key in bill) {
          if (key === "billImage") continue;
          setValue(key, bill[key]);
        }
        setEditMode(true);
      }
    }
  }, [id, setValue, state.bills]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormDetails({ ...formDetails, billImage: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setFormDetails({ ...formDetails, billImage: null });
    }
  };

  const onSubmit = (data) => {
    const updatedData = { ...data, billImage: formDetails.billImage };

    if (isEditMode) {
      const updatedBills = [...state.bills];
      updatedBills[id] = updatedData;
      dispatch({ type: "SET_BILLS", payload: updatedBills });
    } else {
      dispatch({ type: "SET_BILLS", payload: [...state.bills, updatedData] });
    }
    history.push("/");
  };

  return (
    <FormWrapper>
      <h1>{isEditMode ? "Edit Bill" : "New Bill"}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label>Patient Name</Label>
          <StyledInput {...register("patientName", { required: "Patient Name is required" })} placeholder="Patient Name" />
          {errors.patientName && <Error>⚠️ {errors.patientName.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label>Address</Label>
          <StyledInput {...register("address", { required: "Address is required" })} placeholder="Address" />
          {errors.address && <Error>⚠️ {errors.address.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label>Hospital Name</Label>
          <StyledInput {...register("hospitalName", { required: "Hospital Name is required" })} placeholder="Hospital Name" />
          {errors.hospitalName && <Error>⚠️ {errors.hospitalName.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label>Date of Service</Label>
          <StyledInput type="date" {...register("dateOfService", { required: "Date of Service is required" })} />
          {errors.dateOfService && <Error>⚠️ {errors.dateOfService.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label>Bill Amount (in $)</Label>
          <StyledInput {...register("billAmount", { required: "Bill Amount is required", pattern: { value: /^[0-9]*$/, message: "Bill Amount should be numeric" } })} placeholder="Bill Amount" />
          {errors.billAmount && <Error>⚠️ {errors.billAmount.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label>Bill Image</Label>
          <StyledInput
            type="file"
            name="billImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {errors.billImage && <Error>⚠️ {errors.billImage}</Error>}
        </InputWrapper>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </FormWrapper>
  );
}

export default BillForm;
