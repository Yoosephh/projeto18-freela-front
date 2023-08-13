import { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import FooterBar from "../components/Footer";
import { Form, Page } from "../components/StylesComponents";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

export async function CreateService(){
  const {user} = useContext(AuthContext)
  const config = {
    headers: {'Authorization': `Bearer ${user.token}`}
  }
  const {token, city} = user.token;
  const [service, setService] = useState({
    name:"", 
    shortDescription:"",
    longDescription:"", 
    photo:"",
    city, 
    price:""
  })
  function handleSubmit(e){
    e.preventDefault();
    axios.post("/service", service, config)
  }

  return(
    <Page>
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
      <label>Descrição detalhada do serviço<CustomInput id={"longDescription"}
              name={"longDescription"}
              placeholder={"Opcional"}
              type={"text"}
              onChangeValue={(longDescription) => {
                setService(prevState =>( {
                ...prevState,
                longDescription
              } ))}}></CustomInput></label>
      <label>Insira uma imagem que represente o serviço<CustomInput id={"photo"}
              name={"photo"}
              placeholder={"Imagem do serviço"}
              type={"text"}
              onChangeValue={(url) => {
                setService(prevState =>( {
                ...prevState,
                url
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
      <button type={"submit"} onClick={handleSubmit}></button>
      </Form>
      <FooterBar />
    </Page>
  )
}