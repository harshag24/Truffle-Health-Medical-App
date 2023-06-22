import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  margin-top: 50px;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

export const BillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const BillCard = styled.div`
  border: 1px solid #000;
  padding: 20px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #ddd;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Error = styled.p`
  color: red;
  margin-top: 5px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .button-group {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
`;
