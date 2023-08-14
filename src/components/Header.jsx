import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { styled } from "styled-components"

export default function Header(){
  const {user, setUser} = useContext(AuthContext)
  console.log(user)
  function handleLogout(){
    localStorage.removeItem('userInfo')
    setUser(null)
    window.location.reload()
  }

  return(
    <Container>
      <Logo>
        TaskMasters
      </Logo>
      <UserInfo>
        <div>
          Seja bem-vindo, {user.name}!
        </div>
        <button onClick={handleLogout}><ion-icon name="log-out-outline"></ion-icon></button>
      </UserInfo>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`
const Logo = styled.div`
  
`
const UserInfo = styled.div`
  display: flex;
  gap: 15px;
  button{
    background: none;
    border:none;
    font-size: 25px;
    padding: 0;
    height: 25px;
  }
`