/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components"
import * as S from "../components/StylesComponents";
import { useNavigate } from "react-router-dom";
import FooterBar from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import AuthContext from "../contexts/AuthContext";

export default function HomeScreen(){
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const [services, setServices] = useState([])

  const config = {
    headers: {'Authorization': `Bearer ${user.token}`}
  }

  function getServices() {
    axios.get("http://localhost:5000/services/", config)
    
    .then(res => {
      setServices(res.data)
    })
    .catch(err => console.log(err))
  }
  useEffect(()=> {

    if(user.token)  getServices()
  }, [user.token])

  
  function HomeBuyer() {
    return (
      
      <BuyerContainer >
        <Header />
        <S.PageTitle> Serviços disponíveis </S.PageTitle>
        {services.map(({name, photo, shortDescription, price, id}, ind) => (
        <ContainerItem key={ind} onClick={() => navigate(`/service/${id}`)}>
          <div className="img">
            <img src={photo} alt={name} />
          </div>
          <div className="content">
            <S.ServiceTitle>{name}</S.ServiceTitle>
            <S.ServiceDescription>{shortDescription}</S.ServiceDescription>
            <S.ServicePrice>R${price} </S.ServicePrice>
          </div>
        </ContainerItem>))}
      </BuyerContainer>
    )
  }

  function HomeSeller() {
    return(
      <>
      <HomeBuyer />
      <FooterBar />
      </>
    )
  }
  return(
    <Background>
      {user.userType == "Vendedor" ? HomeSeller() : HomeBuyer()}
    </Background>
  )
}

const Background = styled.div`
  height: 100vh;
  position:relative;
`
const BuyerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ContainerItem = styled.div`
  height: 90px;
  width: calc(100% - 40px);
  margin: 0 auto;
  border: 2px solid #${Math.floor(Math.random()*16777215).toString(16)};
  border-radius: 5px;
  display: flex;
  gap: 5%;
  .img {
    width: 40%;
    img{
      width: 100%;
      height: 93%;
      padding: 3%;
    }
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`
// const Footer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 80px;
//   border-radius: 3px;
// `