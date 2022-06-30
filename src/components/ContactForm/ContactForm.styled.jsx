import styled from "@emotion/styled";

export const Form = styled.form`

`;

export const Input = styled.input`

`;

export const Label = styled.label`

`;

export const LabelText = styled.span`
color: black;
font-size: 18px;
font-weight: 500;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Btn = styled.button`
padding: 10px 32px;
color: black;
background-color: #ffffffff;
font-weight: 700;
font-size: 16px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px $button-shadow;
min-width: 150px;
max-height: 50 px;
&:not(:last-child) {
  margin-right: 20px;
}
&:hover,
&:focus {
  background-color: #1e90ff;
  color: #ffffffff;
}
&:active {
  background-color: #1e90ff;
  color: red;
}
`;

