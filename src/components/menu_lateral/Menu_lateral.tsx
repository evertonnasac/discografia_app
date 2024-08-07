import styled, {css} from "styled-components";
import { Link } from "react-router-dom";


const BoxItens = styled.ul`

`
const ItensMenu = styled.li`
    font-size: 25px;
    cursor: pointer;

`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;

    &:hover {
       color: lightgray; 
    }
`



export const MenuLateral = () => {
    return(
        <BoxItens>
            <ItensMenu>  
                <StyledLink to={"discos"}>Discos</StyledLink>
            </ItensMenu>

            <ItensMenu>  
                <StyledLink to={"faixas"}>Músicas</StyledLink>
            </ItensMenu>
            
        </BoxItens>
    )
}