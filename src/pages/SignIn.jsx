import { useState } from "react"
import { styled } from "styled-components"
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { Form, Page } from "../components/StylesComponents";
import axios from "axios";

export default function SignIn(){
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email:"",
    password:""
  })

  function handleSubmit(e){
    e.preventDefault();
    axios.post("/signin", login)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <Page>
      <Header>
        <h1>Ainda não tem uma conta? Cadastre-se <SignUpLink onClick={() => navigate("/signup")}>aqui</SignUpLink></h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <div className="email">
        <CustomInput 
              id={"email"}
              name={"email"}
              placeholder={"Digite seu email"}
              type={"email"}
              onChangeValue={(email) => {
                setLogin(prevState =>( {
                ...prevState,
                email
              } ))}}/> 
        </div>
        <div className="password">
        <CustomInput 
              id={"password"}
              name={"password"}
              placeholder={"Digite sua senha"}
              type={"password"}
              onChangeValue={(password) => {
                setLogin(prevState =>( {
                ...prevState,
                password
              } ))}}/> 
        </div>
        <button type="submit">Fazer login</button>
      </Form>
    </Page>
  )
}

const Header = styled.div`
display: flex;
  position: absolute;
  top: 25px;
  right: 30px;
`
const SignUpLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;