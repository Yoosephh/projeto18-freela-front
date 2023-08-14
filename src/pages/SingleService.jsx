/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useLocation} from "react-router-dom"
import { styled } from "styled-components"
import AuthContext from "../contexts/AuthContext"
import Logo from "../components/Logo"
import Header from "../components/Header"

export function DisplayService(){
  const location = useLocation()
  const [service, setService] = useState({})
  const {user} = useContext(AuthContext)

  // useEffect(()=>{
  //   if(!user.id) navigate("/signin")
  // },[])

  const config = {
      headers: {'Authorization': `Bearer ${user.token}`}
    }
  const id = location.state.id
  function handleService() {

    if(user.token) axios.get(`${import.meta.env.VITE_API_URL}/services/${id}`, config)
    .then(res => setService(res.data))
    .catch(err => console.log(err.data))
  }
  useEffect(()=> {
    handleService()
  }, [id])

  return (
    <Content>
    <Header />
    <Logo />
    <Container>
      <ContainerImg>
        {<img src={service.photo}/>}
      </ContainerImg>
      <ContainerInfo>
        <h1>{service.name}</h1>
        <h2>{service.longDescription ? service.longDescription : service.shortDescription}</h2>
        <h3>Serviço oferecido em {service.city}</h3>
        <h3>Valor: R${service.price}</h3>
        <h3>Contato: {service.telephone}</h3>
      </ContainerInfo>
    </Container>
    </Content>
  )
}
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items:center ;
  flex-direction: column;
  padding-top: 40px;
  gap: 20px
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 90%;
  height: auto;
  border: 2px solid #eaaa00;
  border-radius: 7px;
`
const ContainerImg = styled.div`
  padding-top: 15px;
  
  img {
    width: 90%;
    border-radius: 14px;
  }
`
const ContainerInfo = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  margin-bottom: 15px;
  h1{
    font-weight: 700;
    font-size: 25px;
  }
  h2 {
    font-weight: 500;
    font-size: 19px;
  }
  h3{ 
    font-weight:400;
    font-size: 19px;
  }
`