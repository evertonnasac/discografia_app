import styled from "styled-components";
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"
import { getApiFaixas } from "../../api/endpoints";
import { Faixa } from "../../types/faixa";

const DivControl = styled.div`
    width: 70%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    background-color: rgb(245,255,255);
    padding: 8px;
    overflow: hidden;

`

const Name = styled.p`
    font-size: 20px;
    color: gray;
    width: 60%;
    margin: 0;
    
`

const Duration = styled.p`
    font-size: 14px;
    color: gray;
    margin: 0;
`
interface Props extends Faixa {
    deleteFn : (id : number) => void
} 

export const CardFaixa = ({name, duration, id, deleteFn} : Props) => {

    const deleteFaixa =  async() => {
        const {deleteFaixas} = getApiFaixas()
        const resp = await deleteFaixas(id)

    }

    return (
        <DivControl>
            <Name>{name}</Name>
            <Duration>{duration}</Duration>
            <ButtonSaveOrRemove action="remove" onClick={() => deleteFn(id)}/>
        </DivControl>
    )
}

