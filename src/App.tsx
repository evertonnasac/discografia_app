import styled from "styled-components"
import { Outlet } from "react-router-dom"

import { MenuLateral } from "./components/menu_lateral/Menu_lateral"

const MainContainer = styled.main`
  height: 100vh;
  width:  100vw;

  display: flex;
`

const Aside = styled.nav`
  height: 100%;
  width: 30%;

`

const MainSection = styled.section`
  width: 65%;
  overflow-y: scroll;
`


function App() {

  return (
    <MainContainer>
      <Aside>
        <MenuLateral/>
      </Aside>
      <MainSection>
        <Outlet/>
      </MainSection>
    </MainContainer>
  )
}

export default App
