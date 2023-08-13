import { Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/globalstyle"
import AuthProvider, { AuthContext } from "./contexts/AuthContext"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import HomeScreen from "./pages/HomeScreen"
import { CreateService } from "./pages/NewService"
import { useContext } from "react"

function App() {
  const { user } = useContext(AuthContext)
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={user ? <HomeScreen /> : <SignIn />} />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/create" element={ <CreateService />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
