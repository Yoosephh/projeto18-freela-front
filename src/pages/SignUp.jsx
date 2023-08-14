import { styled } from "styled-components"
import CustomInput from "../components/CustomInput"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Form } from "../components/StylesComponents"

export default function SignUp(){
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    photo:"",
    city: "",
    telephone: "",
    userType: "",
  })
  function handleSubmit(e){
    e.preventDefault();
    if(newUser.confirmPassword !== newUser.password) {
      return alert("As senhas precisam ser idênticas!")
    }
    axios.post(`${import.meta.env.VITE_API_URL}/signup`, newUser)
    .then(() => {
      navigate("/signin")
    })
    .catch(err => console.log(err))
  }
  return (
    <Page>
      <Header>
      <h1>Já possui uma conta? Faça seu login <SignInLink onClick={() => navigate("/signin")}>aqui</SignInLink></h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <div className="name">
          <CustomInput 
              id={"nome"}
              name={"nome"}
              placeholder={"Digite seu nome completo"}
              type={"text"}  
              onChangeValue={(name) => {
                setNewUser(prevState =>( {
                ...prevState,
                name
              } ))}}/> 
        </div>
        <div className="email">
        <CustomInput 
              id={"email"}
              name={"email"}
              placeholder={"Escolha um email"}
              type={"email"}
              onChangeValue={(email) => {
                setNewUser(prevState =>( {
                ...prevState,
                email
              } ))}}/> 
        </div>
        <div className="password">
        <CustomInput 
              id={"password"}
              name={"password"}
              placeholder={"Escolha uma senha"}
              type={"password"}
              onChangeValue={(password) => {
                setNewUser(prevState =>( {
                ...prevState,
                password
              } ))}}/> 
        </div>
        <div className="confirmPassword">
        <CustomInput 
              id={"confirmPassword"}
              name={"confirmPassword"}
              placeholder={"Confirme sua senha"}
              type={"password"}
              onChangeValue={(confirmPassword) => {
                setNewUser(prevState =>( {
                ...prevState,
                confirmPassword
              } ))}}/> 
        </div>
        <div className="photo">
        <CustomInput 
              id={"photo"}
              name={"photo"}
              placeholder={"Insira a URL da sua foto"}
              type={"url"}
              onChangeValue={(photo) => {
                setNewUser(prevState =>( {
                ...prevState,
                photo
              } ))}}/> 
        </div>
        <div className="city">
        <CustomInput 
              id={"city"}
              name={"city"}
              placeholder={"Digite seu endereço (São Paulo - SP)"}
              type={"text"}
              onChangeValue={(city) => {
                setNewUser(prevState =>( {
                ...prevState,
                city
              } ))}}/> 
        </div>
        <div className="phone">
        <CustomInput 
              id={"phone"}
              name={"phone"}
              placeholder={"Digite seu número de telefone"}
              type={"tel"}
              onChangeValue={(telephone) => {
                setNewUser(prevState =>( {
                ...prevState,
                telephone
              } ))}}/> 
        </div>
        <div className="profileType">
        <p>Você quer se tornar um TaskMaster</p>
          <label>
            <input
              type="radio"
              value="Comprador"
              checked={newUser.userType === "Comprador"}
              onChange={(e) => setNewUser({ ...newUser, userType: e.target.value })}
            />
            Comprador
          </label>
          <label>
            <input
              type="radio"
              value="Vendedor"
              checked={newUser.userType === "Vendedor"}
              onChange={(e) => setNewUser({ ...newUser, userType: e.target.value })}
            />
            Vendedor
          </label>
        </div>
        <div>
          <button type="submit" onClick={() => handleSubmit}>Criar Conta</button>
        </div>
      </Form>
    </Page>
  )
}
const Page = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`
const Header = styled.div`
display: flex;
  position: absolute;
  top: 25px;
  right: 30px;
`

const SignInLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

