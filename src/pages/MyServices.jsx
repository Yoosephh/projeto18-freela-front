import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import Header from "../components/Header"
import * as S from "../components/StylesComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { Checkbox } from "@mui/material";
import ControlledCheckbox from "../components/CheckBtn";


export default function MyServices(){
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const config = {
    headers: {'Authorization': `Bearer ${user.token}`}
  }
  const [services, setServices] = useState([])
  function handleServices() {
    axios.get(`http://localhost:5000/service/${user.userId}`, config)
    .then(res => setServices(res.data))
    .catch(err => console.log(err.data))
  }

  useEffect(()=> {
    if(user.token) handleServices()
  }, [])

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/service/${id}`, config)
    .then(()=> handleServices())
  }
  return (
    <ContainerServices>
      <Header />
      <S.PageTitle> Seus serviços </S.PageTitle>
        {services.map(({name, photo, shortDescription, price, id}, ind) => (
        <ContainerItem key={ind}>
          <div className="img">
            <img src={photo} alt={name} />
          </div>
          <div className="content">
            <S.ServiceTitle>{name}</S.ServiceTitle>
            <EditItem>
              <div>
                <h1>Disponível?</h1>
                <ControlledCheckbox />
              </div>
              <Btn onClick={() => handleDelete(id)}><ion-icon name="trash-outline"></ion-icon></Btn>
            </EditItem>
            
          </div>
        </ContainerItem>))}
    </ContainerServices>
  )
}

const ContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const EditItem = styled.div`
  display: flex;
`
const Btn = styled.button `
  color:#E83F6F ;
  background-color: transparent;
  border: none;
  width: fit-content;
  height: auto;
  font-size: 20px;
  position: absolute;
  bottom: 5px;
  right: 5px;
`
const ContainerItem = styled.div`
  height: 90px;
  width: calc(100% - 40px);
  margin: 0 auto;
  border: 2px solid #eaaa00;
  border-radius: 5px;
  display: flex;
  gap: 5%;
  position: relative;
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