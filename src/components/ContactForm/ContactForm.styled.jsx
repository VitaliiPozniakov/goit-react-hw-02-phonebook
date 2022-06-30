import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
border: 1px solid rgba(238, 238, 238, 1);

`;

export const Input = styled.input`
padding-top: 14px;
padding-bottom: 14px;
padding-left: 20px;
font-weight: 400;
font-size: 16px;
line-height: 1.88;
letter-spacing: 0.06em;
width: 400px;
min-height: 20px;
border: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 4px;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);, outline 250ms cubic-bezier(0.4, 0, 0.2, 1);;

&:hover {
  cursor: pointer;
}

&:focus-visible {
  border: 1px solid #2196f3;
  outline: none;
}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`;

export const LabelText = styled.span`
color: black;
font-size: 18px;
font-weight: 700;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Btn = styled.button`
padding: 10px 32px;
color: black;
background-color: #ffffffff;
font-weight: 700;
font-size: 12px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px $button-shadow;
width: 150px;
height: 40px;
// margin: 0 auto;
margin-left: 125px;
margin-bottom: 15px;

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

