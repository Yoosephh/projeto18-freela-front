import { useContext, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import FooterBar from "../components/Footer";
import { Form, Page } from "../components/StylesComponents";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Header from "../components/Header";

export function CreateService(){
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [service, setService] = useState({
    userId:"",
    name:"", 
    shortDescription:"",
    longDescription:"", 
    photo:"",
    city:"", 
    price:"",
    isActive: true
  })
  const [token, setToken] = useState("")

  function handleUserConfig() {
    const {token, userId, city} = user;
    if(token && userId && city){
      setToken(token)
      setService(prevState => ({
        ...prevState,
        city,
        userId
      }))
    }
  }

  useEffect(()=> {
    handleUserConfig()
  },[user])

  const config = {
    headers: {'Authorization': `Bearer ${token}`}
  }
  function handleSubmit(e){
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/service`, service, config)
    .then(()=> navigate("/"))
    .catch(err => alert(err.response.data))
  }
    return(
      <Page>
        <Header />
        <Logo />
        <Form onSubmit={handleSubmit}>
        <label>Nome do serviço<CustomInput id={"name"}
                name={"name"}
                placeholder={"Qual serviço você vai oferecer?"}
                type={"text"}
                onChangeValue={(name) => {
                  setService(prevState =>( {
                  ...prevState,
                  name
                } ))}}></CustomInput></label>

        <label>Descrição breve do serviço<CustomInput id={"shortDescription"}
                name={"shortDescription"}
                placeholder={"Descreva brevemente o serviço oferecido"}
                type={"text"}
                onChangeValue={(shortDescription) => {
                  setService(prevState =>( {
                  ...prevState,
                  shortDescription
                } ))}}></CustomInput></label>

        <label>Descrição detalhada do serviço<TextArea id={"longDescription"}
                name={"longDescription"}
                required={false}
                rows="4"
                placeholder={"Opcional"}
                onChange={(event) => {
                  setService(prevState =>( {
                  ...prevState,
                  longDescription: event.target.value
                } ))}}></TextArea></label>

        <label>Insira uma imagem que represente o serviço<CustomInput id={"photo"}
                name={"photo"}
                placeholder={"Imagem do serviço"}
                type={"text"}
                onChangeValue={(photo) => {
                  setService(prevState =>( {
                  ...prevState,
                  photo
                } ))}}></CustomInput></label>

        <label>Valor do serviço<CustomInput id={"price"}
                name={"price"}
                placeholder={"R$150,00"}
                type={"text"}
                onChangeValue={(price) => {
                  setService(prevState =>( {
                  ...prevState,
                  price
                } ))}}></CustomInput></label>
        <div><button type={"submit"} onClick={handleSubmit}>Cadastrar serviço</button></div>
        </Form>
        <FooterBar />
      </Page>
    )
  }
  
const TextArea = styled.textarea`
  padding-left: 15px;
  padding-top: 10px;
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
  resize: vertical;
`