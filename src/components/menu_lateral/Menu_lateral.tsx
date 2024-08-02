import styled, {css} from "styled-components";
import { Link } from "react-router-dom";


const BoxItens = styled.ul`

`
const ItensMenu = styled.li`
    font-size: 25px;
    list-style: none;
    cursor: pointer;

`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
       color: lightgray; 
    }
`



export const MenuLateral = () => {
    return(
        <BoxItens>
            <ItensMenu>  
                <StyledLink to={"discos"}>Meus Discos</StyledLink>
            </ItensMenu>

            <ItensMenu>  
                <StyledLink to={"musicas"}>Minhas Músicas</StyledLink>
            </ItensMenu>
            
        </BoxItens>
    )
}