import styled from "styled-components"
import { Outlet } from "react-router-dom"

import { MenuLateral } from "./components/menu_lateral/Menu_lateral"

const MainContainer = styled.main`
  height: 100vh;
  width:  100vw;
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgb(0,0,0,0.5);
  background: linear-gradient(#fff 0%, #fff 70%, #f5ffff 100%); ;
  color: gray;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


`

const MainSection = styled.section`
  width: calc(100vw - 320px);
  overflow-y: scroll;
`


function App() {

  return (
    <MainContainer>
      <Nav>
        <MenuLateral/>
      </Nav>
      <MainSection>
        <Outlet/>
      </MainSection>
    </MainContainer>
  )
}

export default App
