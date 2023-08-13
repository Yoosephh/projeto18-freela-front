/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { styled } from "styled-components"


export default function CustomInput({ placeholder, onChangeValue, type, name, id}) {

  const [value, setValue] = useState("")
  
  useEffect(()=> {
    onChangeValue(value)
  }, [value])
  return (
    <Input
    id={id}
    name={name}
    type={type}
    autoComplete="true"
    value={value}
    required
    placeholder={placeholder}
    onChange={e => {setValue(e.target.value)}}/>
  )
}
const Input = styled.input`
  padding-left: 15px;
  height: 58px;
  color: #000;
  font-size: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 86%;
  border-radius: 5px;
  background: #FFF;
`