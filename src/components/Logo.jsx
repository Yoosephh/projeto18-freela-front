import { styled } from "styled-components"
import logo from"../assets/taskmasters.png"
export default function Logo() {

  return (
    <LogoCont> 
    <img src={logo} alt={"TaskMaster"} />
    </LogoCont>
  )
}

const LogoCont = styled.div `
  text-align: center;
  img {
    width: 275px;
    border-radius: 20px;
  }
`