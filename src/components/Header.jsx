import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { styled } from "styled-components"
import { useLocation } from "react-router-dom"
import ReturnBtn from "./ReturnBtn"

export default function Header(){
  const {user, setUser} = useContext(AuthContext)
  const location = useLocation()
  function handleLogout(){
    localStorage.removeItem('userInfo')
    setUser({})
    window.location.reload()
  }

  return(
    <Container>
      {location.pathname !== "/signin" && <ReturnBtn />}
      <UserInfo>
        {location.pathname === "/" && <div>
          Seja bem-vindo, {user.name}!
        </div>}
      </UserInfo>
      {location.pathname !== "/signin" &&<Btn onClick={handleLogout}><ion-icon name="log-out-outline"></ion-icon></Btn>}
    </Container>
  )
}

const Container = styled.div`
  justify-content: center;
  width: 100%;
  height: 75px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`

const UserInfo = styled.div`
  padding: 20px;
  display: flex;
  gap: 15px;
  
`
const Btn = styled.button `
  position: fixed;
  top: 50px;
  right: 20px;
  background: none;
  border:none;
  font-size: 25px;
  padding: 0;
  height: 25px;
  color: #eaaa00;

`