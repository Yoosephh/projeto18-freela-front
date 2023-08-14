import { styled } from "styled-components"

export default function ReturnBtn(){
  return(
    <CstnBtn onClick={() => history.back()}><ion-icon name="arrow-back-circle-outline"></ion-icon></CstnBtn>
  )
}

const CstnBtn = styled.button `
  font-size: 30px;
  width: auto;
  height: auto;
  color:#eaaa00;
  border: none;
  background-color : transparent ;
  position: fixed;
  top: 50px;
  left: 20px;
`