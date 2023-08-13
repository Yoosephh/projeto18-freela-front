import { styled } from "styled-components"
import * as S from "../components/StylesComponents";
import { useNavigate } from "react-router-dom";
import FooterBar from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";

export default function HomeScreen(){
  const navigate = useNavigate();
  useEffect(()=> {
    axios.get()
  })

  const user = {
    userType: "Comprador"
  }
  const services = [
    {
      id: 1,
      name: "Limpeza Residencial",
      photo: "https://example.com/limpeza.jpg",
      shortDescription: "Limpeza completa para sua casa",
      longDescription: "Oferecemos serviços de limpeza residencial, incluindo varrer, lavar, aspirar e mais.",
      price: 150.00,
      telephone: "(47) 3371-0199",
      city: "Florianópolis-SC",
    },
    {
      id: 2,
      name: "Reparo Elétrico",
      photo: "https://example.com/reparo-eletrico.jpg",
      shortDescription: "Consertamos problemas elétricos em sua residência",
      longDescription: "Realizamos diagnóstico e reparo de problemas elétricos em sua casa.",
      price: 200.00,
      telephone: "(47) 98857-0233",
      city: "São Paulo-SP",
    },
    {
      id: 3,
      name: "Jardinagem",
      photo: "https://example.com/jardinagem.jpg",
      shortDescription: "Cuidamos do seu jardim com carinho",
      longDescription: "Serviços de jardinagem, poda de árvores, plantio de flores e manutenção de gramados.",
      price: 120.00,
      telephone: "(31) 2222-5555",
      city: "Belo Horizonte-MG",
    },
    {
      id: 4,
      name: "Serviço de Pintura",
      photo: "https://example.com/pintura.jpg",
      shortDescription: "Transforme seu ambiente com uma nova pintura",
      longDescription: "Pintura de paredes internas e externas, aplicação de texturas e revestimentos.",
      price: 180.00,
      telephone: "(21) 98765-4321",
      city: "Rio de Janeiro-RJ",
    },
    {
      id: 5,
      name: "Encanamento e Reparos",
      photo: "https://example.com/encanamento.jpg",
      shortDescription: "Soluções para vazamentos e problemas hidráulicos",
      longDescription: "Serviços de encanamento, detecção e reparo de vazamentos, desentupimento e mais.",
      price: 160.00,
      telephone: "(51) 3333-7777",
      city: "Porto Alegre-RS",
    },
    {
      id: 6,
      name: "Personal Trainer",
      photo: "https://example.com/personal-trainer.jpg",
      shortDescription: "Treinos personalizados para atingir seus objetivos",
      longDescription: "Aulas de treinamento físico personalizado, focado em saúde, condicionamento e resultados.",
      price: 250.00,
      telephone: "(19) 5555-8888",
      city: "Campinas-SP",
    }
  ];

  function HomeBuyer() {
    return (
      <BuyerContainer >
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
      <FooterBar />
      </BuyerContainer>
      
    )
  }
  function HomeSeller() {
    return(
      <Footer>
        <div className="content">
          <button>TELA INICIAL</button>
          <button>GERENCIAR ITENS</button>
          <button>ADICIONAR ITEM</button>
        </div>
      </Footer>
    )
  }
  return(
    <Background>
      {user.userType == "Comprador" ? HomeBuyer() : HomeSeller()}
    </Background>
  )
}

const Background = styled.div`
  height: 100vh;

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
    width: 35%;
    align-items: center;
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-radius: 3px;
`