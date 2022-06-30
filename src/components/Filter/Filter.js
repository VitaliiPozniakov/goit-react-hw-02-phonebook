import React from "react";
import { Input, Label, LabelText } from "./Filter.styled";



const Filter = ({value, onChange}) =>  (
        <Label>
           <LabelText>Find contacts by name</LabelText> 
            <Input type="text" value={value} onChange={onChange}/>
        </Label>
    )


export default Filter