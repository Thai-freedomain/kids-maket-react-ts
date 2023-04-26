import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Account from "./pages/Account"
import Store from "./pages/Store"
import { Container } from "react-bootstrap"
import Header from "./components/Header"

function App() {
  

  return (
    <div className="App">
      <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/account'  element={<Account />}/>
            <Route path='/store'  element={<Store />}/>
          </Routes>
        </Container>
    </div>
  )
}

export default App
