import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

export default function FooterBar() {
  const navigate = useNavigate()
  return (
    <FooterContainer>
      <NavigationIcon onClick={() => navigate("/")}><ion-icon name="home-outline"></ion-icon></NavigationIcon>
      <NavigationIcon onClick={() => navigate("/create")}><ion-icon name="bag-add-outline"></ion-icon></NavigationIcon>
      <NavigationIcon><ion-icon name="person-circle-outline"></ion-icon></NavigationIcon>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: -5px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  height: 60px;
  width: 100%;
`;

const NavigationIcon = styled.div`
  text-align: center;
  color: white;
  font-size: 30px;
`;

