import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import GlobalStyle from "./assets/globalstyle"
import  AuthContext from "./contexts/AuthContext"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import HomeScreen from "./pages/HomeScreen"
import { CreateService } from "./pages/NewService"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import { DisplayService } from "./pages/SingleService"
import MyServices from "./pages/MyServices"

export default function App() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const userInfo = localStorage.getItem("userInfo")

  useEffect(()=> {
    userInfo ? setUser(JSON.parse(userInfo)) : navigate("/signin")
  }, [userInfo])
  
  const location = useLocation();
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <GlobalStyle />
      {location.pathname !== "/signin" || location.pathname !== "signup" && <Header />}
      <Routes>
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/" element={userInfo ? <HomeScreen /> : <SignIn />} />
        <Route path="/create" element={ <CreateService />} />
        <Route path="/services/:id" element={ <DisplayService />} />
        <Route path="/service/:id" element={ <MyServices />} />
      </Routes>
      </AuthContext.Provider>
  )
}